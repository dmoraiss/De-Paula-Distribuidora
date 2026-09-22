/*
 * EDITE O CATÁLOGO AQUI.
 * Não é necessário mexer no script.js para cadastrar produtos.
 * Preços usam ponto: 55.49. Use null quando o preço não foi informado.
 * Imagens ficam na pasta imagens/. Use "" para um produto sem foto.
 * Os valores abaixo foram transcritos dos prints de referência.
*/

const loja = {
  nome: "De Paula Distribuidora",
  sigla: "DP",
  logo: "", // Exemplo: "imagens/logo.png". Deixe vazio até receber o logo.
  descricao: "Catálogo de bebidas",
  formasPagamento: "Dinheiro, Pix e cartão",
  endereco: "", // Campos vazios não aparecem no site.
  horario: "",
  telefone: ""
};

// A ordem desta lista define a ordem das abas.
// Para remover uma categoria, apague seu objeto e os produtos correspondentes.

const categorias = [
  { id: "gin", nome: "Gin", grupos: ["Gin"] },
  { id: "whisky", nome: "Whisky", grupos: ["Whisky"] },
  { id: "vodka", nome: "Vodka", grupos: ["Vodka"] },
  { id: "cerveja", nome: "Cerveja", grupos: ["Heineken", "Corona", "Original", "Skol", "Itaipava", "Amstel", "Xeque Mate", "Chopp"] },
  { id: "energetico", nome: "Energético", grupos: ["Energético"] },
  { id: "licor", nome: "Licor", grupos: ["Licor"] },
  { id: "drinks-prontos", nome: "Drinks prontos", grupos: ["Drinks prontos"] },
  { id: "champanhe", nome: "Champanhe", grupos: ["Champanhe"] },
  { id: "vinho", nome: "Vinho", grupos: ["Vinho"] },
  { id: "beats-ice", nome: "Beats/Ice", grupos: ["Beats/Ice"] },
  { id: "aperitivo", nome: "Aperitivo", grupos: ["Aperitivo"] },
  { id: "cachaca", nome: "Cachaça", grupos: ["Cachaça"] },
  { id: "rum", nome: "Rum", grupos: ["Rum"] },
  { id: "agua-mineral", nome: "Água mineral", grupos: ["Água mineral"] },
  { id: "gelos-sabores", nome: "Gelos sabores", grupos: ["Gelos sabores"] },
  { id: "refrigerantes", nome: "Refrigerantes/Outros", grupos: ["Refrigerantes/Outros"] },
  { id: "sucos", nome: "Sucos/Groselhas/Mel/Outros", grupos: ["Sucos/Groselhas/Mel/Outros"] },
  { id: "doces", nome: "Chocolates/Doces", grupos: ["Chocolates/Doces"] },
  { id: "descartaveis", nome: "Copos/Descartáveis/Baldes", grupos: ["Copos/Descartáveis/Baldes"] }
];

// Copie um objeto, troque o id por um identificador único e altere os dados.
// O campo categoria deve corresponder a um id da lista acima.
// O campo grupo define os subtítulos dentro de cada categoria.

const produtos = [

  // GIN ----------------------------------------------------------------------

  {
    id: "beefeater-tradicional", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 750ml - TRADICIONAL", descricao: "BEEFEATER 750ml",
    preco: 55.49, precoCartao: 88.90, imagem: "imagens/gin/beefeater-tradicional.jpg"
  },
  {
    id: "beefeater-pink", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 700ml - PINK", descricao: "BEEFEATER PINK 700ml",
    preco: 65.90, precoCartao: 88.99, imagem: "imagens/gin/beefeater-pink.jpg"
  },
  {
    id: "beefeater-blackberry", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 700ml - BLACKBERRY", descricao: "BEEFEATER 700ml - BLACKBERRY",
    preco: 102.90, precoCartao: 119.99, imagem: "imagens/gin/beefeater-blackberry.jpg"
  },
  {
    id: "bombay-sapphire", categoria: "gin", grupo: "Gin",
    nome: "BOMBAY SAPPHIRE 750ml", descricao: "BOMBAY SAPPHIRE 750ml",
    preco: 66.49, precoCartao: 89.90, imagem: "imagens/gin/bombay-sapphire.jpg"
  },
  {
    id: "tanqueray-tradicional", categoria: "gin", grupo: "Gin",
    nome: "TANQUERAY TRADICIONAL 750ml", descricao: "TANQUERAY TRADICIONAL 750ml",
    preco: null, precoCartao: null, imagem: ""
  },

  // WHISKY -------------------------------------------------------------------

  {
    id: "jack-daniels-tradicional", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS TRADICIONAL 1L", descricao: "JACK DANIELS TRADICIONAL 1L",
    preco: 90.90, precoCartao: 129.90, imagem: "imagens/whisky/jack-daniels-tradicional.jpg"
  },
  {
    id: "jack-daniels-honey", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS HONEY 1L", descricao: "JACK DANIELS HONEY 1L",
    preco: 99.90, precoCartao: 140.99, imagem: "imagens/whisky/jack-daniels-honey.jpg"
  },
  {
    id: "jack-daniels-maca", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS MAÇÃ VERDE 1L", descricao: "JACK DANIELS MAÇÃ VERDE 1L",
    preco: 94.89, precoCartao: 140.00, imagem: "imagens/whisky/jack-daniels-maca.jpg"
  },
  {
    id: "jack-daniels-fire", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS FIRE 1L", descricao: "JACK DANIELS FIRE 1L",
    preco: 114.90, precoCartao: 140.99, imagem: "imagens/whisky/jack-daniels-fire.jpg"
  },
  {
    id: "jack-daniels-blackberry", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS BLACKBERRY 1L", descricao: "JACK DANIELS BLACKBERRY 1L",
    preco: null, precoCartao: null, imagem: ""
  },

  // VODKA --------------------------------------------------------------------

  {
    id: "grey-goose-tradicional", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE TRADICIONAL 750ml", descricao: "GREY GOOSE TRADICIONAL 750ml",
    preco: 122.90, precoCartao: 147.90, imagem: "imagens/vodka/grey-goose-tradicional.jpg"
  },
  {
    id: "grey-goose-orange", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE ORANGE 750ml", descricao: "GREY GOOSE ORANGE 750ml",
    preco: 144.99, precoCartao: 178.90, imagem: "imagens/vodka/grey-goose-orange.jpg"
  },
  {
    id: "grey-goose-citron", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE CITRON 750ml", descricao: "GREY GOOSE CITRON 750ml",
    preco: 140.90, precoCartao: 169.90, imagem: "imagens/vodka/grey-goose-citron.jpg"
  },
  {
    id: "grey-goose-pera", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE PERA 750ml", descricao: "GREY GOOSE PERA 750ml",
    preco: 140.90, precoCartao: 169.90, imagem: "imagens/vodka/grey-goose-pera.jpg"
  },
  {
    id: "ciroc-tradicional", categoria: "vodka", grupo: "Vodka",
    nome: "CIROC TRADICIONAL 750ml", descricao: "CIROC TRADICIONAL 750ml",
    preco: null, precoCartao: null, imagem: ""
  },

  // CERVEJA ------------------------------------------------------------------

  {
    id: "heineken-long", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LONG 330ml", descricao: "HEINEKEN LONG 330ml", unidade: true,
    preco: 5.09, precoCartao: null, imagem: "imagens/heineken-long.jpg"
  },
  {
    id: "heineken-zero", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LONG NECK ZERO 330ml", descricao: "HEINEKEN LONG NECK ZERO 330ml", unidade: true,
    preco: 5.49, precoCartao: null, imagem: "imagens/cerveja/heineken-zero.jpg"
  },
  {
    id: "heineken-lata", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LATA 269ml", descricao: "HEINEKEN LATA 269ml", unidade: true,
    preco: 3.59, precoCartao: null, imagem: "imagens/cerveja/heineken-lata.jpg"
  },
  {
    id: "corona-long", categoria: "cerveja", grupo: "Corona",
    nome: "CORONA LONG NECK 330ml", descricao: "CORONA LONG NECK 330ml", unidade: true,
    preco: 6.29, precoCartao: null, imagem: "imagens/cerveja/corona-long.jpg"
  },

  // ENERGÉTICO ---------------------------------------------------------------

  {
    id: "red-bull-tradicional", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL TRADICIONAL 250ml", descricao: "RED BULL TRADICIONAL 250ml", unidade: true,
    preco: 8.29, precoCartao: null, imagem: "imagens/energetico/red-bull-tradicional.jpg"
  },
  {
    id: "red-bull-melancia", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL 250ml - MELANCIA", descricao: "RED BULL 250ml - MELANCIA", unidade: true,
    preco: 8.79, precoCartao: null, imagem: "imagens/energetico/red-bull-melancia.jpg"
  },
  {
    id: "red-bull-tropical", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL 250ml - TROPICAL", descricao: "RED BULL 250ml - TROPICAL", unidade: true,
    preco: 8.79, precoCartao: null, imagem: "imagens/energetico/red-bull-tropical.jpg"
  },
  {
    id: "vibe-tradicional", categoria: "energetico", grupo: "Energético",
    nome: "ENERGÉTICO VIBE 2L", descricao: "ENERGÉTICO VIBE 2L", unidade: true,
    preco: 6.49, precoCartao: null, imagem: "imagens/energetico/vibe-tradicional.jpg"
  },
  {
    id: "vibe-maca", categoria: "energetico", grupo: "Energético",
    nome: "VIBE MAÇÃ VERDE 2L", descricao: "VIBE MAÇÃ VERDE 2L", unidade: true,
    preco: null, precoCartao: null, imagem: ""
  },

  // LICOR --------------------------------------------------------------------

  {
    id: "licor-43", categoria: "licor", grupo: "Licor",
    nome: "LICOR 43 CHOCOLATE 700ml", descricao: "LICOR 43 CHOCOLATE",
    // O print mostra 150,90 em destaque e 150,00 na descrição. Confirme e ajuste.
    preco: 150.90, precoPix: 150.00, precoCartao: 184.99, imagem: "imagens/licor/licor-43.jpg"
  },
  {
    id: "ballena-coco", categoria: "licor", grupo: "Licor",
    nome: "BALLENA COCO 750ml", descricao: "BALLENA COCO 750ml",
    preco: 107.49, precoCartao: 133.00, imagem: "imagens/licor/ballena-coco.jpg"
  },
  {
    id: "malibu-coco", categoria: "licor", grupo: "Licor",
    nome: "LICOR MALIBU COCO 750ml", descricao: "LICOR MALIBU COCO 750ml",
    preco: 47.90, precoCartao: 61.90, imagem: "imagens/licor/malibu-coco.jpg"
  },
  {
    id: "don-luiz", categoria: "licor", grupo: "Licor",
    nome: "LICOR DON LUIZ 750ml", descricao: "LICOR DON LUIZ 750ml",
    preco: 64.90, precoCartao: 79.99, imagem: "imagens/licor/don-luiz.jpg"
  },
  {
    id: "amarula", categoria: "licor", grupo: "Licor",
    nome: "AMARULA CREAM 750ml", descricao: "AMARULA CREAM 750ml",
    preco: null, precoCartao: null, imagem: ""
  },

  // APERITIVO ----------------------------------------------------------------

  {
    id: "aperol-750", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "APEROL 750ml", descricao: "APEROL 750ml",
    preco: 44.99, precoCartao: 57.99, imagem: "imagens/aperitivo/aperol-750.jpg"
  },
  {
    id: "aperol-3l", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "APEROL 3L", descricao: "APEROL 3L",
    preco: 795.99, precoCartao: 989.90, imagem: "imagens/aperitivo/aperol-3l.jpg"
  },
  {
    id: "campari", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "CAMPARI 998ml", descricao: "CAMPARI 998ml",
    preco: 43.99, precoCartao: 56.90, imagem: "imagens/aperitivo/campari.jpg"
  },
  {
    id: "saint-remy", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "APERITIVO SAINT REMY 750ml", descricao: "APERITIVO SAINT REMY 750ml",
    preco: 32.99, precoCartao: 41.90, imagem: "imagens/aperitivo/saint-remy.jpg"
  },
  {
    id: "lillet-blanc", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "LILLET BLANC 750ml", descricao: "LILLET BLANC 750ml",
    preco: null, precoCartao: null, imagem: ""
  }

];
