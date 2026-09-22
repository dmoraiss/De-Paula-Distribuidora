# De Paula Distribuidora — catálogo

Site feito somente com HTML, CSS e JavaScript, sem framework, instalação,
compilação ou banco de dados. Não há carrinho, pedidos ou pagamento online.

## Abrir no computador

1. Extraia o ZIP inteiro para uma pasta.
2. Abra essa pasta no VS Code ou em outro editor.
3. Abra `index.html` no navegador. Também funciona com o Live Server do VS Code.

Não abra o HTML ainda dentro do ZIP. As pastas `css`, `js` e `imagens` precisam
ficar ao lado dele. Neste repositório de publicação, esses arquivos ficam em
`dist/`; no ZIP entregue, ficam diretamente na pasta do catálogo.

## Qual arquivo editar?

| Arquivo | O que você pode alterar |
| --- | --- |
| `index.html` | Estrutura da página, botões e modelo de cada produto. |
| `css/estilo.css` | Cores, fontes, margens, tamanhos e versão para celular. |
| `js/catalogo.js` | Nome, logotipo, informações da loja, categorias e produtos. |
| `js/script.js` | Navegação, busca, informações dos produtos e compartilhamento. |
| `js/idiomas.js` | Traduções da interface e dos textos do catálogo. |
| `js/preferencias.js` | Leitura e gravação do idioma escolhido pelo visitante. |
| `imagens/` | Fotos locais dos produtos e o futuro logotipo. |

## Trocar nome ou adicionar o logotipo

No início de `js/catalogo.js`, edite o objeto `loja`:

```javascript
const loja = {
  nome: "De Paula Distribuidora",
  sigla: "DP",
  logo: "imagens/logo.png",
  descricao: "Catálogo de bebidas",
  formasPagamento: "Dinheiro, Pix e cartão",
  endereco: "",
  horario: "",
  telefone: ""
};
```

Salve a imagem como `imagens/logo.png` ou ajuste o caminho para o nome real.
Enquanto `logo` estiver vazio, aparece apenas o círculo com as letras DP.
O nome da loja, o título da aba e a descrição da página acompanham essa alteração.
Endereço, horário e telefone só aparecem na janela “Sobre a loja” se preenchidos.

## Adicionar um produto

Copie um dos objetos da lista `produtos`, coloque uma vírgula entre os objetos
e altere os dados. Exemplo de cadastro, com valores apenas ilustrativos:

```javascript
{
  id: "gin-exemplo-750",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN EXEMPLO 750ml",
  descricao: "Descrição do produto",
  preco: 59.90,
  precoCartao: 64.90,
  imagem: "imagens/gin-exemplo.jpg"
}
```

- `id`: precisa ser único. Prefira letras minúsculas e hífens, sem espaços.
- `categoria`: deve ser o `id` de uma categoria já cadastrada.
- `grupo`: subtítulo dentro da categoria. Por exemplo, “Heineken” em Cerveja.
- `preco`: valor em destaque e, normalmente, valor em dinheiro/Pix.
- `precoCartao`: opcional; use `null` para ocultar essa linha.
- `imagem`: caminho relativo da foto; use `""` para não mostrar imagem.
- `unidade: true`: opcional; mostra a palavra “Unidade” antes dos preços.
- `precoPix`: opcional; só é necessário quando for diferente de `preco`.

Use **ponto nos números**, por exemplo `59.90`. O site transforma isso em
`R$ 59,90`. Use `null` para mostrar “Consulte o valor”. Um preço `0` é exibido
como zero; ele não é confundido com preço ausente.

As fotos e os textos não precisam de links externos. Prefira nomes de arquivos
simples, como `gin-exemplo.jpg`. Em alguns servidores, maiúsculas e minúsculas
são diferentes: o caminho deve ser igual ao nome do arquivo.

## Remover ou reordenar

- **Remover produto:** apague seu objeto completo da lista `produtos`.
- **Ordenar produtos:** mude a posição dos objetos dentro do mesmo grupo.
- **Ordenar categorias:** mude a posição dos objetos na lista `categorias`.
- **Remover categoria:** remova a categoria e seus produtos.
- **Adicionar categoria:** inclua um novo objeto com `id`, `nome` e `grupos`.

Exemplo de categoria:

```javascript
{ id: "novidades", nome: "Novidades", grupos: ["Novidades"] }
```

As três primeiras abas são **Gin, Whisky e Vodka**. Depois vêm Cerveja,
Energético, Licor, Drinks prontos, Champanhe, Vinho, Beats/Ice, Aperitivo,
Cachaça, Rum, Água mineral, Gelos sabores, Refrigerantes/Outros,
Sucos/Groselhas/Mel/Outros, Chocolates/Doces e Copos/Descartáveis/Baldes.

## Alterar o visual

O catálogo usa somente o tema claro. As cores ficam no bloco `:root`,
no começo de `css/estilo.css`.
O arquivo está dividido em seções comentadas: base, cabeçalho, categorias,
produtos, janelas e celular. As regras de celular estão no final.

## Idiomas

No topo da página, o visitante escolhe **Português, English ou Español**.
O idioma escolhido fica guardado neste navegador com `localStorage`,
para ser recuperado ao recarregar a página. Na primeira visita, o idioma
é português. Se o armazenamento estiver bloqueado, o seletor ainda funciona
durante a visita, mas a nova escolha não é guardada.

Pense no funcionamento em três partes:

1. **HTML — `index.html`:** o elemento `select` apresenta os idiomas.
   As marcações `data-i18n` identificam qual texto deve ser traduzido.
2. **CSS — `css/estilo.css`:** variáveis como `--fundo` e `--texto` definem
   as cores do catálogo, que permanece claro em todos os dispositivos.
3. **JavaScript — `js/script.js`:** o evento `change` detecta a escolha,
   atualiza a página e chama as funções de `js/preferencias.js` para guardá-la.
   O arquivo `js/idiomas.js` funciona como um dicionário de traduções.

Para mudar uma tradução, edite `js/idiomas.js`. No objeto `traducoes`, cada
chave identifica uma mensagem: `fechar: "Close"` significa que a mensagem
`fechar` aparece como **Close** em inglês. Marcadores como `{preco}` são
substituídos pelos valores do catálogo; mantenha os nomes dos marcadores.

No objeto `textosCatalogo`, a chave é o texto exato cadastrado em
`js/catalogo.js`. Por exemplo, `"Cerveja": "Beer"` traduz o nome da categoria
para inglês. Ao adicionar ou alterar um texto no catálogo, acrescente sua
tradução nos blocos `en` e `es`. Textos sem tradução aparecem como cadastrados.
Marcas são preservadas e os preços continuam em reais (BRL); só a formatação
muda conforme o idioma. A busca aceita o texto original e o texto traduzido.

**Pequeno desafio:** no bloco inglês de `traducoes`, mude o texto de `fechar`
para `Close search`. Salve, recarregue, selecione English e abra a busca para
ver a mudança. Depois, restaure `Close`.

## O que foi aproveitado das referências

- Layout branco, cabeçalho com nome da loja, abas horizontais, subcategorias,
  produtos em lista, preços e miniaturas à direita.
- Busca em todos os produtos, informações da loja, janela de formas de
  pagamento e botão que copia o link do catálogo.
- 34 produtos legíveis nas fotografias e 28 miniaturas extraídas delas.
- As categorias sem produtos visíveis nas referências foram mantidas vazias.
  Não foram inventados produtos, preços, endereço, telefone ou horários.
- Nenhum logotipo definitivo foi aplicado, conforme solicitado.

### Dados a completar antes de divulgar aos clientes

Os preços são os dos **prints de referência**, não uma tabela confirmada da
De Paula Distribuidora. Confira e substitua os valores conforme o cliente.

Seis produtos ficaram com preço `null` e sem foto, porque essa parte estava
cortada nos prints: Tanqueray Tradicional, Jack Daniels Blackberry,
Ciroc Tradicional, Vibe Maçã Verde, Amarula Cream e Lillet Blanc.

O Licor 43 Chocolate tem uma divergência no print: `R$ 150,90` em destaque e
`R$ 150,00` na descrição do Pix. Os dois foram preservados nos campos `preco`
e `precoPix`, com um comentário no código. Confirme qual deve ser usado.

As imagens foram recortadas das fotos da tela e têm resolução limitada.
Troque-as pelas fotos originais dos produtos para melhorar a nitidez.

O último nome de categoria estava cortado depois de “BALD” na referência;
foi completado como “Copos/Descartáveis/Baldes”. Ajuste se necessário.

## Como funciona

A lista de produtos é lida de `catalogo.js`, sem buscar dados em uma API.
Isso permite abrir o site direto pelo `index.html`. O conteúdo do catálogo
é editado nos arquivos e, depois, publicado. Somente a preferência de idioma
do visitante é salva no navegador.

- A busca ignora acentos e diferenças entre maiúsculas e minúsculas.
- As setas movem as abas; no celular, também é possível deslizar com o dedo.
- As subcategorias levam ao grupo correspondente na lista.
- Ao selecionar um produto, abre uma janela de detalhes, sem compra.
- A tecla Esc fecha as janelas de informações e de produto.
- Compartilhar copia o endereço quando o site está online. No computador,
  um caminho `file://` não funciona para outras pessoas; o site avisa isso.
- Não há rastreamento, cookies nem dependências externas no site.
- O `localStorage` guarda o idioma escolhido.

## Publicar

O conteúdo é estático. Publique `index.html` junto das pastas `css`, `js` e
`imagens` em uma hospedagem de sites estáticos. Não é necessário comando de
build. Depois de modificar um arquivo, publique novamente a versão atualizada.

## Verificações realizadas

Sintaxe JavaScript, leitura da lista de dados, identificadores únicos,
categorias e grupos, preços, referências de arquivos e imagens foram
conferidos localmente na versão inicial.

Na versão anterior, foram verificados em Chrome automatizado a troca de
idiomas, a persistência das preferências, a busca e as janelas, em larguras
de computador (1280px) e celular (320px).

Após o retorno ao tema claro, foi confirmado no Chrome que a página continua
clara mesmo com o dispositivo no modo escuro e uma preferência antiga por
tema escuro salva. Também foram conferidos a remoção do seletor de tema,
o idioma salvo após recarregar, a exibição dos produtos e o visual em 320px,
sem erros de JavaScript.
