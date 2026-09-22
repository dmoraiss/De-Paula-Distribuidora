/* Funcionamento do site. Para editar conteúdo, abra catalogo.js. */

const listaCategorias = document.querySelector("#categorias");
const listaGrupos = document.querySelector("#subcategorias");
const conteudo = document.querySelector("#catalogo");
const campoBusca = document.querySelector("#busca");
const areaBusca = document.querySelector("#area-busca");
const modal = document.querySelector("#modal");
let idiomaAtual = "pt-BR";
let moeda = new Intl.NumberFormat(idiomaAtual, { style: "currency", currency: "BRL" });
let categoriaAtual = categorias[0]?.id;
let grupoAtual = null;
let temporizadorAviso;

// Busca a frase no dicionário e preenche valores como {preco} e {quantidade}.
function traduzir(chave, valores = {}) {
  const texto = traducoes[idiomaAtual][chave] ?? traducoes["pt-BR"][chave] ?? chave;
  return texto.replace(/\{(\w+)\}/g, (marcador, nome) => valores[nome] ?? marcador);
}

// Textos novos continuam aparecendo em português até ganharem uma tradução.
function traduzirConteudo(texto) {
  return textosCatalogo[idiomaAtual]?.[texto] ?? texto;
}

function aplicarIdioma(idioma) {
  idiomaAtual = Object.hasOwn(traducoes, idioma) ? idioma : "pt-BR";
  document.documentElement.lang = idiomaAtual;
  document.querySelector("#idioma").value = idiomaAtual;
  // Muda a apresentação do preço, mas a moeda da loja continua sendo o real.
  moeda = new Intl.NumberFormat(idiomaAtual, { style: "currency", currency: "BRL" });

  document.querySelectorAll("[data-i18n]").forEach(item => {
    item.textContent = traduzir(item.dataset.i18n);
  });
  const atributos = { "data-i18n-aria": "aria-label", "data-i18n-title": "title", "data-i18n-placeholder": "placeholder" };
  Object.entries(atributos).forEach(([chave, atributo]) => {
    document.querySelectorAll(`[${chave}]`).forEach(item => {
      item.setAttribute(atributo, traduzir(item.getAttribute(chave)));
    });
  });

  document.title = `${loja.nome} | ${traduzir("catalogo")}`;
  document.querySelector('meta[name="description"]').content = traduzir("descricaoPagina", { loja: loja.nome });
  document.querySelector("#aviso").hidden = true;
  // Os dados originais e a categoria/busca escolhida são preservados.
  criarCategorias();
  renderizar();
}

// Elementos são preenchidos com textContent: nomes e descrições são textos, não HTML.
function elemento(tag, classe, texto) {
  const item = document.createElement(tag);
  if (classe) item.className = classe;
  if (texto !== undefined) item.textContent = texto;
  return item;
}

function normalizar(texto) {
  return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function formatarPreco(valor) {
  return Number.isFinite(valor) ? moeda.format(valor) : traduzir("consultarValor");
}

function condicoesProduto(produto) {
  const linhas = [];
  const precoPix = produto.precoPix ?? produto.preco;
  if (produto.unidade) linhas.push(traduzir("unidade"));
  if (Number.isFinite(precoPix)) linhas.push(traduzir("condicaoPix", { preco: moeda.format(precoPix) }));
  if (Number.isFinite(produto.precoCartao)) linhas.push(traduzir("condicaoCartao", { preco: moeda.format(produto.precoCartao) }));
  return linhas.join("\n");
}

function preencherLoja() {
  document.querySelector("#nome-loja").textContent = loja.nome;
  document.querySelector("#nome-rodape").textContent = loja.nome;
  const logo = document.querySelector("#logo-loja");
  logo.textContent = loja.sigla;
  if (loja.logo) {
    const imagem = elemento("img");
    imagem.alt = "";
    imagem.src = loja.logo;
    imagem.addEventListener("error", () => { logo.textContent = loja.sigla; });
    logo.replaceChildren(imagem);
  }
}

function criarCategorias() {
  listaCategorias.replaceChildren();
  categorias.forEach(categoria => {
    const botao = elemento("button", "categoria", traduzirConteudo(categoria.nome));
    botao.type = "button";
    botao.dataset.categoria = categoria.id;
    botao.addEventListener("click", () => {
      categoriaAtual = categoria.id;
      grupoAtual = null;
      campoBusca.value = "";
      renderizar();
      botao.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
      voltarAoCatalogo();
    });
    listaCategorias.append(botao);
  });
}

function voltarAoCatalogo() {
  // Evita continuar no fim da página ao trocar uma categoria com muitos produtos.
  const navegacao = document.querySelector("#navegacao");
  if (window.scrollY > navegacao.offsetTop) {
    window.scrollTo({ top: navegacao.offsetTop, behavior: "auto" });
  }
}

function criarProduto(produto) {
  const botao = document.querySelector("#modelo-produto").content.firstElementChild.cloneNode(true);
  const nome = traduzirConteudo(produto.nome);
  botao.querySelector(".produto-nome").textContent = nome;
  botao.querySelector(".produto-descricao").textContent = traduzirConteudo(produto.descricao);
  const condicoes = botao.querySelector(".produto-condicoes");
  condicoes.textContent = condicoesProduto(produto);
  condicoes.hidden = !condicoes.textContent;
  botao.querySelector(".produto-preco").textContent = formatarPreco(produto.preco);
  const imagem = botao.querySelector("img");
  if (produto.imagem) {
    imagem.src = produto.imagem;
    imagem.addEventListener("error", () => imagem.remove());
  } else {
    imagem.remove();
  }
  botao.setAttribute("aria-label", `${nome}, ${formatarPreco(produto.preco)}. ${traduzir("verDetalhes")}`);
  botao.addEventListener("click", () => abrirProduto(produto));
  const item = elemento("li");
  item.append(botao);
  return item;
}

function criarGrupo(nome, itens) {
  const secao = elemento("section", "grupo");
  secao.append(elemento("h2", "titulo-grupo", nome));
  if (!itens.length) {
    secao.append(elemento("p", "vazio", traduzir("categoriaVazia")));
    return secao;
  }
  const lista = elemento("ul", "lista-produtos");
  itens.forEach(produto => lista.append(criarProduto(produto)));
  secao.append(lista);
  return secao;
}

function renderizar() {
  const termo = normalizar(campoBusca.value);
  const categoria = categorias.find(item => item.id === categoriaAtual);
  conteudo.replaceChildren();
  listaGrupos.replaceChildren();
  listaCategorias.querySelectorAll("button").forEach(botao => {
    botao.setAttribute("aria-pressed", String(!termo && botao.dataset.categoria === categoriaAtual));
  });

  if (termo) {
    const encontrados = produtos.filter(produto => {
      const nomeCategoria = categorias.find(item => item.id === produto.categoria)?.nome ?? "";
      const textos = [produto.nome, produto.descricao, produto.grupo, nomeCategoria];
      // A busca aceita tanto o cadastro original quanto o idioma exibido.
      return normalizar([...textos, ...textos.map(traduzirConteudo)].join(" ")).includes(termo);
    });
    listaGrupos.append(elemento("span", "subcategoria", traduzir("resultadosBusca")));
    if (!encontrados.length) {
      conteudo.append(elemento("p", "vazio", traduzir("buscaVazia")));
    } else {
      categorias.forEach(item => {
        const resultados = encontrados.filter(produto => produto.categoria === item.id);
        if (resultados.length) conteudo.append(criarGrupo(traduzirConteudo(item.nome), resultados));
      });
    }
    document.querySelector("#resultado-busca").textContent = traduzir(encontrados.length === 1 ? "resultadoUnico" : "resultadoPlural", { quantidade: encontrados.length });
  } else if (categoria) {
    const itens = produtos.filter(produto => produto.categoria === categoria.id);
    const grupos = [...new Set([...(categoria.grupos || []), ...itens.map(produto => produto.grupo)])];
    grupos.forEach((grupo, indice) => {
      const botao = elemento("button", "subcategoria", traduzirConteudo(grupo));
      botao.type = "button";
      botao.setAttribute("aria-pressed", String(grupoAtual ? grupoAtual === grupo : indice === 0));
      botao.addEventListener("click", () => {
        grupoAtual = grupo;
        listaGrupos.querySelectorAll("button").forEach(item => {
          item.setAttribute("aria-pressed", String(item === botao));
        });
        const secao = conteudo.children[grupos.indexOf(grupo)];
        if (secao) secao.scrollIntoView({ behavior: "auto", block: "start" });
      });
      listaGrupos.append(botao);
      conteudo.append(criarGrupo(traduzirConteudo(grupo), itens.filter(produto => produto.grupo === grupo)));
    });
    if (!grupos.length) conteudo.append(elemento("p", "vazio", traduzir("categoriaVazia")));
    document.querySelector("#resultado-busca").textContent = traduzir("categoriaQuantidade", { categoria: traduzirConteudo(categoria.nome), quantidade: itens.length });
  } else {
    conteudo.append(elemento("p", "vazio", traduzir("emAtualizacao")));
  }
  atualizarSetas();
}

function atualizarSetas() {
  const fim = listaCategorias.scrollWidth - listaCategorias.clientWidth;
  document.querySelector("#categorias-anteriores").hidden = listaCategorias.scrollLeft < 2;
  document.querySelector("#categorias-proximas").hidden = listaCategorias.scrollLeft >= fim - 2;
}

function abrirModal(titulo, elementos) {
  document.querySelector("#titulo-modal").textContent = titulo;
  document.querySelector("#corpo-modal").replaceChildren(...elementos);
  modal.showModal();
}

function abrirProduto(produto) {
  const detalhes = [];
  if (produto.imagem) {
    const imagem = elemento("img", "produto-imagem");
    imagem.src = produto.imagem;
    imagem.alt = traduzirConteudo(produto.nome);
    imagem.addEventListener("error", () => imagem.remove());
    detalhes.push(imagem);
  }
  detalhes.push(elemento("p", "", traduzirConteudo(produto.descricao)));
  if (condicoesProduto(produto)) detalhes.push(elemento("p", "", condicoesProduto(produto)));
  detalhes.push(elemento("p", "produto-preco", formatarPreco(produto.preco)));
  abrirModal(traduzirConteudo(produto.nome), detalhes);
}

function mostrarAviso(mensagem) {
  const aviso = document.querySelector("#aviso");
  clearTimeout(temporizadorAviso);
  aviso.textContent = mensagem;
  aviso.hidden = false;
  temporizadorAviso = setTimeout(() => { aviso.hidden = true; }, 3500);
}

// Busca local, sem servidor, cadastro, banco de dados ou bibliotecas externas.
document.querySelector("#abrir-busca").addEventListener("click", () => {
  areaBusca.hidden = false;
  document.querySelector("#abrir-busca").setAttribute("aria-expanded", "true");
  campoBusca.focus();
});
document.querySelector("#fechar-busca").addEventListener("click", () => {
  areaBusca.hidden = true;
  campoBusca.value = "";
  document.querySelector("#abrir-busca").setAttribute("aria-expanded", "false");
  renderizar();
  document.querySelector("#abrir-busca").focus();
});
campoBusca.addEventListener("input", renderizar);

document.querySelector("#ver-pagamento").addEventListener("click", () => {
  abrirModal(traduzir("formasPagamento"), [elemento("p", "", traduzirConteudo(loja.formasPagamento).toUpperCase())]);
});
document.querySelector("#ver-loja").addEventListener("click", () => {
  const informacoes = [loja.descricao, loja.endereco, loja.horario, loja.telefone]
    .filter(Boolean).map(texto => elemento("p", "", traduzirConteudo(texto)));
  abrirModal(loja.nome, informacoes);
});
document.querySelector("#fechar-modal").addEventListener("click", () => modal.close());
modal.addEventListener("click", evento => { if (evento.target === modal) modal.close(); });

document.querySelector("#compartilhar").addEventListener("click", async () => {
  // Um endereço file:// só existe neste computador e não pode ser compartilhado.
  if (location.protocol === "file:") {
    mostrarAviso(traduzir("compartilharOffline"));
    return;
  }
  const link = location.href.split("#")[0];
  try {
    await navigator.clipboard.writeText(link);
    mostrarAviso(traduzir("linkCopiado"));
  } catch {
    // Alternativa real quando o navegador não permite copiar automaticamente.
    const instrucao = elemento("p", "", traduzir("copiarEndereco"));
    const campo = elemento("input", "link-compartilhar");
    campo.value = link;
    campo.readOnly = true;
    campo.setAttribute("aria-label", traduzir("linkCatalogo"));
    abrirModal(traduzir("compartilharCatalogo"), [instrucao, campo]);
    campo.focus();
    campo.select();
  }
});

document.querySelector("#categorias-anteriores").addEventListener("click", () => {
  listaCategorias.scrollBy({ left: -listaCategorias.clientWidth * 0.7, behavior: "auto" });
});
document.querySelector("#categorias-proximas").addEventListener("click", () => {
  listaCategorias.scrollBy({ left: listaCategorias.clientWidth * 0.7, behavior: "auto" });
});
listaCategorias.addEventListener("scroll", atualizarSetas, { passive: true });
window.addEventListener("resize", atualizarSetas);

document.querySelector("#idioma").addEventListener("change", evento => {
  aplicarIdioma(evento.target.value);
  salvarPreferencia("idioma", idiomaAtual);
});

preencherLoja();
aplicarIdioma(lerPreferencia("idioma"));
