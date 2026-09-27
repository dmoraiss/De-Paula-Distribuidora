/*
 * EDITE O CATÁLOGO AQUI.
 * Não é necessário mexer no script.js para cadastrar produtos.
 * Preços usam ponto: 55.49. Use null quando o preço não foi informado.
 * Imagens ficam na pasta imagens/. Use "" para um produto sem foto.
 * Os valores abaixo foram transcritos dos prints de referência.
*/

const loja = {
  nome: "De Paula Distribuidora",
  sigla: "",
  logo: "imagens/logo/DePaulaDistribuidora-V1.jpg", // Exemplo: "imagens/logo.png". Deixe vazio até receber o logo.
  descricao: "Catálogo de bebidas",
  formasPagamento: "Dinheiro, Pix e cartão",
  endereco: "", // Campos vazios não aparecem no site.
  horario: "",
  telefone: "11 95450-4212"
};

// A ordem desta lista define a ordem das abas.
// Para remover uma categoria, apague seu objeto e os produtos correspondentes.

const categorias = [
  { id: "gin", nome: "Gin", grupos: ["Gin"] },
  { id: "whisky", nome: "Whisky", grupos: ["Whisky"] },
  { id: "vodka", nome: "Vodka", grupos: ["Vodka"] },
  { id: "cerveja", nome: "Cerveja", grupos: [ "Heineken" , "Corona" , "Original" , "Skol" , "Itaipava" , "Amstel" , "Xeque Mate" , "Chopp" ] },
  { id: "energetico", nome: "Energético", grupos: ["Energético"] },
  { id: "licor", nome: "Licor", grupos: ["Licor"] },
  { id: "drinks-prontos", nome: "Drinks prontos", grupos: ["Drinks prontos"] },
  { id: "champanhe", nome: "Champanhe", grupos: ["Champanhe"] },
  { id: "vinho", nome: "Vinho", grupos: ["Vinho"] },
  { id: "beats-ice", nome: "Beats / Ice", grupos: ["Beats/Ice"] },
  { id: "aperitivo", nome: "Aperitivo", grupos: ["Aperitivo"] },
  { id: "cachaca", nome: "Cachaça", grupos: ["Cachaça"] },
  { id: "rum", nome: "Rum", grupos: ["Rum"] },
  { id: "agua-mineral", nome: "Água mineral", grupos: ["Água mineral"] },
  { id: "gelos-sabores", nome: "Gelos sabores", grupos: ["Gelos sabores"] },
  { id: "refrigerantes", nome: "Refrigerantes / Outros", grupos: ["Refrigerantes/Outros"] },
  { id: "sucos", nome: "Sucos / Groselhas / Mel / Outros", grupos: ["Sucos" , "Groselhas" , "Mel" , "Outros" ] },
  { id: "doces", nome: "Chocolates / Doces", grupos: ["Chocolates" , "Doces"] },
  { id: "descartaveis", nome: "Copos / Descartáveis / Baldes", grupos: ["Copos" , "Descartáveis" , "Baldes"] }
];

// Copie um objeto, troque o id por um identificador único e altere os dados.
// O campo categoria deve corresponder a um id da lista acima.
// O campo grupo define os subtítulos dentro de cada categoria.

const produtos = [

  // GIN ----------------------------------------------------------------------

  {
    
  id: "beefeater-tradicional",

  categoria: "gin",

  grupo: "Gin",

  nome: "BEEFEATER 750ml - TRADICIONAL",

  descricao: "Gin London Dry",

  volume: "750ml",

  marca: "Beefeater",

  teorAlcoolico: "40%",

  origem: "Inglaterra",

  detalhes:
    "Gin London Dry de perfil seco e aromático, produzido com botânicos selecionados. Ideal para drinks como Gin Tônica e outros coquetéis.",

  preco: 76.99,

  precoCartao: 98.99,

  imagem: "https://images.getinapp.com.br/c2c39385-0096-433f-825c-aace4dd9c9c7.jpg"

  },
  {
    id: "beefeater-pink", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 700ml - PINK", descricao: "BEEFEATER PINK 700ml",
    preco: 88.00, precoCartao: 98.99, imagem: "https://images.getinapp.com.br/bd95036d-327e-436b-982c-2257ec5a52cb.jpg"
  },
  {
    id: "beefeater-blackberry", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 700ml - BLACKBERRY", descricao: "BEEFEATER 700ml - BLACKBERRY",
    preco: 129.99, precoCartao: 134.99, imagem: "https://images.getinapp.com.br/7d6ceda9-8c06-4d45-963d-c7671c34ffa4.jpg"
  },
  {
    id: "bombay-sapphire", categoria: "gin", grupo: "Gin",
    nome: "BOMBAY SAPPHIRE 750ml", descricao: "BOMBAY SAPPHIRE 750ml",
    preco: 89.99, precoCartao: 99.90, imagem: "https://images.getinapp.com.br/7d6ceda9-8c06-4d45-963d-c7671c34ffa4.jpg"
  },
  {
    id: "tanqueray-tradicional", categoria: "gin", grupo: "Gin",
    nome: "TANQUERAY TRADICIONAL 750ml", descricao: "TANQUERAY TRADICIONAL 750ml",
    preco: 104.00, precoCartao: 129.90, imagem: "https://images.getinapp.com.br/8f96631a-6917-4c58-9369-9642dccc4212.jpg"
  },
  
  {
    id: "tanqueray-royale-700ml",
    categoria: "gin",
    grupo: "Gin",
    nome: "TANQUERAY ROYALE 700ml",
    descricao: "TANQUERAY ROYALE 700ml",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWYUYVYp-18FbQ_9XT1LU3JqidyBcVB_oXjeFH35LTA&s=10"
  },

  {
    id: "tanqueray-bossa-nova-700ml",
    categoria: "gin",
    grupo: "Gin",
    nome: "TANQUERAY BOSSA NOVA 700ml",
    descricao: "TANQUERAY BOSSA NOVA 700ml",
    preco: 130.00,
    precoCartao: 149.90,
    imagem: "https://images.getinapp.com.br/845acf22-94eb-4cc0-ac44-d94fe8d9f3fd.jpeg"
  },
  
  {
  id: "tanqueray-sevilla-700ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "TANQUERAY SEVILLA 700ml",
  descricao: "TANQUERAY SEVILLA 700ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/3230620f-ec93-4e24-8bc7-fe0c9676a2dd.jpg"
},
{
  id: "mini-tanqueray-tradicional-375ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "MINI TANQUERAY TRADICIONAL 375ml",
  descricao: "MINI TANQUERAY TRADICIONAL 375ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmh1owFuXns5tUshrl3cJI_WHum1XWy_SySYermHW0PA&s"
},
{
  id: "gordons-750ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GORDONS 750ml",
  descricao: "GORDONS 750ml",
  preco: 60.00,
  precoCartao: 79.90,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9x8J3mZwKGomWvuK6vEdpBCyBuAsVfUXKySsunuzZsA&s=10"
},
{
  id: "gordons-pink-700ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GORDONS PINK 700ml",
  descricao: "GORDONS PINK 700ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nmtsngRbqVHFDf1BGd5sqmvMlLR1JxSmFS19LiDR3Q&s=10"
},
{
  id: "gin-rocks-prata-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS PRATA 1L",
  descricao: "GIN ROCKS PRATA 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLTAWWmPJX_ugS2Bmk-I5El2DrYnCUP_GU2eHDemHnA&s=10"
},
{
  id: "gin-rocks-melancia-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MELANCIA 1L",
  descricao: "GIN ROCKS MELANCIA 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYx33fKJbdsKy5FWIbKE8ONr7QDl14Aq8_I4K04N1tQ&s=10"
},
{
  id: "gin-rocks-morango-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MORANGO 1L",
  descricao: "GIN ROCKS MORANGO 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYBL8SdfummJiidZwqk4bxrnIi3zuB8OjrmzCHE5wiQ&s=10"
},
{
  id: "gin-rocks-sunset-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS SUNSET 1L",
  descricao: "GIN ROCKS SUNSET 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYODpoU9D8NaELHsX0tYaJmFW6TJKlgvlo6pU10VK2g&s=10"
},
{
  id: "gin-rocks-maca-verde-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MAÇÃ VERDE 1L",
  descricao: "GIN ROCKS MAÇÃ VERDE 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVwbALCr6Mguq2AIYjzE59vPNFks7G_NxPGBF3qtgpg&s=10"
},
{
  id: "gin-invictus-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MORANGO",
  descricao: "GIN INVICTUS MORANGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIg0Ob5R-1UmCggKuBe9K97A0oVbwL_7eTM6PqEylvw&s=10"
},
{
  id: "gin-invictus-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MELANCIA",
  descricao: "GIN INVICTUS MELANCIA 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPapN70WF8kMRZKLari_nLjDEWHElBizG5F0iZKJ-iA&s"
},
{
  id: "gin-invictus-abacaxi-hortela-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - ABACAXI COM HORTELÃ",
  descricao: "GIN INVICTUS ABACAXI COM HORTELÃ 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStS2dG_-YPyhRiaz6MAteVS5pJKEJ98UvmNl32y8BmZorIJCkV3gtIptQ&s=10"
},
{
  id: "gin-invictus-morango-pessego-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MORANGO COM PÊSSEGO",
  descricao: "GIN INVICTUS MORANGO COM PÊSSEGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOf0iprMSNxJU_xizxQDxIOdMnxTtWFK_Q1Ocq3E4dg&s=10"
},
{
  id: "gin-eternity-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MELANCIA 900ml",
  descricao: "GIN ETERNITY MELANCIA 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9anSic1c-KjEeVmwmE-H2_5R1vF8fAxxmdq2alpm-g&s=10"
},
{
  id: "gin-eternity-tropical-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY TROPICAL 900ml",
  descricao: "GIN ETERNITY TROPICAL 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJt4k6cVaJmPanOqntz_Qq-Dh-xqKWKQUlUY3N7V4hgQ&s=10"
},
{
  id: "gin-eternity-baunilha-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY BAUNILHA 900ml",
  descricao: "GIN ETERNITY BAUNILHA 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_638213-MLB107875071089_022026-P.webp"
},
{
  id: "gin-eternity-morango-pessego-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MORANGO E PÊSSEGO 900ml",
  descricao: "GIN ETERNITY MORANGO E PÊSSEGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KIUowOU5ekrlMyPB9VGs9fuTvK5EMVeDFu-bYKbscA&s=10"
},
{
  id: "gin-eternity-royale-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY ROYALE 900ml",
  descricao: "GIN ETERNITY ROYALE 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-DjSjUAYJ4t9v-vUACypcinBOMB1xDZtiSpkNomidQ&s=10"
},
{
  id: "gin-eternity-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MORANGO 900ml",
  descricao: "GIN ETERNITY MORANGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMi_U2HJgczfRDkk4XGFnuH6MQ_xQWOuFkRqR9moS5Q&s=10"
},
{
  id: "gin-eternity-abacaxi-hortela-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY ABACAXI C/ HORTELÃ 900ml",
  descricao: "GIN ETERNITY ABACAXI C/ HORTELÃ 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2034pklD6e8kD2-hF0oIWlPew5rqw7LpZXr6VLXx2Q&s=10"
},
{
  id: "gin-eternity-pistache-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY PISTACHE 900ml",
  descricao: "GIN ETERNITY PISTACHE 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpp4ctZpTdgFtIXcRwAyOp6NxvU8MAqFc__zU7nHu0NA&s=10"
},
{
  id: "gin-eternity-pessego-framboesa-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY PÊSSEGO E FRAMBOESA 900ml",
  descricao: "GIN ETERNITY PÊSSEGO E FRAMBOESA 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KlDQ1fdAC-9ZJJ98lbeDPtvYuge6AYGIShGUfT5cwQ&s=10"
},
{
  id: "gin-rms-morango-pessego-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS MORANGO E PÊSSEGO 950ml",
  descricao: "GIN RMS MORANGO E PÊSSEGO 950ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLO6E0GMu3CcFrcTXEN8fAGRYYKEH3DiGZGN8hvQ2pzg&s"
},
{
  id: "gin-rms-abacaxi-hortela-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS ABACAXI COM HORTELÃ 950ml",
  descricao: "GIN RMS ABACAXI COM HORTELÃ 950ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wXKnE7tkj4MMucHBI3OE7T8s-hqmzuquGC-l9u7wwQ&s=10"
},
{
  id: "gin-rms-tradicional-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS TRADICIONAL 950ml",
  descricao: "GIN RMS TRADICIONAL 950ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wXKnE7tkj4MMucHBI3OE7T8s-hqmzuquGC-l9u7wwQ&s=10"
},
{
  id: "gin-fulls-frutas-vermelhas-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS FRUTAS VERMELHAS 980ml",
  descricao: "GIN FULLS FRUTAS VERMELHAS 980ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODhlUga3oz7Dg7LJXRCddW-3fxTEokVKOy_jKDmIWhg&s=10"
},
{
  id: "gin-fulls-frutas-silvestres-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS FRUTAS SILVESTRES 980ml",
  descricao: "GIN FULLS FRUTAS SILVESTRES 980ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uIa-8RZFtElRZBSBnwHU4kCv8dVCk4X4dGg3YdtVfw&s=10"
},
{
  id: "gin-fulls-melancia-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS MELANCIA 980ml",
  descricao: "GIN FULLS MELANCIA 980ml",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReynr6F3ydiNGcPthR2EPxhBEPCBYp7AYJ0PgEjAVSMQ&s=10"
},
{
  id: "gin-intencion-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INTENCION MORANGO 900ml",
  descricao: "GIN INTENCION MORANGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/05d84a22-474a-4238-ad06-47a183965019.jpeg"
},
{
  id: "gin-intencion-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INTENCION MELANCIA 900ml",
  descricao: "GIN INTENCION MELANCIA 900ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/769c29f7-58ab-426a-b05e-56a88b47cb67.jpeg"
},





  // WHISKY -------------------------------------------------------------------





  {
    id: "jack-daniels-tradicional", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS TRADICIONAL 1L", descricao: "JACK DANIELS TRADICIONAL 1L",
    preco: 117.99, precoCartao: 129.90, imagem: "https://images.getinapp.com.br/122ac247-880f-408b-97dd-4c0d39c4caaf.jpg"
  },
  {
    id: "jack-daniels-honey", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS HONEY 1L", descricao: "JACK DANIELS HONEY 1L",
    preco: 114.90, precoCartao: 140.99, imagem: "https://images.getinapp.com.br/f3ca8bbc-5ee6-44d9-b2dc-80e63bec0ce3.jpg"
  },
  {
    id: "jack-daniels-maca", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS MAÇÃ VERDE 1L", descricao: "JACK DANIELS MAÇÃ VERDE 1L",
    preco: 129.00, precoCartao: 139.90, imagem: "https://images.getinapp.com.br/9995a8f9-d206-4434-8134-c5a7a3758b4f.jpg"
  },
  {
    id: "jack-daniels-fire", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS FIRE 1L", descricao: "JACK DANIELS FIRE 1L",
    preco: 114.90, precoCartao: 140.99, imagem: "https://images.getinapp.com.br/c7713a94-1751-470e-8d5f-6d6e491af481.jpg"
  },
  {
    id: "jack-daniels-blackberry", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS BLACKBERRY 1L", descricao: "JACK DANIELS BLACKBERRY 1L",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/8b6638c6-3cd0-4b13-8dae-e20a34d7e2da.jpeg"
  },

  {
  id: "jack-daniels-gentleman-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS GENTLEMAN 1L",
  descricao: "JACK DANIELS GENTLEMAN 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/c84d49f6-535b-4739-9367-e67b31a1bc83.jpeg"
},
{
  id: "jack-gentleman-copo",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK GENTLEMAN 1L + COPO",
  descricao: "JACK GENTLEMAN 1L + COPO",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/ea8fef95-0a7e-41a2-a279-d475535779cd.jpeg"
},
{
  id: "jack-daniels-sinatra-select-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS SINATRA SELECT 1L",
  descricao: "JACK DANIELS SINATRA SELECT 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/e6269e82-56f6-499a-851b-8fc0a6068d25.jpeg"
},
{
  id: "jack-daniels-single-barrel-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS SINGLE BARREL 750ml",
  descricao: "JACK DANIELS SINGLE BARREL 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/c8c14c4b-b402-4373-9fc5-4ac51edc7d76.jpg"
},
{
  id: "woodford-reserve-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "WHISKY WOODFORD RESERVE 750ml",
  descricao: "WHISKY WOODFORD RESERVE 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/ec607b86-1075-4579-9b95-9a5c6d8737a1.jpg"
},
{
  id: "ballantines-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES 1L",
  descricao: "BALLANTINES 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/679c48eb-2b9d-474e-aad2-778a45f625e2.jpg"
},
{
  id: "ballantines-10-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES 10 ANOS 1L",
  descricao: "BALLANTINES 10 ANOS 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/dd686983-6aec-4255-9676-d5263d92b92c.jpg"
},
{
  id: "ballantines-sunshine-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES SUNSHINE 700ml",
  descricao: "BALLANTINES SUNSHINE 700ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/cb40795b-c56f-43bd-b591-1225a7bce020.jpeg"
},
{
  id: "ballantines-burbon-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES BURBON 750ml",
  descricao: "BALLANTINES BURBON 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/94270ac0-c2dc-4431-aa2d-daa837927f73.jpeg"
},
{
  id: "ballantines-sweet-brend-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES SWEET BREND 700ml",
  descricao: "BALLANTINES SWEET BREND 700ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/fa43005a-c795-4b28-9ab7-19781c4e78d6.jpeg"
},
{
  id: "red-label-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "RED LABEL 1L",
  descricao: "RED LABEL 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/e3a39c93-cfae-4e61-b7e9-b3b5083aeb73.jpg"
},
{
  id: "black-label-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BLACK LABEL 1L",
  descricao: "BLACK LABEL 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/02977a63-1a74-41ae-a628-d9f4c291bc91.jpg"
},
{
  id: "double-black-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "DOUBLE BLACK 1L",
  descricao: "DOUBLE BLACK 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/034fb1a9-ce45-4157-b840-b656325252bf.jpg"
},
{
  id: "gold-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GOLD LABEL 750ml",
  descricao: "GOLD LABEL 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/f3ad10b8-74d5-4d08-9200-4c57637fb285.jpg"
},
{
  id: "green-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GREEN LABEL 750ml",
  descricao: "GREEN LABEL 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/6632f7cb-a8db-46ee-9eb2-5beb285bb60b.jpg"
},
{
  id: "blue-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BLUE LABEL 750ml",
  descricao: "BLUE LABEL 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/05d395ea-39a7-49ec-9791-05a7dcf8201a.jpg"
},
{
  id: "jim-beam-tradicional-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM TRADICIONAL 1L",
  descricao: "JIM BEAM TRADICIONAL 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/de4f0633-c28d-44e0-9a61-c38f4979b2be.jpg"
},
{
  id: "jim-beam-honey-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM HONEY 1L",
  descricao: "JIM BEAM HONEY 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/381691ad-7ae3-4696-83a7-f041a0535cff.jpg"
},
{
  id: "jim-beam-maca-verde-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM MAÇÃ VERDE 1L",
  descricao: "JIM BEAM MAÇÃ VERDE 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/d30f7950-acda-4f6e-b84f-fef0690c12d3.jpg"
},
{
  id: "jim-beam-black-cherry-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM BLACK CHERRY 1L",
  descricao: "JIM BEAM BLACK CHERRY 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/b0b3f9a8-f091-4910-9906-8cea44f44504.jpeg"
},
{
  id: "jim-beam-black-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM BLACK 1L",
  descricao: "JIM BEAM BLACK 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/a31b396f-99fd-460e-b789-604e90cec201.jpeg"
},
{
  id: "white-horse-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "WHITE HORSE 1L",
  descricao: "WHITE HORSE 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/71fdb7a5-2e33-437d-b3dc-91cac0323023.jpg"
},
{
  id: "bells-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BELLS 700ml",
  descricao: "BELLS 700ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/db426450-b5ec-4ab0-8525-fd9558d6ff60.jpg"
},
{
  id: "chanceler-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHANCELER 1L",
  descricao: "CHANCELER 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/4bf921ed-76a8-436c-a6e3-fa607a7094e1.jpg"
},
{
  id: "chanceler-maca-verde-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHANCELER MAÇÃ VERDE 1L",
  descricao: "CHANCELER MAÇÃ VERDE 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJC3BmXehNbJoJLoCJwTxxX2BGFyhoSsGgjaO3aY8QQ&s=10"
},
{
  id: "grants-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GRANTS 750ml",
  descricao: "GRANTS 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/c09dc870-c7ea-4269-8ae7-4bffb09b4b41.jpeg"
},
{
  id: "old-parr-12-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "OLD PARR 12 ANOS 1L",
  descricao: "OLD PARR 12 ANOS 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/d99bd4db-0835-4c19-b2b8-ad9e3a9c41dd.jpg"
},
{
  id: "buchanans-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BUCHANANS 1L",
  descricao: "BUCHANANS 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/cc062350-bc0a-4371-a2a1-5de9482daa72.jpg"
},
{
  id: "buffalo-trace-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BUFFALO TRACE 750ml",
  descricao: "BUFFALO TRACE 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/6409e93a-74da-486a-8ffd-65648e09872b.jpg"
},
{
  id: "passaport-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSAPORT 1L",
  descricao: "PASSAPORT 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/f4ba17a8-d0c5-40f9-969c-3d641ba4d1ba.jpg"
},
{
  id: "passport-maca-670ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSPORT MAÇÃ 670ml",
  descricao: "PASSPORT MAÇÃ 670ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/8c3d4cee-1875-4570-976a-7fb23c0d7bda.jpg"
},
{
  id: "passaport-honey-670ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSAPORT HONEY 670ml",
  descricao: "PASSAPORT HONEY 670ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/079f91b0-5e34-4556-9320-6c37a155eb79.jpg"
},
{
  id: "chivas-12-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHIVAS 12 ANOS 1L",
  descricao: "CHIVAS 12 ANOS 1L",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/c18c4fee-0f0f-4bca-87ca-1f5da0186efe.jpg"
},
{
  id: "chivas-15-anos-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHIVAS 15 ANOS 750ml",
  descricao: "CHIVAS 15 ANOS 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/4bc725f9-c5b4-44e4-a999-f560821f7652.jpeg"
},
{
  id: "royal-salute-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE 750ml",
  descricao: "ROYAL SALUTE 750ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/2a474596-7c7c-49ad-abc9-f1bb648e430c.jpg"
},
{
  id: "royal-salute-grain-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE GRAIN 700ml",
  descricao: "ROYAL SALUTE GRAIN 700ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/d776ed0a-2ca3-457a-8ca4-09f3864e14e6.jpg"
},
{
  id: "royal-salute-malts-blend-verde-21-anos-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE MALTS BLEND VERDE 21 ANOS 700ml",
  descricao: "ROYAL SALUTE MALTS BLEND VERDE 21 ANOS 700ml",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/18fe9768-b04d-490d-a70c-d1ae73cbcea1.png"
},





  // VODKA --------------------------------------------------------------------





  {
    id: "grey-goose-tradicional", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE TRADICIONAL 750ml", descricao: "GREY GOOSE TRADICIONAL 750ml",
    preco: 168.00, precoCartao: 179.90, imagem: " https://images.getinapp.com.br/956347f1-3978-4724-9ac0-00439e76c45c.jpeg "
  },
  {
    id: "grey-goose-orange", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE ORANGE 750ml", descricao: "GREY GOOSE ORANGE 750ml",
    preco: null, precoCartao: null, imagem: " https://images.getinapp.com.br/df9a3b45-ef7d-451b-9b96-eb7717f7650f.jpeg "
  },
  {
    id: "grey-goose-citron", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE CITRON 750ml", descricao: "GREY GOOSE CITRON 750ml",
    preco: 140.90, precoCartao: 169.90, imagem: " https://images.getinapp.com.br/b5d5351c-5714-4092-ac88-164bb5832521.jpg "
  },
  {
    id: "grey-goose-pera", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE PERA 750ml", descricao: "GREY GOOSE PERA 750ml",
    preco: 140.90, precoCartao: 169.90, imagem: " https://images.getinapp.com.br/eba8d2fe-f9fa-4f39-aa81-06c23332ff0e.jpg "
  },
  {
    id: "ciroc-tradicional",
    categoria: "vodka", 
    grupo: "Vodka",
    nome: "CIROC TRADICIONAL 750ml",
    descricao: "",
    preco: null, 
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/8176bfb2-0744-440d-9d54-6f4805261e47.jpg"
  },

  {
    id: "ciroc-red-berry-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "CIROC RED BERRY 750ml",
    descricao: "CIROC RED BERRY 750ml",
    preco: 215.00,
    precoCartao: 249.90,
    imagem: "https://images.getinapp.com.br/acb7fa0e-cdb6-4931-b415-f3dab6ed4e4f.jpeg"
  },
  {
    id: "ciroc-tradicional-3l",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "CIROC TRADICIONAL 3L",
    descricao: "CIROC TRADICIONAL 3L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/530fa9a7-cedc-4bfc-bdee-fb298a17f1f7.jpg"
  },
  {
    id: "absolut-tradicional-1l",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT TRADICIONAL 1L",
    descricao: "ABSOLUT TRADICIONAL 1L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a28d8b2b-77cb-494f-b368-e28f0a780339.jpeg"
  },
  {
    id: "absolut-raspberri-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT RASPBERRI 750ml",
    descricao: "ABSOLUT RASPBERRI 750ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/2127ee39-e38f-4866-bd1a-7a9687ea31bc.jpeg"
  },
  {
    id: "absolut-citron-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT CITRON 750ml",
    descricao: "ABSOLUT CITRON 750ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f71b7ba9-2e82-4161-b6f7-b42e5f603a8a.jpeg"
  },
  {
    id: "absolut-vanilla-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT VANILLA 750ml",
    descricao: "ABSOLUT VANILLA 750ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/acbb9a5a-9c62-4fe7-b8ec-444ba5360ec1.jpeg"
  },
  {
    id: "absolut-tabasco-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT TABASCO 750ml",
    descricao: "ABSOLUT TABASCO 750ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/41976137-3180-4e96-86f5-937b47dd78a4.jpeg"
  },
  {
    id: "absolut-elyx-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT ELYX 750ml",
    descricao: "ABSOLUT ELYX 750ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/96c2c72e-35e3-440c-b4ef-b23f60327425.jpeg"
  },
  {
    id: "askov-blueberry-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - BLUEBERRY",
    descricao: "ASKOV 900ml - BLUEBERRY",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/1bba27e2-85ed-4586-bbd4-7ea7e843ee4b.jpeg"
  },
  {
    id: "askov-frutas-vermelhas-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - FRUTAS VERMELHAS",
    descricao: "ASKOV 900ml - FRUTAS VERMELHAS",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/44dae6c3-a84a-412f-a178-4b0da4b86de5.jpeg"
  },
  {
    id: "askov-frutas-roxas-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV FRUTAS ROXAS 900ml",
    descricao: "ASKOV FRUTAS ROXAS 900ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/e2208731-0573-4708-9675-9c585e97da31.jpeg"
  },
  {
    id: "askov-maracuja-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - MARACUJÁ",
    descricao: "ASKOV 900ml - MARACUJÁ",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b0d79186-9224-4274-b727-cfd821b70396.jpeg"
  },
  {
    id: "askov-limao-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - LIMÃO",
    descricao: "ASKOV 900ml - LIMÃO",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a4de3e20-c729-4c0b-af8f-e90a749c7539.jpeg"
  },
  {
    id: "askov-pessego-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - PÊSSEGO",
    descricao: "ASKOV 900ml - PÊSSEGO",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/6276be75-e1ad-40bb-afad-e05babada8c9.jpeg"
  },
  {
    id: "askov-kiwi-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - KIWI",
    descricao: "ASKOV 900ml - KIWI",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/3d8578fd-16b3-4526-8e5d-b74480670b6b.jpeg"
  },
  {
    id: "smirnoff-998ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "VODKA SMIRNOFF 998ml",
    descricao: "VODKA SMIRNOFF 998ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/9321ec01-6aac-44e5-ad64-1226bf2d0e11.jpg"
  },
  {
    id: "belvedere-tradicional-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "VODKA BELVEDERE TRADICIONAL 750ml",
    descricao: "VODKA BELVEDERE TRADICIONAL 750ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/2fe08b7b-f6fe-49f2-9dc8-6b43118d06f2.jpeg"
},





  // CERVEJA ------------------------------------------------------------------





  {
    id: "heineken-long", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LONG 330ml", descricao: "HEINEKEN LONG 330ml", unidade: true,
    preco: 5.09, precoCartao: null, imagem: "https://images.getinapp.com.br/7156142c-b07f-4207-a9c2-ea95080a8e68.jpeg "
  },
  {
    id: "heineken-zero", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LONG NECK ZERO 330ml", descricao: "HEINEKEN LONG NECK ZERO 330ml", unidade: true,
    preco: 5.49, precoCartao: null, imagem: " https://images.getinapp.com.br/eadfa9f2-8181-4315-8364-e588f306e18f.jpeg "
  },
  {
    id: "heineken-lata", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LATA 269ml", descricao: "HEINEKEN LATA 269ml", unidade: true,
    preco: 3.59, precoCartao: null, imagem: " https://images.getinapp.com.br/383c66e3-ba86-45a0-b743-1f79edd3c8fb.jpeg "
  },
  {
    id: "corona-long", categoria: "cerveja", grupo: "Corona",
    nome: "CORONA LONG NECK 350ml", descricao: "CORONA LONG NECK 350ml", unidade: true,
    preco: 6.29, precoCartao: null, imagem: " https://images.getinapp.com.br/c6a78880-bacc-48b8-bd5e-4b15fdc956f4.jpeg "
  },

  {
    id: "original-lata-269ml-c15un",
    categoria: "cerveja",
    grupo: "Original",
    nome: "ORIGINAL LATA 269ml C/15UN",
    descricao: "ORIGINAL LATA 269ml C/15UN",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b41abe06-2c11-4bc4-a69b-ff9f58f726a4.jpeg " ,
    unidade: ""
  },
  {
    id: "skol-lata-269ml-fardo-fechado-c15",
    categoria: "cerveja",
    grupo: "Skol",
    nome: "SKOL LATA 269ml FARDO FECHADO C/15",
    descricao: "SKOL LATA 269ml FARDO FECHADO C/15",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/e68d1b72-eaa5-419d-b64e-2688afdf685f.jpeg",
    unidade: ""
  },
  {
    id: "itaipava-269ml",
    categoria: "cerveja",
    grupo: "Itaipava",
    nome: "ITAIPAVA 269ml",
    descricao: "ITAIPAVA 269ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/03e5fb31-23bb-4b6a-85dd-2780a7fa022a.jpeg",
    unidade: "true"
  },
  {
    id: "amstel-lata-269ml",
    categoria: "cerveja",
    grupo: "Amstel",
    nome: "AMSTEL LATA 269ml",
    descricao: "AMSTEL LATA 269ml",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPT0vm23MpWNpZdRfZ0S2bTSJCc4tG5Vs3qqxSV-4Tg&s=10",
    unidade: "true"
  },
  {
    id: "xeque-mate-lata-355ml",
    categoria: "cerveja",
    grupo: "Xeque Mate",
    nome: "XEQUE MATE LATA 355ml",
    descricao: "XEQUE MATE LATA 355ml",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdek3nLa3srzAoEGiKoPrpKy_n9VCN0VRTI2Rum_Fn4A&s=10",
    unidade: "true"
  },
  {
    id: "draft-chopp-600ml",
    categoria: "cerveja",
    grupo: "Chopp",
    nome: "DRAFT CHOPP 600ml",
    descricao: "DRAFT CHOPP 600ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a6dbae69-128d-4589-b2ac-dbebef9d1e7f.jpeg",
    unidade: "true"
  },





  // ENERGÉTICO ---------------------------------------------------------------





  {
    id: "red-bull-tradicional", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL TRADICIONAL 250ml", descricao: "RED BULL TRADICIONAL 250ml", unidade: true,
    preco: 8.29, precoCartao: null, imagem: "https://images.getinapp.com.br/834c8dee-dcc0-4460-baac-f64a4ae44b77.jpg"
  },
  {
    id: "red-bull-melancia", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL 250ml - MELANCIA", descricao: "RED BULL 250ml - MELANCIA", unidade: true,
    preco: 8.79, precoCartao: null, imagem: "https://images.getinapp.com.br/ccbcbfea-ea9e-4069-80ff-f5999e03675a.jpg"
  },
  {
    id: "red-bull-tropical", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL 250ml - TROPICAL", descricao: "RED BULL 250ml - TROPICAL", unidade: true,
    preco: 8.79, precoCartao: null, imagem: "https://images.getinapp.com.br/3c3b0c12-f508-400b-a654-4dc5f46f0a53.jpg"
  },
  {
    id: "vibe-tradicional", categoria: "energetico", grupo: "Energético",
    nome: "ENERGÉTICO VIBE 2L", descricao: "ENERGÉTICO VIBE 2L", unidade: true,
    preco: 6.49, precoCartao: null, imagem: "https://images.getinapp.com.br/707ea384-92a4-4620-9f88-820b96a21270.jpg"
  },
  {
    id: "vibe-maca", categoria: "energetico", grupo: "Energético",
    nome: "VIBE MAÇÃ VERDE 2L", descricao: "VIBE MAÇÃ VERDE 2L", unidade: true,
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/1c5dfdd4-a20c-493f-9485-6cb810521744.jpeg"
  },

  {
    id: "vibe-morango-pessego-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE MORANGO E PÊSSEGO 2L",
    descricao: "VIBE MORANGO E PÊSSEGO 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/2ecb55fb-5bdc-4b57-9353-977e6833b3fd.jpeg",
    unidade: true
  },
  {
    id: "vibe-melancia-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE MELANCIA 2L",
    descricao: "VIBE MELANCIA 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f23b91d4-eeb0-409b-a7ce-c59e58daa14a.jpeg",
    unidade: true
  },
  {
    id: "vibe-blue-extreme-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE BLUE EXTREME 2L",
    descricao: "VIBE BLUE EXTREME 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/fa2e0f5c-0f89-4417-b826-8449f54ce8c0.jpeg",
    unidade: true
  },
  {
    id: "vibe-coco-abacaxi-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE COCO E ABACAXI 2L",
    descricao: "VIBE COCO E ABACAXI 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/e560fe19-59b1-4b1e-9482-c44813eb4d80.jpeg",
    unidade: true
  },
  {
    id: "vibe-tropical-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE TROPICAL 2L",
    descricao: "VIBE TROPICAL 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/c8e9c598-1ba9-4ab4-b2c2-641a13acf02b.jpeg",
    unidade: true
  },
  {
    id: "vibe-coco-acai-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE COCO + AÇAÍ 2L",
    descricao: "VIBE COCO + AÇAÍ 2L",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/ac984582-69f1-4d99-9f6b-2c364e2f1d1a.jpeg ",
    unidade: true
  },
  {
    id: "baly-melancia-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "ENERGÉTICO BALY MELANCIA 2L",
    descricao: "ENERGÉTICO BALY MELANCIA 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/86848c81-16c3-4c31-9409-87a80f04059c.jpg",
    unidade: true
  },
  {
    id: "baly-maca-verde-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "ENERGÉTICO BALY MAÇÃ VERDE 2L",
    descricao: "ENERGÉTICO BALY MAÇÃ VERDE 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/6ded178a-3153-4959-9fad-b72d2638b926.jpg",
    unidade: true
  },
  {
    id: "baly-morango-pessego-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "ENERGÉTICO BALY MORANGO E PÊSSEGO 2L",
    descricao: "ENERGÉTICO BALY MORANGO E PÊSSEGO 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/8708b62e-bdfe-4b3c-8911-5d8ce52d362e.jpg",
    unidade: true
  },
  {
    id: "baly-tropical-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "ENERGÉTICO BALY TROPICAL 2L",
    descricao: "ENERGÉTICO BALY TROPICAL 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/badb0cf5-6fb6-4bdc-b69a-1b47243f7c12.jpg",
    unidade: true
  },
  {
    id: "baly-citrus-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "ENERGÉTICO BALY CITRUS 2L",
    descricao: "ENERGÉTICO BALY CITRUS 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/24861e8a-b046-49a0-96c6-ac8489bd1dc0.jpeg",
    unidade: true
  },
  {
    id: "baly-coco-acai-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "BALY COCO E AÇAÍ 2L",
    descricao: "BALY COCO E AÇAÍ 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/36f4d104-eeaf-4de6-a812-b895039ba11a.jpg",
    unidade: true
  },
  {
    id: "monster-tradicional-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "MONSTER TRADICIONAL 473ml",
    descricao: "MONSTER TRADICIONAL 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/6ab786cc-1878-42d2-8b00-a3d9c92f0445.jpg",
    unidade: true
  },
  {
    id: "monster-mango-loco-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "MONSTER MANGO LOCO 473ml",
    descricao: "MONSTER MANGO LOCO 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/36d1d91c-add8-4b37-8aea-189d43a8e250.jpg",
    unidade: true
  },
  {
    id: "vibe-pink-boost-zero-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE PINK BOOST ZERO 473ml",
    descricao: "VIBE PINK BOOST ZERO 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/00691669-b51b-4413-ba44-e5c14c2a933d.jpeg",
    unidade: true
  },
  {
    id: "vibe-white-boost-zero-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE WHITE BOOST ZERO 473ml",
    descricao: "VIBE WHITE BOOST ZERO 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/8ac65850-a8fc-49b9-92a0-86c8723fc9ca.jpeg" , 
    unidade: true
  },
  {
    id: "vibe-lichia-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE LICHIA 473ml",
    descricao: "VIBE LICHIA 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/5881aa95-bde8-4bf2-a25c-7f683a36c7f8.jpeg",
    unidade: true
  },
  {
    id: "vibe-acai-coco-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE AÇAÍ E COCO 473ml",
    descricao: "VIBE AÇAÍ E COCO 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f7c92da3-292c-4751-8ef8-71ccf7cfb02d.jpeg",
    unidade: true
  },
  {
    id: "vibe-tradicional-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE TRADICIONAL 473ml",
    descricao: "VIBE TRADICIONAL 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/13b9e1bb-0407-444b-bf4f-b77786c7d6eb.jpeg",
    unidade: true
  },
  {
    id: "vibe-mango-boost-zero-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE MANGO BOOST ZERO 473ml",
    descricao: "VIBE MANGO BOOST ZERO 473ml",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/6f3feb5c-8acc-483c-a381-bb173b101749.jpeg ",
    unidade: true
  },
  {
    id: "vibe-melancia-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE MELANCIA 473ml",
    descricao: "VIBE MELANCIA 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/3f59945a-476d-4e71-ac8b-19b017942153.jpeg",
    unidade: true
  },
  {
    id: "vibe-morango-pessego-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE MORANGO E PÊSSEGO 473ml",
    descricao: "VIBE MORANGO E PÊSSEGO 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/bd26cc44-aa5b-43f9-9ae8-2c1d2fd42e99.jpeg",
    unidade: true
  },
  {
    id: "vibe-coco-abacaxi-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE COCO E ABACAXI 473ml",
    descricao: "VIBE COCO E ABACAXI 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/fdff2a8e-e2b4-4293-b8d2-95c6c9e2918f.jpeg",
    unidade: true
  },
  {
    id: "vibe-blue-extreme-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE BLUE EXTREME 473ml",
    descricao: "VIBE BLUE EXTREME 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/73e5d788-5d2d-4587-8313-58acfa3a788c.jpeg",
    unidade: true
  },
  {
    id: "vibe-tropical-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE TROPICAL 473ml",
    descricao: "VIBE TROPICAL 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/3cf715fb-80e2-4e8a-bc66-a16669218e9f.jpeg",
    unidade: true
  },
  {
    id: "vibe-maca-verde-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE MAÇÃ VERDE 473ml",
    descricao: "VIBE MAÇÃ VERDE 473ml",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/1200730a-1eec-4ebd-b1ce-4d60588760d1.jpeg ",
    unidade: true
  },
  {
    id: "bob-pinga-energetico-473ml",
    categoria: "energetico",
    grupo: "Energético",
    nome: "BOB PINGA ENERGÉTICO 473ml",
    descricao: "BOB PINGA ENERGÉTICO 473ml",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f71d0a85-cadb-4296-8d3d-97201d94ed6f.jpeg",
    unidade: true
  },
  {
    id: "red-horse-tropical-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "ENERGÉTICO RED HORSE TROPICAL 2L",
    descricao: "ENERGÉTICO RED HORSE TROPICAL 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b1a9ec75-f25d-44c1-bd95-6695105578c0.jpeg",
    unidade: true
  },
  {
    id: "red-horse-melancia-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "ENERGÉTICO RED HORSE MELANCIA 2L",
    descricao: "ENERGÉTICO RED HORSE MELANCIA 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f1007510-5f1f-4075-9f76-abb7f0fa25f2.jpeg",
    unidade: true
  },
  {
    id: "red-horse-morango-pessego-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "ENERGÉTICO RED HORSE MORANGO E PÊSSEGO 2L",
    descricao: "ENERGÉTICO RED HORSE MORANGO E PÊSSEGO 2L",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/0b0ecae4-2016-41a1-bd0e-e8addd133a5d.jpeg",
    unidade: true
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

  {
    id: "bem-casado-banoffee-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "LICOR BEM CASADO BANOFFEE 1L",
    descricao: "LICOR BEM CASADO BANOFFEE 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "bem-casado-pistache-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO PISTACHE 1L",
    descricao: "BEM CASADO PISTACHE 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "bem-casado-creme-brulee-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO CREME BRULEE 1L",
    descricao: "BEM CASADO CREME BRULEE 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "bem-casado-capuccino-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO CAPUCCINO 1L",
    descricao: "BEM CASADO CAPUCCINO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "bem-casado-doce-de-leite-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO DOCE DE LEITE 1L",
    descricao: "BEM CASADO DOCE DE LEITE 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "bem-casado-maracuja-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO MARACUJÁ 1L",
    descricao: "BEM CASADO MARACUJÁ 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "licor-jagermeister-700ml",
    categoria: "licor",
    grupo: "Licor",
    nome: "LICOR JAGERMEISTER 700ml",
    descricao: "LICOR JAGERMEISTER 700ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "licor-cointreau-700ml",
    categoria: "licor",
    grupo: "Licor",
    nome: "LICOR COINTREAU 700ml",
    descricao: "LICOR COINTREAU 700ml",
    preco: null,
    precoCartao: null,
    imagem: null
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
  },

  {
    id: "aperitivo-cynar-900ml",
    categoria: "aperitivo",
    grupo: "Aperitivo",
    nome: "APERITIVO CYNAR 900ml",
    descricao: "APERITIVO CYNAR 900ml",
    preco: null,
    precoCartao: null,
    imagem: "",
  },
  {
    id: "natu-nobilis-1l",
    categoria: "aperitivo",
    grupo: "Aperitivo",
    nome: "NATU NOBILIS 1L",
    descricao: "NATU NOBILIS 1L",
    preco: null,
    precoCartao: null,
    imagem: "",
  },
  
  // DRINKS PRONTOS ------------------------------------------------------------------
  
  

  // CHAMPANHE ------------------------------------------------------------------
  
  {
    id: "chandon-passion-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "CHANDON 750ml - PASSION",
    descricao: "CHANDON 750ml - PASSION",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "chandon-brut-rose-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "CHANDON 750ml - BRUT ROSE",
    descricao: "CHANDON 750ml - BRUT ROSE",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "dom-perignon-vintage-brut-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "CHAMPAGNE DOM PERIGNON VINTAGE BRUT 750ml",
    descricao: "CHAMPAGNE DOM PERIGNON VINTAGE BRUT 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "casa-perini-brut-branco-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "ESPUMANTE CASA PERINI BRUT BRANCO 750ml",
    descricao: "ESPUMANTE CASA PERINI BRUT BRANCO 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "casa-perini-moscatel-branco-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "ESPUMANTE CASA PERINI MOSCATEL BRANCO 750ml",
    descricao: "ESPUMANTE CASA PERINI MOSCATEL BRANCO 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },


  // VINHO ------------------------------------------------------------------
  
  {
    id: "pergola-suave-1l",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "PERGOLA SUAVE 1L",
    descricao: "PERGOLA SUAVE 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "catuaba-900ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "CATUABA 900ml",
    descricao: "CATUABA 900ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "catuaba-acai-900ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "CATUABA AÇAÍ 900ml",
    descricao: "CATUABA AÇAÍ 900ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "sangue-de-boi-suave-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO SANGUE DE BOI SUAVE 750ml",
    descricao: "VINHO SANGUE DE BOI SUAVE 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "reservado-sweet-white-suave-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO SWEET WHITE SUAVE 750ml",
    descricao: "VINHO RESERVADO SWEET WHITE SUAVE 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "concha-y-toro-merlot-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO CONCHA Y TORO MERLOT 750ml",
    descricao: "VINHO RESERVADO CONCHA Y TORO MERLOT 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "concha-y-toro-cabernet-sauvignon-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO CONCHA Y TORO CABERNET SAUVIGNON 750ml",
    descricao: "VINHO RESERVADO CONCHA Y TORO CABERNET SAUVIGNON 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "reservado-spritzer-moscato-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO SPRITZER MOSCATO 750ml",
    descricao: "VINHO RESERVADO SPRITZER MOSCATO 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "reservado-sweet-rose-suave-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO SWEET ROSE SUAVE 750ml",
    descricao: "VINHO RESERVADO SWEET ROSE SUAVE 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "reservado-chardonnay-pedro-jimenez-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO CHARDONNAY PEDRO JIMENEZ 750ml",
    descricao: "VINHO RESERVADO CHARDONNAY PEDRO JIMENEZ 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "reservado-sauvignon-blanc-pedro-jimenez-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO SAUVIGNON BLANC PEDRO JIMENEZ 750ml",
    descricao: "VINHO RESERVADO SAUVIGNON BLANC PEDRO JIMENEZ 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "bodega-zaeli-reservado-pinot-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO BODEGA ZAELI RESERVADO PINOT 750ml",
    descricao: "VINHO BODEGA ZAELI RESERVADO PINOT 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "jurupinga-975ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "JURUPINGA 975ml",
    descricao: "JURUPINGA 975ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "vermouth-martini-bianco-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VERMOUTH MARTINI BIANCO 750ml",
    descricao: "VERMOUTH MARTINI BIANCO 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // BEATS / ICE ------------------------------------------------------------------
  
  {
    id: "skol-beats-long-neck-269ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SKOL BEATS - LONG NECK 269ml",
    descricao: "SKOL BEATS - LONG NECK 269ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "skol-beats-verde-long-neck-269ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SKOL BEATS VERDE LONG NECK 269ml",
    descricao: "SKOL BEATS VERDE LONG NECK 269ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "beats-long-neck-gt-269ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "BEATS LONG NECK GT 269ml",
    descricao: "BEATS LONG NECK GT 269ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "smirnoff-ice-275ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SMIRNOFF ICE 275ml",
    descricao: "SMIRNOFF ICE 275ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "smirnoff-ice-raspberry-275ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SMIRNOFF ICE RASPBERRY 275ml",
    descricao: "SMIRNOFF ICE RASPBERRY 275ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // CACHAÇA ------------------------------------------------------------------
  
  {
    id: "dreher-900ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "DREHER 900ml",
    descricao: "DREHER 900ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "sao-joao-da-barra-900ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "SÃO JOÃO DA BARRA 900ml",
    descricao: "SÃO JOÃO DA BARRA 900ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "kit-sagatiba-rabo-de-galo-copo",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "KIT SAGATIBA RABO DE GALO + COPO",
    descricao: "KIT SAGATIBA RABO DE GALO + COPO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "ypioca-ouro-965ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "YPIOCA OURO 965ml",
    descricao: "YPIOCA OURO 965ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "ypioca-prata-965ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "YPIOCA PRATA 965ml",
    descricao: "YPIOCA PRATA 965ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "zora-genebra-dubar-960ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "ZORA GENEBRA DUBAR 960ml",
    descricao: "ZORA GENEBRA DUBAR 960ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "cachaca-asas-branca-jequitiba-980ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "CACHAÇA ASAS BRANCA JEQUITIBA 980ml",
    descricao: "CACHAÇA ASAS BRANCA JEQUITIBA 980ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "cachaca-asas-branca-balsamo-980ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "CACHAÇA ASAS BRANCA BÁLSAMO 980ml",
    descricao: "CACHAÇA ASAS BRANCA BÁLSAMO 980ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "pitu-lata-350ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "PITU LATA 350ml",
    descricao: "PITU LATA 350ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "bob-pinga-975ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "BOB PINGA 975ml",
    descricao: "BOB PINGA 975ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "jurubeba-leao-do-norte-600ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "JURUBEBA LEÃO DO NORTE 600ml",
    descricao: "JURUBEBA LEÃO DO NORTE 600ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // RUM ------------------------------------------------------------------
  
  {
    id: "rum-montilla-carta-ouro",
    categoria: "rum",
    grupo: "Rum",
    nome: "RUM MONTILLA CARTA OURO",
    descricao: "RUM MONTILLA CARTA OURO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "rum-montilla-carta-branca",
    categoria: "rum",
    grupo: "Rum",
    nome: "RUM MONTILLA CARTA BRANCA",
    descricao: "RUM MONTILLA CARTA BRANCA",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "rum-montilla-carta-cristal",
    categoria: "rum",
    grupo: "Rum",
    nome: "RUM MONTILLA CARTA CRISTAL",
    descricao: "RUM MONTILLA CARTA CRISTAL",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "busca-brisa-1l",
    categoria: "rum",
    grupo: "Rum",
    nome: "BUSCA BRISA 1L",
    descricao: "BUSCA BRISA 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // ÁGUA MINERAL ------------------------------------------------------------------
  
  {
    id: "agua-crystal-gold-sem-gas-510ml",
    categoria: "agua-mineral",
    grupo: "Água mineral",
    nome: "ÁGUA CRYSTAL GOLD S/GÁS 510ml",
    descricao: "ÁGUA CRYSTAL GOLD S/GÁS 510ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-com-gas-crystal-510ml",
    categoria: "agua-mineral",
    grupo: "Água mineral",
    nome: "ÁGUA COM GÁS CRYSTAL 510ml",
    descricao: "ÁGUA COM GÁS CRYSTAL 510ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-crystal-gold-sem-gas-1-5l",
    categoria: "agua-mineral",
    grupo: "Água mineral",
    nome: "ÁGUA CRYSTAL GOLD S/GÁS 1,5L",
    descricao: "ÁGUA CRYSTAL GOLD S/GÁS 1,5L",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // GELOS SABORES ------------------------------------------------------------------
  
  {
    id: "gelo-rms-melancia-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MELANCIA 200ml",
    descricao: "GELO RMS MELANCIA 200ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-rms-maracuja-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MARACUJÁ 200ml",
    descricao: "GELO RMS MARACUJÁ 200ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-rms-maca-verde-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MAÇÃ VERDE 200ml",
    descricao: "GELO RMS MAÇÃ VERDE 200ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-rms-blueberry-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS BLUEBERRY 200ml",
    descricao: "GELO RMS BLUEBERRY 200ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-rms-coco-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS COCO 200ml",
    descricao: "GELO RMS COCO 200ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-rms-morango-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MORANGO 200ml",
    descricao: "GELO RMS MORANGO 200ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-rms-morango-pessego-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MORANGO COM PÊSSEGO 200ml",
    descricao: "GELO RMS MORANGO COM PÊSSEGO 200ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-coco-coko-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "ÁGUA DE COCO DO COKO 200ml FARDO C/27 (DESCONGELADO)",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-coco-coko-morango-200ml-fardo-28",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO MORANGO 200ml FARDO C/28 (DESCONGELADO)",
    descricao: "ÁGUA DE COCO DO COKO MORANGO 200ml FARDO C/28 (DESCONGELADO)",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-coco-coko-melancia-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO MELANCIA 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "ÁGUA DE COCO DO COKO MELANCIA 200ml FARDO C/27 (DESCONGELADO)",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-coco-coko-maracuja-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO MARACUJÁ 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "ÁGUA DE COCO DO COKO MARACUJÁ 200ml FARDO C/27 (DESCONGELADO)",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-coco-coko-maca-verde-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO MAÇÃ VERDE 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "ÁGUA DE COCO DO COKO MAÇÃ VERDE 200ml FARDO C/27 (DESCONGELADO)",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-coco-coko-pitaya-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO PITAYA 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "ÁGUA DE COCO DO COKO PITAYA 200ml FARDO C/27 (DESCONGELADO)",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "agua-coco-coko-pessego-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO PÊSSEGO 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "ÁGUA DE COCO DO COKO PÊSSEGO 200ml FARDO C/27 (DESCONGELADO)",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coko-uva-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO UVA CONGELADO",
    descricao: "GELO COKO UVA CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coko-royale-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO ROYALE CONGELADO",
    descricao: "GELO COKO ROYALE CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coko-maca-verde-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO MAÇÃ VERDE CONGELADO",
    descricao: "GELO COKO MAÇÃ VERDE CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coko-laranja-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO LARANJA CONGELADO",
    descricao: "GELO COKO LARANJA CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coko-pessego-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO PÊSSEGO CONGELADO",
    descricao: "GELO COKO PÊSSEGO CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-skol-beats-gt",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - SKOL BEATS GT CONGELADO",
    descricao: "GELO COCO LEVE - SKOL BEATS GT CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-skol-beats-red-mix",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - SKOL BEATS RED MIX CONGELADO",
    descricao: "GELO COCO LEVE - SKOL BEATS RED MIX CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-skol-beats-green-mix",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - SKOL BEATS GREEN MIX CONGELADO",
    descricao: "GELO COCO LEVE - SKOL BEATS GREEN MIX CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-approve-amora",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - APPROVE AMORA CONGELADO",
    descricao: "GELO COCO LEVE - APPROVE AMORA CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-baly",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - BALY CONGELADO",
    descricao: "GELO COCO LEVE - BALY CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-cavalo-branco",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - CAVALO BRANCO CONGELADO",
    descricao: "GELO COCO LEVE - CAVALO BRANCO CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-xeque-mate",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - XEQUE MATE CONGELADO",
    descricao: "GELO COCO LEVE - XEQUE MATE CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-morango",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - MORANGO CONGELADO",
    descricao: "GELO COCO LEVE - MORANGO CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-melancia",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - MELANCIA CONGELADO",
    descricao: "GELO COCO LEVE - MELANCIA CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-coco-leve-maracuja",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - MARACUJÁ CONGELADO",
    descricao: "GELO COCO LEVE - MARACUJÁ CONGELADO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "gelo-ice-boss",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO ICE BOSS",
    descricao: "GELO ICE BOSS",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // REFRIGERANTES ------------------------------------------------------------------
  
  {
    id: "coca-cola-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "COCA COLA 2L",
    descricao: "COCA COLA 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "coca-cola-zero-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "COCA COLA ZERO AÇÚCAR 2L",
    descricao: "COCA COLA ZERO AÇÚCAR 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "coca-cola-200ml",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "COCA COLA 200ml",
    descricao: "COCA COLA 200ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "guarana-antartica-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "GUARANÁ ANTARTICA 2L",
    descricao: "GUARANÁ ANTARTICA 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "fanta-uva-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "FANTA UVA 2L",
    descricao: "FANTA UVA 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "dolly-limao-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "DOLLY LIMÃO 2L",
    descricao: "DOLLY LIMÃO 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "dolly-guarana-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "DOLLY GUARANA 2L",
    descricao: "DOLLY GUARANA 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "tuttibaina-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "TUTTIBAINA 2L",
    descricao: "TUTTIBAINA 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "tuttibaina-zero-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "TUTTIBAINA ZERO 2L",
    descricao: "TUTTIBAINA ZERO 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "popys-cola-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "POPYS COLA 2L",
    descricao: "POPYS COLA 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "popys-laranja-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "POPYS LARANJA 2L",
    descricao: "POPYS LARANJA 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "popys-limao-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "POPYS LIMÃO 2L",
    descricao: "POPYS LIMÃO 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "popys-guarana-2l",
    categoria: "refrigerantes",
    grupo: "Refrigerantes / Outros",
    nome: "POPYS GUARANÁ 2L",
    descricao: "POPYS GUARANÁ 2L",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // SUCOS ------------------------------------------------------------------

  {
    id: "suco-del-valle-maracuja-290ml",
    categoria: "sucos",
    grupo: "Sucos",
    nome: "SUCO DEL VALLE MARACUJÁ 290ml",
    descricao: "SUCO DEL VALLE MARACUJÁ 290ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "suco-del-valle-uva-290ml",
    categoria: "sucos",
    grupo: "Sucos",
    nome: "SUCO DEL VALLE UVA 290ml",
    descricao: "SUCO DEL VALLE UVA 290ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // CHOCOLATES / DOCES ------------------------------------------------------------------
  
  {
    id: "trento-avela-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO AVELÃ CAIXA C/16un",
    descricao: "TRENTO AVELÃ CAIXA C/16un",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "trento-cheesecake-morango-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO CHEESCAKE MORANGO CAIXA C/16un",
    descricao: "TRENTO CHEESCAKE MORANGO CAIXA C/16un",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "trento-duo-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO DUO CAIXA C/16un",
    descricao: "TRENTO DUO CAIXA C/16un",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "trento-morango-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO MORANGO CAIXA C/16un",
    descricao: "TRENTO MORANGO CAIXA C/16un",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "trento-chocolate-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO CHOCOLATE CAIXA C/16un",
    descricao: "TRENTO CHOCOLATE CAIXA C/16un",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "trento-torta-limao-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO TORTA DE LIMÃO CAIXA C/16un",
    descricao: "TRENTO TORTA DE LIMÃO CAIXA C/16un",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "trento-torta-pistache-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO TORTA DE PISTACHE CAIXA C/16un",
    descricao: "TRENTO TORTA DE PISTACHE CAIXA C/16un",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "trento-trufa-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO TRUFA CAIXA C/16un",
    descricao: "TRENTO TRUFA CAIXA C/16un",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  // DESCARTÁVEIS ------------------------------------------------------------------
  
  {
    id: "copo-770ml-orleplast",
    categoria: "descartaveis",
    grupo: "Descartáveis",
    nome: "COPO 770ML ORLEPLAST",
    descricao: "COPO 770ML ORLEPLAST",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "copo-termico-nasuk",
    categoria: "descartaveis",
    grupo: "Descartáveis",
    nome: "COPO TÉRMICO NASUK",
    descricao: "COPO TÉRMICO NASUK",
    preco: null,
    precoCartao: null,
    imagem: null
  },


  // Drinks prontos ------------------------------------------------------------------


  {
    id: "mansao-maromba-whisky-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY PRONTO 1L",
    descricao: "MANSÃO MAROMBA WHISKY PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "mansao-maromba-whisky-maca-verde-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY MAÇÃ VERDE PRONTO 1L",
    descricao: "MANSÃO MAROMBA WHISKY MAÇÃ VERDE PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "mansao-maromba-whisky-tigrinho-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY TIGRINHO PRONTO 1L",
    descricao: "MANSÃO MAROMBA WHISKY TIGRINHO PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "mansao-maromba-gin-combo-tropical-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA GIN COMBO TROPICAL PRONTO 1L",
    descricao: "MANSÃO MAROMBA GIN COMBO TROPICAL PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "mansao-maromba-gin-melancia-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA GIN MELANCIA PRONTO 1L",
    descricao: "MANSÃO MAROMBA GIN MELANCIA PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "drink-invictus-tropical-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR TROPICAL 1L",
    descricao: "DRINK INVICTUS SABOR DO SABOR TROPICAL 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "drink-invictus-maca-verde-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR MAÇÃ VERDE 1L",
    descricao: "DRINK INVICTUS SABOR DO SABOR MAÇÃ VERDE 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "drink-invictus-melancia-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR MELANCIA 1L",
    descricao: "DRINK INVICTUS SABOR DO SABOR MELANCIA 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "drink-invictus-whisky-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR WHISKY 1L",
    descricao: "DRINK INVICTUS SABOR DO SABOR WHISKY 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },


];
