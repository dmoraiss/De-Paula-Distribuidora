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
  { id: "beats-ice", nome: "Beats / Ice", grupos: ["Beats / Ice"] },
  { id: "aperitivo", nome: "Aperitivo", grupos: ["Aperitivo"] },
  { id: "cachaca", nome: "Cachaça", grupos: ["Cachaça"] },
  { id: "rum", nome: "Rum", grupos: ["Rum"] },
  { id: "agua-mineral", nome: "Água mineral", grupos: ["Água mineral"] },
  { id: "gelos-sabores", nome: "Gelos sabores", grupos: ["Gelos sabores"] },
  { id: "refrigerantes", nome: "Refrigerantes / Outros", grupos: ["Coca-Cola", "Dolly" , "Tubaina" , "Pop's" , "Guaraná Antártica" , "Fanta"] },
  { id: "sucos", nome: "Sucos / Groselhas / Mel / Outros", grupos: ["Sucos" , "Groselhas" , "Mel" , "Outros" ] },
  { id: "doces", nome: "Cx Chocolates / Doces", grupos: ["Chocolates" ] },
  { id: "descartaveis", nome: " Descartáveis ", grupos: [ "Descartáveis" ] }
];

// Copie um objeto, troque o id por um identificador único e altere os dados.
// O campo categoria deve corresponder a um id da lista acima.
// O campo grupo define os subtítulos dentro de cada categoria.


/* SEM IMAGEM */

/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVGBbBkB3V-8eNxJ5-OiMvux3BAODupASs3LQzSCEKw&s=10 */


const produtos = [

  // GIN ----------------------------------------------------------------------

  {

  id: "beefeater-tradicional",

  categoria: "gin",

  grupo: "Gin",

  nome: "BEEFEATER 750ml - TRADICIONAL",

  volume: "750ml",

  marca: "Beefeater",

  teorAlcoolico: "40%",

  origem: "Inglaterra",

  detalhes:
    "Gin London Dry de perfil seco e aromático, produzido com botânicos selecionados. Ideal para drinks como Gin Tônica e outros coquetéis.",
  preco: null,

  precoCartao: null,

  imagem: "https://images.getinapp.com.br/c2c39385-0096-433f-825c-aace4dd9c9c7.jpg"

  },
  
  {
    id: "beefeater-pink", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 700ml - PINK", descricao: "Gin Beefeater Pink com sabor de morango, indicado para servir gelado ou preparar coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/bd95036d-327e-436b-982c-2257ec5a52cb.jpg"
    ,
  },
  {
    id: "beefeater-blackberry", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 700ml - BLACKBERRY", descricao: "Gin Beefeater com sabor de blackberry, indicado para servir gelado ou preparar coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/7d6ceda9-8c06-4d45-963d-c7671c34ffa4.jpg"
  },
  {
    id: "bombay-sapphire", categoria: "gin", grupo: "Gin",
    nome: "BOMBAY SAPPHIRE 750ml", descricao: "Gin Bombay Sapphire, versátil para Gin Tônica e outros coquetéis.",
    preco: null, precoCartao: null, imagem: " https://images.getinapp.com.br/c1e9396d-bc35-437c-8011-ed7dcfcc502d.jpg "
  },
  {
    id: "tanqueray-tradicional", categoria: "gin", grupo: "Gin",
    nome: "TANQUERAY TRADICIONAL 750ml", descricao: "Gin Tanqueray Tradicional, versátil para Gin Tônica e outros coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/8f96631a-6917-4c58-9369-9642dccc4212.jpg"
  },
  
  {
    id: "tanqueray-royale-700ml",
    categoria: "gin",
    grupo: "Gin",
    nome: "TANQUERAY ROYALE 700ml",
    descricao: "Gin Tanqueray Royale, versátil para Gin Tônica e outros coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWYUYVYp-18FbQ_9XT1LU3JqidyBcVB_oXjeFH35LTA&s=10"
  },

  {
    id: "tanqueray-bossa-nova-700ml",
    categoria: "gin",
    grupo: "Gin",
    nome: "TANQUERAY BOSSA NOVA 700ml",
    descricao: "Gin Tanqueray Bossa Nova, versátil para Gin Tônica e outros coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/845acf22-94eb-4cc0-ac44-d94fe8d9f3fd.jpeg"
  },
  
  {
  id: "tanqueray-sevilla-700ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "TANQUERAY SEVILLA 700ml",
  descricao: "Gin Tanqueray Sevilla, versátil para Gin Tônica e outros coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/3230620f-ec93-4e24-8bc7-fe0c9676a2dd.jpg"
},
{
  id: "mini-tanqueray-tradicional-375ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "MINI TANQUERAY TRADICIONAL 375ml",
  descricao: "Gin Mini Tanqueray Tradicional, versátil para Gin Tônica e outros coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmh1owFuXns5tUshrl3cJI_WHum1XWy_SySYermHW0PA&s"
},
{
  id: "gordons-750ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GORDONS 750ml",
  descricao: "Gin Gordons, versátil para Gin Tônica e outros coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9x8J3mZwKGomWvuK6vEdpBCyBuAsVfUXKySsunuzZsA&s=10"
},
{
  id: "gordons-pink-700ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GORDONS PINK 700ml",
  descricao: "Gin Gordons Pink, versátil para Gin Tônica e outros coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nmtsngRbqVHFDf1BGd5sqmvMlLR1JxSmFS19LiDR3Q&s=10"
},
{
  id: "gin-rocks-prata-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS PRATA 1L",
  descricao: "Gin Rocks Prata, versátil para Gin Tônica e outros coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLTAWWmPJX_ugS2Bmk-I5El2DrYnCUP_GU2eHDemHnA&s=10"
},
{
  id: "gin-rocks-melancia-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MELANCIA 1L",
  descricao: "Gin Rocks Melancia com sabor de melancia, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYx33fKJbdsKy5FWIbKE8ONr7QDl14Aq8_I4K04N1tQ&s=10"
},
{
  id: "gin-rocks-morango-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MORANGO 1L",
  descricao: "Gin Rocks Morango com sabor de morango, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYBL8SdfummJiidZwqk4bxrnIi3zuB8OjrmzCHE5wiQ&s=10"
},
{
  id: "gin-rocks-sunset-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS SUNSET 1L",
  descricao: "Gin Rocks Sunset, versátil para Gin Tônica e outros coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYODpoU9D8NaELHsX0tYaJmFW6TJKlgvlo6pU10VK2g&s=10"
},
{
  id: "gin-rocks-maca-verde-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MAÇÃ VERDE 1L",
  descricao: "Gin Rocks Maçã Verde com sabor de maçã verde, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVwbALCr6Mguq2AIYjzE59vPNFks7G_NxPGBF3qtgpg&s=10"
},
{
  id: "gin-invictus-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MORANGO",
  descricao: "Gin Invictus com sabor de morango, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIg0Ob5R-1UmCggKuBe9K97A0oVbwL_7eTM6PqEylvw&s=10"
},
{
  id: "gin-invictus-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MELANCIA",
  descricao: "Gin Invictus com sabor de melancia, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPapN70WF8kMRZKLari_nLjDEWHElBizG5F0iZKJ-iA&s"
},
{
  id: "gin-invictus-abacaxi-hortela-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - ABACAXI COM HORTELÃ",
  descricao: "Gin Invictus com sabor de abacaxi com hortelã, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStS2dG_-YPyhRiaz6MAteVS5pJKEJ98UvmNl32y8BmZorIJCkV3gtIptQ&s=10"
},
{
  id: "gin-invictus-morango-pessego-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MORANGO COM PÊSSEGO",
  descricao: "Gin Invictus com sabor de morango com pêssego, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOf0iprMSNxJU_xizxQDxIOdMnxTtWFK_Q1Ocq3E4dg&s=10"
},
{
  id: "gin-eternity-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MELANCIA 900ml",
  descricao: "Gin Eternity Melancia com sabor de melancia, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9anSic1c-KjEeVmwmE-H2_5R1vF8fAxxmdq2alpm-g&s=10"
},
{
  id: "gin-eternity-tropical-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY TROPICAL 900ml",
  descricao: "Gin Eternity Tropical com sabor de tropical, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJt4k6cVaJmPanOqntz_Qq-Dh-xqKWKQUlUY3N7V4hgQ&s=10"
},
{
  id: "gin-eternity-baunilha-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY BAUNILHA 900ml",
  descricao: "Gin Eternity Baunilha com sabor de baunilha, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://http2.mlstatic.com/D_Q_NP_2X_638213-MLB107875071089_022026-P.webp"
},
{
  id: "gin-eternity-morango-pessego-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MORANGO E PÊSSEGO 900ml",
  descricao: "Gin Eternity Morango E Pêssego com sabor de morango e pêssego, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KIUowOU5ekrlMyPB9VGs9fuTvK5EMVeDFu-bYKbscA&s=10"
},
{
  id: "gin-eternity-royale-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY ROYALE 900ml",
  descricao: "Gin Eternity Royale, versátil para Gin Tônica e outros coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-DjSjUAYJ4t9v-vUACypcinBOMB1xDZtiSpkNomidQ&s=10"
},
{
  id: "gin-eternity-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MORANGO 900ml",
  descricao: "Gin Eternity Morango com sabor de morango, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMi_U2HJgczfRDkk4XGFnuH6MQ_xQWOuFkRqR9moS5Q&s=10"
},
{
  id: "gin-eternity-abacaxi-hortela-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY ABACAXI C/ HORTELÃ 900ml",
  descricao: "Gin Eternity Abacaxi C/ Hortelã com sabor de abacaxi, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2034pklD6e8kD2-hF0oIWlPew5rqw7LpZXr6VLXx2Q&s=10"
},
{
  id: "gin-eternity-pistache-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY PISTACHE 900ml",
  descricao: "Gin Eternity Pistache com sabor de pistache, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpp4ctZpTdgFtIXcRwAyOp6NxvU8MAqFc__zU7nHu0NA&s=10"
},
{
  id: "gin-eternity-pessego-framboesa-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY PÊSSEGO E FRAMBOESA 900ml",
  descricao: "Gin Eternity Pêssego E Framboesa com sabor de pêssego e framboesa, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KlDQ1fdAC-9ZJJ98lbeDPtvYuge6AYGIShGUfT5cwQ&s=10"
},
{
  id: "gin-rms-morango-pessego-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS MORANGO E PÊSSEGO 950ml",
  descricao: "Gin Rms Morango E Pêssego com sabor de morango e pêssego, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLO6E0GMu3CcFrcTXEN8fAGRYYKEH3DiGZGN8hvQ2pzg&s"
},
{
  id: "gin-rms-abacaxi-hortela-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS ABACAXI COM HORTELÃ 950ml",
  descricao: "Gin Rms Abacaxi Com Hortelã com sabor de abacaxi com hortelã, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "/imagens/gin/gin-rms-abacaxi-hortela-950ml.png"
},
{
  id: "gin-rms-tradicional-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS TRADICIONAL 950ml",
  descricao: "Gin Rms Tradicional, versátil para Gin Tônica e outros coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: " /imagens/gin/gin-rms-tradicional-950ml.png"
},
{
  id: "gin-fulls-frutas-vermelhas-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS FRUTAS VERMELHAS 980ml",
  descricao: "Gin Fulls Frutas Vermelhas com sabor de frutas vermelhas, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODhlUga3oz7Dg7LJXRCddW-3fxTEokVKOy_jKDmIWhg&s=10"
},
{
  id: "gin-fulls-frutas-silvestres-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS FRUTAS SILVESTRES 980ml",
  descricao: "Gin Fulls Frutas Silvestres com sabor de frutas silvestres, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uIa-8RZFtElRZBSBnwHU4kCv8dVCk4X4dGg3YdtVfw&s=10"
},
{
  id: "gin-fulls-melancia-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS MELANCIA 980ml",
  descricao: "Gin Fulls Melancia com sabor de melancia, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReynr6F3ydiNGcPthR2EPxhBEPCBYp7AYJ0PgEjAVSMQ&s=10"
},
{
  id: "gin-intencion-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INTENCION MORANGO 900ml",
  descricao: "Gin Intencion Morango com sabor de morango, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/05d84a22-474a-4238-ad06-47a183965019.jpeg"
},
{
  id: "gin-intencion-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INTENCION MELANCIA 900ml",
  descricao: "Gin Intencion Melancia com sabor de melancia, indicado para servir gelado ou preparar coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/769c29f7-58ab-426a-b05e-56a88b47cb67.jpeg"
},





  // WHISKY -------------------------------------------------------------------





  {
    id: "jack-daniels-tradicional", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS TRADICIONAL 1L", descricao: "Whisky Jack Daniels Tradicional, para apreciar puro, com gelo ou em coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/122ac247-880f-408b-97dd-4c0d39c4caaf.jpg"
  },
  {
    id: "jack-daniels-honey", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS HONEY 1L", descricao: "Whisky Jack Daniels Honey na versão honey, para apreciar puro, com gelo ou em coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/f3ca8bbc-5ee6-44d9-b2dc-80e63bec0ce3.jpg"
  },
  {
    id: "jack-daniels-maca", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS MAÇÃ VERDE 1L", descricao: "Whisky Jack Daniels Maçã Verde na versão maçã verde, para apreciar puro, com gelo ou em coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/9995a8f9-d206-4434-8134-c5a7a3758b4f.jpg"
  },
  {
    id: "jack-daniels-fire", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS FIRE 1L", descricao: "Whisky Jack Daniels Fire na versão fire, para apreciar puro, com gelo ou em coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/c7713a94-1751-470e-8d5f-6d6e491af481.jpg"
  },
  {
    id: "jack-daniels-blackberry", categoria: "whisky", grupo: "Whisky",
    nome: "JACK DANIELS BLACKBERRY 1L", descricao: "Whisky Jack Daniels Blackberry na versão blackberry, para apreciar puro, com gelo ou em coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/8b6638c6-3cd0-4b13-8dae-e20a34d7e2da.jpeg"
  },

  {
  id: "jack-daniels-gentleman-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS GENTLEMAN 1L",
  descricao: "Whisky Jack Daniels Gentleman, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/c84d49f6-535b-4739-9367-e67b31a1bc83.jpeg"
},
{
  id: "jack-gentleman-copo",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK GENTLEMAN 1L + COPO",
  descricao: "Whisky Jack Gentleman, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/ea8fef95-0a7e-41a2-a279-d475535779cd.jpeg"
},
{
  id: "jack-daniels-sinatra-select-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS SINATRA SELECT 1L",
  descricao: "Whisky Jack Daniels Sinatra Select, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/e6269e82-56f6-499a-851b-8fc0a6068d25.jpeg"
},
{
  id: "jack-daniels-single-barrel-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS SINGLE BARREL 750ml",
  descricao: "Whisky Jack Daniels Single Barrel, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/c8c14c4b-b402-4373-9fc5-4ac51edc7d76.jpg"
},
{
  id: "woodford-reserve-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "WHISKY WOODFORD RESERVE 750ml",
  descricao: "Whisky Woodford Reserve, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/ec607b86-1075-4579-9b95-9a5c6d8737a1.jpg"
},
{
  id: "ballantines-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES 1L",
  descricao: "Whisky Ballantines, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/679c48eb-2b9d-474e-aad2-778a45f625e2.jpg"
},
{
  id: "ballantines-10-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES 10 ANOS 1L",
  descricao: "Whisky Ballantines 10 Anos, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/dd686983-6aec-4255-9676-d5263d92b92c.jpg"
},
{
  id: "ballantines-sunshine-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES SUNSHINE 700ml",
  descricao: "Whisky Ballantines Sunshine, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/cb40795b-c56f-43bd-b591-1225a7bce020.jpeg"
},
{
  id: "ballantines-burbon-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES BURBON 750ml",
  descricao: "Whisky Ballantines Burbon, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/94270ac0-c2dc-4431-aa2d-daa837927f73.jpeg"
},
{
  id: "ballantines-sweet-brend-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES SWEET BREND 700ml",
  descricao: "Whisky Ballantines Sweet Brend, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/fa43005a-c795-4b28-9ab7-19781c4e78d6.jpeg"
},
{
  id: "red-label-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "RED LABEL 1L",
  descricao: "Whisky Red Label, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/e3a39c93-cfae-4e61-b7e9-b3b5083aeb73.jpg"
},
{
  id: "black-label-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BLACK LABEL 1L",
  descricao: "Whisky Black Label, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/02977a63-1a74-41ae-a628-d9f4c291bc91.jpg"
},
{
  id: "double-black-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "DOUBLE BLACK 1L",
  descricao: "Whisky Double Black, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/034fb1a9-ce45-4157-b840-b656325252bf.jpg"
},
{
  id: "gold-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GOLD LABEL 750ml",
  descricao: "Whisky Gold Label, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/f3ad10b8-74d5-4d08-9200-4c57637fb285.jpg"
},
{
  id: "green-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GREEN LABEL 750ml",
  descricao: "Whisky Green Label, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/6632f7cb-a8db-46ee-9eb2-5beb285bb60b.jpg"
},
{
  id: "blue-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BLUE LABEL 750ml",
  descricao: "Whisky Blue Label, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/05d395ea-39a7-49ec-9791-05a7dcf8201a.jpg"
},
{
  id: "jim-beam-tradicional-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM TRADICIONAL 1L",
  descricao: "Whisky Jim Beam Tradicional, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/de4f0633-c28d-44e0-9a61-c38f4979b2be.jpg"
},
{
  id: "jim-beam-honey-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM HONEY 1L",
  descricao: "Whisky Jim Beam Honey na versão honey, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/381691ad-7ae3-4696-83a7-f041a0535cff.jpg"
},
{
  id: "jim-beam-maca-verde-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM MAÇÃ VERDE 1L",
  descricao: "Whisky Jim Beam Maçã Verde na versão maçã verde, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/d30f7950-acda-4f6e-b84f-fef0690c12d3.jpg"
},
{
  id: "jim-beam-black-cherry-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM BLACK CHERRY 1L",
  descricao: "Whisky Jim Beam Black Cherry, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/b0b3f9a8-f091-4910-9906-8cea44f44504.jpeg"
},
{
  id: "jim-beam-black-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM BLACK 1L",
  descricao: "Whisky Jim Beam Black, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/a31b396f-99fd-460e-b789-604e90cec201.jpeg"
},
{
  id: "white-horse-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "WHITE HORSE 1L",
  descricao: "Whisky White Horse, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/71fdb7a5-2e33-437d-b3dc-91cac0323023.jpg"
},
{
  id: "bells-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BELLS 700ml",
  descricao: "Whisky Bells, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/db426450-b5ec-4ab0-8525-fd9558d6ff60.jpg"
},
{
  id: "chanceler-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHANCELER 1L",
  descricao: "Whisky Chanceler, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/4bf921ed-76a8-436c-a6e3-fa607a7094e1.jpg"
},
{
  id: "chanceler-maca-verde-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHANCELER MAÇÃ VERDE 1L",
  descricao: "Whisky Chanceler Maçã Verde na versão maçã verde, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJC3BmXehNbJoJLoCJwTxxX2BGFyhoSsGgjaO3aY8QQ&s=10"
},
{
  id: "grants-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GRANTS 750ml",
  descricao: "Whisky Grants, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/c09dc870-c7ea-4269-8ae7-4bffb09b4b41.jpeg"
},
{
  id: "old-parr-12-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "OLD PARR 12 ANOS 1L",
  descricao: "Whisky Old Parr 12 Anos, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/d99bd4db-0835-4c19-b2b8-ad9e3a9c41dd.jpg"
},
{
  id: "buchanans-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BUCHANANS 1L",
  descricao: "Whisky Buchanans, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/cc062350-bc0a-4371-a2a1-5de9482daa72.jpg"
},
{
  id: "buffalo-trace-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BUFFALO TRACE 750ml",
  descricao: "Whisky Buffalo Trace, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/6409e93a-74da-486a-8ffd-65648e09872b.jpg"
},
{
  id: "passaport-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSAPORT 1L",
  descricao: "Whisky Passaport, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/f4ba17a8-d0c5-40f9-969c-3d641ba4d1ba.jpg"
},
{
  id: "passport-maca-670ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSPORT MAÇÃ 670ml",
  descricao: "Whisky Passport Maçã na versão maçã, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/8c3d4cee-1875-4570-976a-7fb23c0d7bda.jpg"
},
{
  id: "passaport-honey-670ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSAPORT HONEY 670ml",
  descricao: "Whisky Passaport Honey na versão honey, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/079f91b0-5e34-4556-9320-6c37a155eb79.jpg"
},
{
  id: "chivas-12-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHIVAS 12 ANOS 1L",
  descricao: "Whisky Chivas 12 Anos, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/c18c4fee-0f0f-4bca-87ca-1f5da0186efe.jpg"
},
{
  id: "chivas-15-anos-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHIVAS 15 ANOS 750ml",
  descricao: "Whisky Chivas 15 Anos, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/4bc725f9-c5b4-44e4-a999-f560821f7652.jpeg"
},
{
  id: "royal-salute-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE 750ml",
  descricao: "Whisky Royal Salute, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/2a474596-7c7c-49ad-abc9-f1bb648e430c.jpg"
},
{
  id: "royal-salute-grain-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE GRAIN 700ml",
  descricao: "Whisky Royal Salute Grain, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/d776ed0a-2ca3-457a-8ca4-09f3864e14e6.jpg"
},
{
  id: "royal-salute-malts-blend-verde-21-anos-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE MALTS BLEND VERDE 21 ANOS 700ml",
  descricao: "Whisky Royal Salute Malts Blend Verde 21 Anos, para apreciar puro, com gelo ou em coquetéis.",
  preco: null,
  precoCartao: null,
  imagem: "https://images.getinapp.com.br/18fe9768-b04d-490d-a70c-d1ae73cbcea1.png"
},





  // VODKA --------------------------------------------------------------------





  {
    id: "grey-goose-tradicional", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE TRADICIONAL 750ml", descricao: "Vodka Grey Goose Tradicional, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/956347f1-3978-4724-9ac0-00439e76c45c.jpeg"
  },
  {
    id: "grey-goose-orange", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE ORANGE 750ml", descricao: "Vodka Grey Goose Orange, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null, precoCartao: null, imagem: " https://images.getinapp.com.br/df9a3b45-ef7d-451b-9b96-eb7717f7650f.jpeg "
  },
  {
    id: "grey-goose-citron", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE CITRON 750ml", descricao: "Vodka Grey Goose Citron, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/b5d5351c-5714-4092-ac88-164bb5832521.jpg"
  },
  {
    id: "grey-goose-pera", categoria: "vodka", grupo: "Vodka",
    nome: "GREY GOOSE PERA 750ml", descricao: "Vodka Grey Goose Pera, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/eba8d2fe-f9fa-4f39-aa81-06c23332ff0e.jpg"
  },
  {
    id: "ciroc-tradicional",
    categoria: "vodka", 
    grupo: "Vodka",
    nome: "CIROC TRADICIONAL 750ml",
    descricao: "Vodka Ciroc Tradicional, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null, 
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/8176bfb2-0744-440d-9d54-6f4805261e47.jpg"
  },

  {
    id: "ciroc-red-berry-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "CIROC RED BERRY 750ml",
    descricao: "Vodka Ciroc Red Berry, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/acb7fa0e-cdb6-4931-b415-f3dab6ed4e4f.jpeg"
  },
  {
    id: "ciroc-tradicional-3l",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "CIROC TRADICIONAL 3L",
    descricao: "Vodka Ciroc Tradicional, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/530fa9a7-cedc-4bfc-bdee-fb298a17f1f7.jpg"
  },
  {
    id: "absolut-tradicional-1l",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT TRADICIONAL 1L",
    descricao: "Vodka Absolut Tradicional, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a28d8b2b-77cb-494f-b368-e28f0a780339.jpeg"
  },
  {
    id: "absolut-raspberri-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT RASPBERRI 750ml",
    descricao: "Vodka Absolut Raspberri, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/2127ee39-e38f-4866-bd1a-7a9687ea31bc.jpeg"
  },
  {
    id: "absolut-citron-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT CITRON 750ml",
    descricao: "Vodka Absolut Citron, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f71b7ba9-2e82-4161-b6f7-b42e5f603a8a.jpeg"
  },
  {
    id: "absolut-vanilla-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT VANILLA 750ml",
    descricao: "Vodka Absolut Vanilla, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/acbb9a5a-9c62-4fe7-b8ec-444ba5360ec1.jpeg"
  },
  {
    id: "absolut-tabasco-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT TABASCO 750ml",
    descricao: "Vodka Absolut Tabasco, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/41976137-3180-4e96-86f5-937b47dd78a4.jpeg"
  },
  {
    id: "absolut-elyx-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT ELYX 750ml",
    descricao: "Vodka Absolut Elyx, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/96c2c72e-35e3-440c-b4ef-b23f60327425.jpeg"
  },
  {
    id: "askov-blueberry-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - BLUEBERRY",
    descricao: "Vodka Askov com sabor de blueberry, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/1bba27e2-85ed-4586-bbd4-7ea7e843ee4b.jpeg"
  },
  {
    id: "askov-frutas-vermelhas-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - FRUTAS VERMELHAS",
    descricao: "Vodka Askov com sabor de frutas vermelhas, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/44dae6c3-a84a-412f-a178-4b0da4b86de5.jpeg"
  },
  {
    id: "askov-frutas-roxas-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV FRUTAS ROXAS 900ml",
    descricao: "Vodka Askov Frutas Roxas, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/e2208731-0573-4708-9675-9c585e97da31.jpeg"
  },
  {
    id: "askov-maracuja-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - MARACUJÁ",
    descricao: "Vodka Askov com sabor de maracujá, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b0d79186-9224-4274-b727-cfd821b70396.jpeg"
  },
  {
    id: "askov-limao-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - LIMÃO",
    descricao: "Vodka Askov com sabor de limão, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a4de3e20-c729-4c0b-af8f-e90a749c7539.jpeg"
  },
  {
    id: "askov-pessego-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - PÊSSEGO",
    descricao: "Vodka Askov com sabor de pêssego, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/6276be75-e1ad-40bb-afad-e05babada8c9.jpeg"
  },
  {
    id: "askov-kiwi-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - KIWI",
    descricao: "Vodka Askov, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/3d8578fd-16b3-4526-8e5d-b74480670b6b.jpeg"
  },
  {
    id: "smirnoff-998ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "VODKA SMIRNOFF 998ml",
    descricao: "Vodka Smirnoff, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/9321ec01-6aac-44e5-ad64-1226bf2d0e11.jpg"
  },
  {
    id: "belvedere-tradicional-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "VODKA BELVEDERE TRADICIONAL 750ml",
    descricao: "Vodka Belvedere Tradicional, indicada para servir gelada ou usar como base de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/2fe08b7b-f6fe-49f2-9dc8-6b43118d06f2.jpeg"
},





  // CERVEJA ------------------------------------------------------------------





  {
    id: "heineken-long", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LONG 330ml", descricao: "Cerveja Heineken, para servir bem gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/7156142c-b07f-4207-a9c2-ea95080a8e68.jpeg "
  },
  {
    id: "heineken-zero", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LONG NECK ZERO 330ml", descricao: "Cerveja Heineken, para servir bem gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: " https://images.getinapp.com.br/eadfa9f2-8181-4315-8364-e588f306e18f.jpeg "
  },
  {
    id: "heineken-lata", categoria: "cerveja", grupo: "Heineken",
    nome: "HEINEKEN LATA 269ml", descricao: "Cerveja Heineken, para servir bem gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: " https://images.getinapp.com.br/383c66e3-ba86-45a0-b743-1f79edd3c8fb.jpeg "
  },
  {
    id: "corona-long", categoria: "cerveja", grupo: "Corona",
    nome: "CORONA LONG NECK 350ml", descricao: "Cerveja Corona, para servir bem gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: " https://images.getinapp.com.br/c6a78880-bacc-48b8-bd5e-4b15fdc956f4.jpeg "
  },

  {
    id: "original-lata-269ml-c15un",
    categoria: "cerveja",
    grupo: "Original",
    nome: "ORIGINAL LATA 269ml C/15UN",
    descricao: "Cerveja Original, para servir bem gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b41abe06-2c11-4bc4-a69b-ff9f58f726a4.jpeg " ,
    unidade: true
  },
  {
    id: "skol-lata-269ml-fardo-fechado-c15",
    categoria: "cerveja",
    grupo: "Skol",
    nome: "SKOL LATA 269ml FARDO FECHADO C/15",
    descricao: "Cerveja Skol, para servir bem gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/e68d1b72-eaa5-419d-b64e-2688afdf685f.jpeg",
    unidade: true
  },
  {
    id: "itaipava-269ml",
    categoria: "cerveja",
    grupo: "Itaipava",
    nome: "ITAIPAVA 269ml",
    descricao: "Cerveja Itaipava, para servir bem gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/03e5fb31-23bb-4b6a-85dd-2780a7fa022a.jpeg",
    unidade: true
  },
  {
    id: "amstel-lata-269ml",
    categoria: "cerveja",
    grupo: "Amstel",
    nome: "AMSTEL LATA 269ml",
    descricao: "Cerveja Amstel, para servir bem gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPT0vm23MpWNpZdRfZ0S2bTSJCc4tG5Vs3qqxSV-4Tg&s=10",
    unidade: true
  },
  {
    id: "xeque-mate-lata-355ml",
    categoria: "cerveja",
    grupo: "Xeque Mate",
    nome: "XEQUE MATE LATA 355ml",
    descricao: "Cerveja Xeque Mate, para servir bem gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdek3nLa3srzAoEGiKoPrpKy_n9VCN0VRTI2Rum_Fn4A&s=10",
    unidade: true
  },
  {
    id: "draft-chopp-600ml",
    categoria: "cerveja",
    grupo: "Chopp",
    nome: "DRAFT CHOPP 600ml",
    descricao: "Cerveja Draft Chopp, para servir bem gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a6dbae69-128d-4589-b2ac-dbebef9d1e7f.jpeg",
    unidade: true
  },





  // ENERGÉTICO ---------------------------------------------------------------





  {
    id: "red-bull-tradicional", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL TRADICIONAL 250ml", descricao: "Bebida energética Red Bull Tradicional, pronta para consumir gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/834c8dee-dcc0-4460-baac-f64a4ae44b77.jpg"
  },
  {
    id: "red-bull-melancia", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL 250ml - MELANCIA", descricao: "Bebida energética Red Bull com sabor de melancia, para consumir gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/ccbcbfea-ea9e-4069-80ff-f5999e03675a.jpg"
  },
  {
    id: "red-bull-tropical", categoria: "energetico", grupo: "Energético",
    nome: "RED BULL 250ml - TROPICAL", descricao: "Bebida energética Red Bull com sabor de tropical, para consumir gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/3c3b0c12-f508-400b-a654-4dc5f46f0a53.jpg"
  },
  {
    id: "vibe-tradicional", categoria: "energetico", grupo: "Energético",
    nome: "ENERGÉTICO VIBE 2L", descricao: "Bebida energética Vibe, pronta para consumir gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/707ea384-92a4-4620-9f88-820b96a21270.jpg"
  },
  {
    id: "vibe-maca", categoria: "energetico", grupo: "Energético",
    nome: "VIBE MAÇÃ VERDE 2L", descricao: "Bebida energética Vibe Maçã Verde com sabor de maçã verde, para consumir gelada.", unidade: true,
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/1c5dfdd4-a20c-493f-9485-6cb810521744.jpeg"
  },

  {
    id: "vibe-morango-pessego-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE MORANGO E PÊSSEGO 2L",
    descricao: "Bebida energética Vibe Morango E Pêssego com sabor de morango e pêssego, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Melancia com sabor de melancia, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Blue Extreme, pronta para consumir gelada.",
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
    descricao: "Bebida energética Vibe Coco E Abacaxi com sabor de coco, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Tropical com sabor de tropical, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Coco + Açaí com sabor de coco + açaí, para consumir gelada.",
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
    descricao: "Bebida energética Baly Melancia com sabor de melancia, para consumir gelada.",
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
    descricao: "Bebida energética Baly Maçã Verde com sabor de maçã verde, para consumir gelada.",
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
    descricao: "Bebida energética Baly Morango E Pêssego com sabor de morango e pêssego, para consumir gelada.",
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
    descricao: "Bebida energética Baly Tropical com sabor de tropical, para consumir gelada.",
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
    descricao: "Bebida energética Baly Citrus com sabor de citrus, para consumir gelada.",
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
    descricao: "Bebida energética Baly Coco E Açaí com sabor de coco e açaí, para consumir gelada.",
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
    descricao: "Bebida energética Monster Tradicional, pronta para consumir gelada.",
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
    descricao: "Bebida energética Monster Mango Loco com sabor de mango loco, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Pink Boost Zero, pronta para consumir gelada.",
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
    descricao: "Bebida energética Vibe White Boost Zero, pronta para consumir gelada.",
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
    descricao: "Bebida energética Vibe Lichia com sabor de lichia, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Açaí E Coco com sabor de açaí, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Tradicional, pronta para consumir gelada.",
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
    descricao: "Bebida energética Vibe Mango Boost Zero, pronta para consumir gelada.",
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
    descricao: "Bebida energética Vibe Melancia com sabor de melancia, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Morango E Pêssego com sabor de morango e pêssego, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Coco E Abacaxi com sabor de coco, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Blue Extreme, pronta para consumir gelada.",
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
    descricao: "Bebida energética Vibe Tropical com sabor de tropical, para consumir gelada.",
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
    descricao: "Bebida energética Vibe Maçã Verde com sabor de maçã verde, para consumir gelada.",
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
    descricao: "Bebida energética Bob Pinga Energético, pronta para consumir gelada.",
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
    descricao: "Bebida energética Red Horse Tropical com sabor de tropical, para consumir gelada.",
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
    descricao: "Bebida energética Red Horse Melancia com sabor de melancia, para consumir gelada.",
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
    descricao: "Bebida energética Red Horse Morango E Pêssego com sabor de morango e pêssego, para consumir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/0b0ecae4-2016-41a1-bd0e-e8addd133a5d.jpeg",
    unidade: true
  },





  // LICOR --------------------------------------------------------------------





  {
    id: "licor-43", categoria: "licor", grupo: "Licor",
    nome: "LICOR 43 CHOCOLATE 700ml", descricao: "Licor 43 Chocolate com sabor de chocolate, para servir puro ou usar no preparo de coquetéis.",
    // O print mostra 150,90 em destaque e 150,00 na descrição. Confirme e ajuste.
    preco: null, precoPix: null, precoCartao: null, imagem: "https://images.getinapp.com.br/cb2d20b6-0ccb-4ab3-9c8d-ca0e358e36e8.jpg"
  },
  {
    id: "ballena-coco", categoria: "licor", grupo: "Licor",
    nome: "BALLENA COCO 750ml", descricao: "Licor Ballena Coco com sabor de coco, para servir puro ou usar no preparo de coquetéis.",
    preco: null, precoCartao: null, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWa2aiGOxsBAlAhggaZxjvxBGOcrShcHX0Siyb39Nh4g&s=10"
  },
  {
    id: "malibu-coco", categoria: "licor", grupo: "Licor",
    nome: "LICOR MALIBU COCO 750ml", descricao: "Licor Malibu Coco com sabor de coco, para servir puro ou usar no preparo de coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/e4518ab3-cb60-4a82-b04a-d61d8664186b.jpg"
  },
  {
    id: "don-luiz", categoria: "licor", grupo: "Licor",
    nome: "LICOR DON LUIZ 750ml", descricao: "Licor Don Luiz, para servir puro, com gelo ou em coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/c554a62e-f1c4-41ab-b55e-213545ba0e9e.jpeg"
  },
  {
    id: "amarula", categoria: "licor", grupo: "Licor",
    nome: "AMARULA CREAM 750ml", descricao: "Licor Amarula Cream, para servir puro, com gelo ou em coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/0582997f-1760-48f9-9767-a9272c395837.jpg"
  },

  {
    id: "bem-casado-banoffee-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "LICOR BEM CASADO BANOFFEE 1L",
    descricao: "Licor Bem Casado Banoffee com sabor de banoffee, para servir puro ou usar no preparo de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/92d3a048-924e-4acd-8185-5c3db72e633b.jpg"
  },
  {
    id: "bem-casado-pistache-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO PISTACHE 1L",
    descricao: "Licor Bem Casado Pistache com sabor de pistache, para servir puro ou usar no preparo de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/1eba5e38-d36d-4dda-9aa6-d461a81a5f4b.jpeg"
  },
  {
    id: "bem-casado-creme-brulee-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO CREME BRULEE 1L",
    descricao: "Licor Bem Casado Creme Brulee com sabor de creme brulee, para servir puro ou usar no preparo de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/daa01d15-63fb-4637-b67e-861823d51288.jpeg"
  },
  {
    id: "bem-casado-capuccino-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO CAPUCCINO 1L",
    descricao: "Licor Bem Casado Capuccino, para servir puro, com gelo ou em coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/45176aa5-d71c-4d7a-bfbb-c2f3d4f7df6f.jpeg"
  },
  {
    id: "bem-casado-doce-de-leite-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO DOCE DE LEITE 1L",
    descricao: "Licor Bem Casado Doce De Leite com sabor de doce de leite, para servir puro ou usar no preparo de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/832cee5e-4c8c-4823-ba66-e6c2384c229b.jpeg"
  },
  {
    id: "bem-casado-maracuja-1l",
    categoria: "licor",
    grupo: "Licor",
    nome: "BEM CASADO MARACUJÁ 1L",
    descricao: "Licor Bem Casado Maracujá com sabor de maracujá, para servir puro ou usar no preparo de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/175d4e9f-6e37-4b99-a249-0b1e7093e0b8.jpeg"
  },
  {
    id: "licor-jagermeister-700ml",
    categoria: "licor",
    grupo: "Licor",
    nome: "LICOR JAGERMEISTER 700ml",
    descricao: "Licor Jagermeister, para servir puro, com gelo ou em coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/8ca9e4b3-7427-4e5b-b139-b9710e490b50.jpeg"
  },
  {
    id: "licor-cointreau-700ml",
    categoria: "licor",
    grupo: "Licor",
    nome: "LICOR COINTREAU 700ml",
    descricao: "Licor Cointreau, para servir puro, com gelo ou em coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/67d756cc-cac6-47e2-bbbc-f44b90430e48.jpeg"
  },





  // APERITIVO ----------------------------------------------------------------





  {
    id: "aperol-750", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "APEROL 750ml", descricao: "Aperitivo Aperol, versátil para servir antes das refeições ou compor coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/816ef521-51ec-46f6-aa11-6bb4845f254c.jpg"
  },
  {
    id: "aperol-3l", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "APEROL 3L", descricao: "Aperitivo Aperol, versátil para servir antes das refeições ou compor coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/932cd28b-c22c-4319-91a2-7e7bf9c9bc60.jpeg"
  },
  {
    id: "campari", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "CAMPARI 998ml", descricao: "Aperitivo Campari, versátil para servir antes das refeições ou compor coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/99689356-4e66-40c0-9012-201193b826c5.jpg"
  },
  {
    id: "saint-remy", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "APERITIVO SAINT REMY 750ml", descricao: "Aperitivo Saint Remy, versátil para servir antes das refeições ou compor coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/61e44b70-355b-459a-907f-d90e6751a97d.jpeg"
  },
  {
    id: "lillet-blanc", categoria: "aperitivo", grupo: "Aperitivo",
    nome: "LILLET BLANC 750ml", descricao: "Aperitivo Lillet Blanc, versátil para servir antes das refeições ou compor coquetéis.",
    preco: null, precoCartao: null, imagem: "https://images.getinapp.com.br/354bd421-421a-45fe-969e-5a98ecc7c9ed.jpeg"
  },

  {
    id: "aperitivo-cynar-900ml",
    categoria: "aperitivo",
    grupo: "Aperitivo",
    nome: "APERITIVO CYNAR 900ml",
    descricao: "Aperitivo Cynar, versátil para servir antes das refeições ou compor coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/5ba01e74-5f56-437b-a653-054f013fecf4.jpeg",
  },
  {
    id: "natu-nobilis-1l",
    categoria: "aperitivo",
    grupo: "Aperitivo",
    nome: "NATU NOBILIS 1L",
    descricao: "Aperitivo Natu Nobilis, versátil para servir antes das refeições ou compor coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b1f15297-4d30-45ed-bc87-d4b286cfdb71.jpeg",
  },
  
  // DRINKS PRONTOS ------------------------------------------------------------------
  
  {
    id: "mansao-maromba-whisky-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY PRONTO 1L",
    descricao: "Bebida mista pronta Mansão Maromba Whisky Pronto, para servir gelada sem preparo adicional.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/3e4d1fbf-de86-423f-87c2-196848b87958.jpeg"
  },
  {
    id: "mansao-maromba-whisky-maca-verde-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY MAÇÃ VERDE PRONTO 1L",
    descricao: "Bebida mista pronta Mansão Maromba Whisky Maçã Verde Pronto, na versão maçã verde; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b71b7df2-284d-40f7-94dc-ac1acab6e27b.jpeg"
  },
  {
    id: "mansao-maromba-whisky-tigrinho-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY TIGRINHO PRONTO 1L",
    descricao: "Bebida mista pronta Mansão Maromba Whisky Tigrinho Pronto, para servir gelada sem preparo adicional.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/cf429da2-e075-4688-bce1-fdb7154be36d.jpeg"
  },
  {
    id: "mansao-maromba-gin-combo-tropical-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA GIN COMBO TROPICAL PRONTO 1L",
    descricao: "Bebida mista pronta Mansão Maromba Gin Combo Tropical Pronto, na versão tropical; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/72a53d6b-8c76-431c-a9e5-8faa3f4fc4eb.jpeg"
  },
  {
    id: "mansao-maromba-gin-melancia-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA GIN MELANCIA PRONTO 1L",
    descricao: "Bebida mista pronta Mansão Maromba Gin Melancia Pronto, na versão melancia; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/e62cd41e-d521-4283-b6fe-6b01e7eca9db.jpeg"
  },
  {
    id: "drink-invictus-tropical-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR TROPICAL 1L",
    descricao: "Bebida mista pronta Drink Invictus Sabor Do Sabor Tropical, na versão tropical; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/6ff6265a-b3f4-42d8-a0f8-9f5d0b6082b0.jpeg"
  },
  {
    id: "drink-invictus-maca-verde-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR MAÇÃ VERDE 1L",
    descricao: "Bebida mista pronta Drink Invictus Sabor Do Sabor Maçã Verde, na versão maçã verde; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/2baded9c-3c7d-4aec-9e1b-3fe261c71956.jpeg"
  },
  {
    id: "drink-invictus-melancia-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR MELANCIA 1L",
    descricao: "Bebida mista pronta Drink Invictus Sabor Do Sabor Melancia, na versão melancia; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/87f7869d-a309-4439-9bd6-cdf10dc15fde.jpeg"
  },
  {
    id: "drink-invictus-whisky-1l",
    categoria: "drinks-prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR WHISKY 1L",
    descricao: "Bebida mista pronta Drink Invictus Sabor Do Sabor Whisky, para servir gelada sem preparo adicional.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f7b38697-2b59-4f7e-b0e8-e05059a72f40.jpeg"
  },


  // CHAMPANHE ------------------------------------------------------------------
  
  {
    id: "chandon-passion-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "CHANDON 750ml - PASSION",
    descricao: "Espumante Chandon na versão passion, indicado para servir gelado em celebrações e brindes.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/d189fe85-6433-4fd6-9546-e8b89404b84d.jpg"
  },
  {
    id: "chandon-brut-rose-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "CHANDON 750ml - BRUT ROSE",
    descricao: "Espumante Chandon na versão brut, indicado para servir gelado em celebrações e brindes.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/73d361f7-73cc-4c1f-a11a-eb5d11f9b3f2.jpg"
  },
  {
    id: "dom-perignon-vintage-brut-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "CHAMPAGNE DOM PERIGNON VINTAGE BRUT 750ml",
    descricao: "Espumante Dom Perignon Vintage Brut na versão brut, indicado para servir gelado em celebrações e brindes.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/887f63eb-5ffe-447f-9665-1acb9e79204d.jpg"
  },
  {
    id: "casa-perini-brut-branco-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "ESPUMANTE CASA PERINI BRUT BRANCO 750ml",
    descricao: "Espumante Casa Perini Brut Branco na versão brut, indicado para servir gelado em celebrações e brindes.",
    preco: null,
    precoCartao: null,
    imagem: "  https://images.getinapp.com.br/91d4b4e3-fad1-4b07-9a5e-1151f034db35.jpeg"
  },
  {
    id: "casa-perini-moscatel-branco-750ml",
    categoria: "champanhe",
    grupo: "Champanhe",
    nome: "ESPUMANTE CASA PERINI MOSCATEL BRANCO 750ml",
    descricao: "Espumante Casa Perini Moscatel Branco na versão moscatel, indicado para servir gelado em celebrações e brindes.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/dce0006b-4ddd-44f3-be91-1bf7f0509d7d.jpeg"
  },


  // VINHO ------------------------------------------------------------------
  
  {
    id: "pergola-suave-1l",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "PERGOLA SUAVE 1L",
    descricao: "Vinho Pergola Suave, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/18eca459-ddf3-49cb-ace8-1240452ca5e9.jpg"
  },
  {
    id: "catuaba-900ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "CATUABA 900ml",
    descricao: "Bebida de catuaba Catuaba, para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/e58de7ff-7281-429c-93fc-6dc31a7d699a.jpg"
  },
  {
    id: "catuaba-acai-900ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "CATUABA AÇAÍ 900ml",
    descricao: "Bebida de catuaba Catuaba Açaí na versão açaí, para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uE6hYTk84eH9ywyOIKbe8JnRNSjL23UAMlRheAWAig&s=10"
  },
  {
    id: "sangue-de-boi-suave-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO SANGUE DE BOI SUAVE 750ml",
    descricao: "Vinho Sangue De Boi Suave, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIqEfRjWy4zpzMrGf1VLSe6hm18_-m08Fuz6vl_ioAg&s"
  },
  {
    id: "reservado-sweet-white-suave-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO SWEET WHITE SUAVE 750ml",
    descricao: "Vinho Reservado Sweet White Suave, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/d16497ce-8116-466b-8c44-dffebcbe3f9d.jpg"
  },
  {
    id: "concha-y-toro-merlot-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO CONCHA Y TORO MERLOT 750ml",
    descricao: "Vinho Reservado Concha Y Toro Merlot na versão merlot, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/52c735ca-d1d9-4655-b7bb-c26ed25b8e65.jpg"
  },
  {
    id: "concha-y-toro-cabernet-sauvignon-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO CONCHA Y TORO CABERNET SAUVIGNON 750ml",
    descricao: "Vinho Reservado Concha Y Toro Cabernet Sauvignon na versão cabernet sauvignon, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/34fa3493-fec0-410c-879d-4125dbeccc52.jpeg"
  },
  {
    id: "reservado-spritzer-moscato-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO SPRITZER MOSCATO 750ml",
    descricao: "Vinho Reservado Spritzer Moscato, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/54f91585-2226-4096-a3b8-9c8824ef7a4c.jpg"
  },
  {
    id: "reservado-sweet-rose-suave-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO SWEET ROSE SUAVE 750ml",
    descricao: "Vinho Reservado Sweet Rose Suave, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/692a2623-3ba2-40de-a475-2ea9977afe1d.jpg"
  },
  {
    id: "reservado-chardonnay-pedro-jimenez-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO CHARDONNAY PEDRO JIMENEZ 750ml",
    descricao: "Vinho Reservado Chardonnay Pedro Jimenez na versão chardonnay, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/9285b4a5-f13f-4435-8148-37b4cd4bc85e.jpeg"
  },
  {
    id: "reservado-sauvignon-blanc-pedro-jimenez-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO RESERVADO SAUVIGNON BLANC PEDRO JIMENEZ 750ml",
    descricao: "Vinho Reservado Sauvignon Blanc Pedro Jimenez na versão sauvignon blanc, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/0fdb840d-6405-4d9d-b459-4d84ad1de1f8.jpg"
  },
  {
    id: "bodega-zaeli-reservado-pinot-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VINHO BODEGA ZAELI RESERVADO PINOT 750ml",
    descricao: "Vinho Bodega Zaeli Reservado Pinot na versão pinot, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/4c63f787-9850-4969-a184-3ccc1e3f6d3a.jpeg"
  },
  {
    id: "jurupinga-975ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "JURUPINGA 975ml",
    descricao: "Vinho Jurupinga, para acompanhar refeições ou servir em ocasiões especiais.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b4b5d6e2-ab5d-45f9-9c8e-e8c62a1e4261.jpeg"
  },
  {
    id: "vermouth-martini-bianco-750ml",
    categoria: "vinho",
    grupo: "Vinho",
    nome: "VERMOUTH MARTINI BIANCO 750ml",
    descricao: "Vermute Vermouth Martini Bianco para servir como aperitivo ou usar em coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/c187461a-61c8-41e9-af05-fe11b7f98ecc.jpeg"
  },





  // BEATS / ICE ------------------------------------------------------------------
  




  {
    id: "skol-beats-long-neck-269ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SKOL BEATS - LONG NECK 269ml",
    descricao: "Bebida mista Skol Beats, pronta para beber; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/83bccf60-a562-4ef4-a94d-b1be46d82de9.jpg"
  },
  {
    id: "skol-beats-verde-long-neck-269ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SKOL BEATS VERDE LONG NECK 269ml",
    descricao: "Bebida mista Skol Beats Verde, pronta para beber; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/50808951-b432-4181-8a0c-89161d86297f.jpeg"
  },
  {
    id: "beats-long-neck-gt-269ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "BEATS LONG NECK GT 269ml",
    descricao: "Bebida mista Beats, pronta para beber; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/08487bfb-7902-4ba9-9892-d0fe2dff6f0c.jpg"
  },
  {
    id: "smirnoff-ice-frutas-tropicais-275ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SMIRNOFF ICE FRUTAS TROPICAIS 275ML",
    descricao: "Bebida mista Smirnoff Ice Frutas Tropicais, pronta para beber; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/91417caf-2489-455d-9295-9ce6da5ba25b.jpeg"
  },
  {
    id: "smirnoff-ice-275ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SMIRNOFF ICE 275ml",
    descricao: "Bebida mista Smirnoff Ice, pronta para beber; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/89c9cdc9-c1b9-4de7-afce-a1ca31411965.jpeg"
  },
  {
    id: "smirnoff-ice-raspberry-275ml",
    categoria: "beats-ice",
    grupo: "Beats / Ice",
    nome: "SMIRNOFF ICE RASPBERRY 275ml",
    descricao: "Bebida mista Smirnoff Ice Raspberry, pronta para beber; sirva gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/3db54e2a-6426-46b3-ba31-039357e594fa.jpeg"
  },





  // CACHAÇA ------------------------------------------------------------------
  




  {
    id: "dreher-900ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "DREHER 900ml",
    descricao: "Conhaque Dreher para servir puro, com gelo ou usar no preparo de coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/fb2d2e35-9caf-431e-91e5-0b7e44736d6d.jpeg"
  },
  {
    id: "sao-joao-da-barra-900ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "SÃO JOÃO DA BARRA 900ml",
    descricao: "Cachaça São João Da Barra, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b0b932c9-192d-4f92-b2d1-f7cbf65151b9.jpeg"
  },
  {
    id: "kit-sagatiba-rabo-de-galo-copo",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "KIT SAGATIBA RABO DE GALO + COPO",
    descricao: "Cachaça Kit Sagatiba Rabo De Galo + Copo, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/170bdf36-614d-4634-8086-bb9d73ca4dee.jpeg"
  },
  {
    id: "ypioca-ouro-965ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "YPIOCA OURO 965ml",
    descricao: "Cachaça Ypioca Ouro, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/683876ee-7414-4568-a8e4-992bd117cf48.jpeg"
  },
  {
    id: "ypioca-prata-965ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "YPIOCA PRATA 965ml",
    descricao: "Cachaça Ypioca Prata, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDACA8tjSwol9-4h3mot-bkHxp1jpZe0WAH-WJ5adpg&s=10 "
  },
  {
    id: "zora-genebra-dubar-960ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "ZORA GENEBRA DUBAR 960ml",
    descricao: "Cachaça Zora Genebra Dubar, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/cecbcbbe-234e-4bf7-a8e1-b5d4ff46779c.jpeg"
  },
  {
    id: "cachaca-asas-branca-jequitiba-980ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "CACHAÇA ASAS BRANCA JEQUITIBA 980ml",
    descricao: "Cachaça Asas Branca Jequitiba, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/32ada2b1-9e7c-4d1f-8748-6a4c8e9b76ae.jpeg "
  },
  {
    id: "cachaca-asas-branca-balsamo-980ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "CACHAÇA ASAS BRANCA BÁLSAMO 980ml",
    descricao: "Cachaça Asas Branca Bálsamo, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/a374ac5c-7117-4ebe-ba55-c8e24c3f401d.jpeg "
  },
  {
    id: "pitu-lata-350ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "PITU LATA 350ml",
    descricao: "Cachaça Pitu, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/65d7a2c8-5475-4015-936c-8c4174c11f3c.jpeg "
  },
  {
    id: "bob-pinga-975ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "BOB PINGA 975ml",
    descricao: "Cachaça Bob Pinga, para apreciar pura ou usar em drinks brasileiros.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/e42e51dd-3c18-4751-853d-9a31e33f0710.jpeg "
  },
  {
    id: "jurubeba-leao-do-norte-600ml",
    categoria: "cachaca",
    grupo: "Cachaça",
    nome: "JURUBEBA LEÃO DO NORTE 600ml",
    descricao: "Bebida à base de jurubeba, tradicionalmente servida como aperitivo.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/fe5e904c-297c-497a-b2af-49080cd4a1b0.jpeg "
  },





  // RUM ------------------------------------------------------------------
  




  {
    id: "rum-montilla-carta-ouro",
    categoria: "rum",
    grupo: "Rum",
    nome: "RUM MONTILLA CARTA OURO",
    descricao: "Rum Montilla Carta Ouro, indicado para servir puro, com gelo ou usar em coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcfvxGyoeRVnsTeFU5btM-a65em6ZEl7U8cAWieaGJQ&s=10 "
  },
  {
    id: "rum-montilla-carta-branca",
    categoria: "rum",
    grupo: "Rum",
    nome: "RUM MONTILLA CARTA BRANCA",
    descricao: "Rum Montilla Carta Branca, leve e versátil para compor coquetéis como mojito e Cuba Libre.",
    preco: null,
    precoCartao: null,
    imagem: " https://casalisboa.com.br/wp-content/uploads/2020/05/Rum-Montilla-Carta-Branca-1L-616x1024.jpg "
  },
  {
    id: "rum-montilla-carta-cristal",
    categoria: "rum",
    grupo: "Rum",
    nome: "RUM MONTILLA CARTA CRISTAL",
    descricao: "Rum Montilla Carta Cristal, leve e versátil para compor coquetéis como mojito e Cuba Libre.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/e83ae785-0f5e-421e-80bf-b75ca84adbcc.jpeg "
  },
  {
    id: "busca-brisa-1l",
    categoria: "rum",
    grupo: "Rum",
    nome: "BUSCA BRISA 1L",
    descricao: "Rum Busca Brisa, versátil para servir puro, com gelo ou usar em coquetéis.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/c38f4917-3db1-4fe5-8fd8-92bafcd249e9.jpeg "
  },





  // ÁGUA MINERAL ------------------------------------------------------------------
  




  {
    id: "agua-crystal-gold-sem-gas-510ml",
    categoria: "agua-mineral",
    grupo: "Água mineral",
    nome: "ÁGUA CRYSTAL GOLD S/GÁS 510ml",
    descricao: "Água mineral Crystal Gold S/Gás sem gás para hidratação e para acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/fdcaf7ef-3c2e-4c99-9de6-2f8f8dba3b3f.jpeg "
  },
  {
    id: "agua-com-gas-crystal-510ml",
    categoria: "agua-mineral",
    grupo: "Água mineral",
    nome: "ÁGUA COM GÁS CRYSTAL 510ml",
    descricao: "Água mineral Com Gás Crystal com gás, refrescante para acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1krKwB_DXTvS-lEfXmWCGD3oLCNsbDpFJRsnmB_eMw&s=10 "
  },
  {
    id: "agua-crystal-gold-sem-gas-1-5l",
    categoria: "agua-mineral",
    grupo: "Água mineral",
    nome: "ÁGUA CRYSTAL GOLD S/GÁS 1,5L",
    descricao: "Água mineral Crystal Gold S/Gás sem gás para hidratação e para acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: " https://images.getinapp.com.br/9f5dca9a-7c57-44b6-9c22-cf26137ff423.jpeg "
  },





  // GELOS SABORES ------------------------------------------------------------------
  




  {
    id: "gelo-rms-melancia-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MELANCIA 200ml",
    descricao: "Gelo saborizado Rms Melancia com melancia, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a684014e-cd20-429e-a970-07ded9a23818.jpeg"
  },
  {
    id: "gelo-rms-maracuja-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MARACUJÁ 200ml",
    descricao: "Gelo saborizado Rms Maracujá com maracujá, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/6ba7192b-2575-4851-97f3-834dcf333142.jpeg"
  },
  {
    id: "gelo-rms-maca-verde-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MAÇÃ VERDE 200ml",
    descricao: "Gelo saborizado Rms Maçã Verde com maçã verde, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/e1e52fc3-f49e-4ab3-8ab6-30f465ed6716.jpeg"
  },
  {
    id: "gelo-rms-blueberry-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS BLUEBERRY 200ml",
    descricao: "Gelo saborizado Rms Blueberry com blueberry, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "imagens/gelo/gelo-rms-blueberry-200ml.png"
  },
  {
    id: "gelo-rms-coco-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS COCO 200ml",
    descricao: "Gelo saborizado Rms Coco com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a55b9a77-c561-4582-be53-3e51ef9f7197.jpeg"
  },
  {
    id: "gelo-rms-morango-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MORANGO 200ml",
    descricao: "Gelo saborizado Rms Morango com morango, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/c0274bb8-6b8f-4ae0-a6c2-830a5bc2c5b0.jpeg"
  },
  {
    id: "gelo-rms-morango-pessego-200ml",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO RMS MORANGO COM PÊSSEGO 200ml",
    descricao: "Gelo saborizado Rms Morango Com Pêssego com morango com pêssego, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/1c10f847-b378-4df5-b757-c6134e62c0be.jpeg"
  },
  {
    id: "agua-coco-coko-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "Água de coco De Coco Do Coko com sabor de coco, em porções individuais para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/147ec416-9fdd-46c7-808e-6bc6c6f37448.jpeg"
  },
  {
    id: "agua-coco-coko-morango-200ml-fardo-28",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO MORANGO 200ml FARDO C/28 (DESCONGELADO)",
    descricao: "Água de coco De Coco Do Coko Morango com sabor de coco, em porções individuais para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/2c4b73e7-7b45-44ef-8b97-b134457ae6a3.jpeg"
  },
  {
    id: "agua-coco-coko-melancia-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO MELANCIA 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "Água de coco De Coco Do Coko Melancia com sabor de coco, em porções individuais para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/c1318992-160e-4a6d-8d77-4087619c5c1f.jpeg"
  },
  {
    id: "agua-coco-coko-maracuja-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO MARACUJÁ 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "Água de coco De Coco Do Coko Maracujá com sabor de coco, em porções individuais para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a6c64212-b86b-43d1-bee7-a2f21bea7c24.jpeg"
  },
  {
    id: "agua-coco-coko-maca-verde-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO MAÇÃ VERDE 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "Água de coco De Coco Do Coko Maçã Verde com sabor de coco, em porções individuais para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dfrYW2zShH-oTkR_PIwPOYZlBvY97rDpEkJbEODXhg&s"
  },
  {
    id: "agua-coco-coko-pitaya-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO PITAYA 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "Água de coco De Coco Do Coko Pitaya com sabor de coco, em porções individuais para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/cb254218-3f66-4f13-967c-1aee2b0149dd.jpeg"
  },
  {
    id: "agua-coco-coko-pessego-200ml-fardo-27",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "ÁGUA DE COCO DO COKO PÊSSEGO 200ml FARDO C/27 (DESCONGELADO)",
    descricao: "Água de coco De Coco Do Coko Pêssego com sabor de coco, em porções individuais para servir gelada.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f40fdcd2-8a84-4247-8fc0-c09ff07ef1b5.jpeg"
  },
  {
    id: "gelo-coko-uva-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO UVA CONGELADO",
    descricao: "Gelo saborizado Coko Uva Congelado com uva, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/39764302-d57d-48f5-97cc-4739e8b4326f.jpeg"
  },
  {
    id: "gelo-coko-royale-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO ROYALE CONGELADO",
    descricao: "Gelo saborizado Coko Royale Congelado para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/170450ea-8ee8-45f2-a9b5-6dd6293ab330.jpeg"
  },
  {
    id: "gelo-coko-maca-verde-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO MAÇÃ VERDE CONGELADO",
    descricao: "Gelo saborizado Coko Maçã Verde Congelado com maçã verde, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/102bab9f-ff91-4cba-8d65-a5606b61558c.jpeg"
  },
  {
    id: "gelo-coko-laranja-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO LARANJA CONGELADO",
    descricao: "Gelo saborizado Coko Laranja Congelado com laranja, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/41294167-a09c-4006-91c8-010dafd281d8.jpeg"
  },
  {
    id: "gelo-coko-pessego-congelado",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COKO PÊSSEGO CONGELADO",
    descricao: "Gelo saborizado Coko Pêssego Congelado com pêssego, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/977ff4d0-aa06-4de1-80f2-3779b6fd3d40.jpeg"
  },
  {
    id: "gelo-coco-leve-skol-beats-gt",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - SKOL BEATS GT CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Skol Beats Gt Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b39a8fca-0cb7-419d-b9f1-5e5c04ccea53.jpeg"
  },
  {
    id: "gelo-coco-leve-skol-beats-red-mix",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - SKOL BEATS RED MIX CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Skol Beats Red Mix Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAOKDGMaYc2Q1AmA0pZTgWarI_Q53jRj-S4PoE3pSLw&s=10"
  },
  {
    id: "gelo-coco-leve-skol-beats-green-mix",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - SKOL BEATS GREEN MIX CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Skol Beats Green Mix Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/d2be534a-c3e3-415b-9e22-0df0c750a2ed.jpeg"
  },
  {
    id: "gelo-coco-leve-approve-amora",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - APPROVE AMORA CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Approve Amora Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/6129344a-aae4-4802-be2e-a65085dcac1b.jpeg"
  },
  {
    id: "gelo-coco-leve-baly",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - BALY CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Baly Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVC6lFdpeY3gK1D22dIsiw0qtAktenc04hhSTmPeOjw&s=10 "
  },
  {
    id: "gelo-coco-leve-cavalo-branco",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - CAVALO BRANCO CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Cavalo Branco Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/a55ee9bd-10d6-453c-b9e8-71762bcf0cb7.jpeg"
  },
  {
    id: "gelo-coco-leve-xeque-mate",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - XEQUE MATE CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Xeque Mate Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/f272d3f7-2b8c-4f64-b184-efc190380484.jpeg"
  },
  {
    id: "gelo-coco-leve-morango",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - MORANGO CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Morango Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/1a4adf65-6afb-4146-8246-61877651ed78.jpeg"
  },
  {
    id: "gelo-coco-leve-melancia",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - MELANCIA CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Melancia Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/d3e9e2df-726c-4dd0-a2b5-228912750d66.jpeg"
  },
  {
    id: "gelo-coco-leve-maracuja",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO COCO LEVE - MARACUJÁ CONGELADO",
    descricao: "Gelo saborizado Coco Leve - Maracujá Congelado com coco, para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/03a52b10-6cbd-40da-a8d4-4c3ccb23f0cd.jpeg"
  },
  {
    id: "gelo-ice-boss",
    categoria: "gelos-sabores",
    grupo: "Gelos sabores",
    nome: "GELO ICE BOSS",
    descricao: "Gelo saborizado Ice Boss para resfriar e complementar drinks.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVGBbBkB3V-8eNxJ5-OiMvux3BAODupASs3LQzSCEKw&s=10"
  },





  // REFRIGERANTES ------------------------------------------------------------------
  




  {
    id: "coca-cola-2l",
    categoria: "refrigerantes",
    grupo: "Coca-Cola",
    nome: "COCA COLA 2L",
    descricao: "Refrigerante Coca Cola para servir gelado e acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b640a9d7-78a1-49c4-90b1-3d94d12687ad.jpeg"
  },
  {
    id: "coca-cola-zero-2l",
    categoria: "refrigerantes",
    grupo: "Coca-Cola",
    nome: "COCA COLA ZERO AÇÚCAR 2L",
    descricao: "Refrigerante Coca Cola Zero Açúcar para servir gelado e acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/604bc84b-d094-4a7d-91cf-624a73dabb19.jpeg"
  },
  {
    id: "coca-cola-200ml",
    categoria: "refrigerantes",
    grupo: "Coca-Cola",
    nome: "COCA COLA 200ml",
    descricao: "Refrigerante Coca Cola para servir gelado e acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/b98fff9e-ef2b-4583-b04d-0b8afe4fa179.jpeg"
  },
  {
    id: "guarana-antartica-2l",
    categoria: "refrigerantes",
    grupo: "Guaraná Antártica",
    nome: "GUARANÁ ANTARTICA 2L",
    descricao: "Refrigerante Guaraná Antartica na versão guaraná, refrescante para servir gelado.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/1849c373-3840-4a49-95a3-7e88fa479d6c.jpeg"
  },
  {
    id: "fanta-uva-2l",
    categoria: "refrigerantes",
    grupo: "Fanta",
    nome: "FANTA UVA 2L",
    descricao: "Refrigerante Fanta Uva na versão uva, refrescante para servir gelado.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuJzKMJa30BeifaMQbWQtcXvQJCTZE5K2czo66PWBzg&s=10"
  },
  {
    id: "dolly-limao-2l",
    categoria: "refrigerantes",
    grupo: "Dolly",
    nome: "DOLLY LIMÃO 2L",
    descricao: "Refrigerante Dolly Limão na versão limão, refrescante para servir gelado.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aBVlyfOXRp-UKMgIthnuzbbY16Hut_OYONBoFTCxLQ&s=10"
  },
  {
    id: "dolly-guarana-2l",
    categoria: "refrigerantes",
    grupo: "Dolly",
    nome: "DOLLY GUARANA 2L",
    descricao: "Refrigerante Dolly Guarana para servir gelado e acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/4af4b843-f096-4746-b48f-c4e469555ef3.jpeg"
  },
  {
    id: "tuttibaina-2l",
    categoria: "refrigerantes",
    grupo: "Tubaina",
    nome: "TUTTIBAINA 2L",
    descricao: "Refrigerante Tuttibaina para servir gelado e acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/dc083068-0297-4804-a4fa-c443e0fe44d7.jpeg"
  },
  {
    id: "tuttibaina-zero-2l",
    categoria: "refrigerantes",
    grupo: "Tubaina",
    nome: "TUTTIBAINA ZERO 2L",
    descricao: "Refrigerante Tuttibaina Zero para servir gelado e acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/c329711b-da62-4853-9074-5c277e27b1b4.jpeg"
  },
  {
    id: "popys-cola-2l",
    categoria: "refrigerantes",
    grupo: "Pop's",
    nome: "POPYS COLA 2L",
    descricao: "Refrigerante Popys Cola para servir gelado e acompanhar refeições.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/42b5304a-a5cf-4cc4-91b7-b024833ce96a.jpeg"
  },
  {
    id: "popys-laranja-2l",
    categoria: "refrigerantes",
    grupo: "Pop's",
    nome: "POPYS LARANJA 2L",
    descricao: "Refrigerante Popys Laranja na versão laranja, refrescante para servir gelado.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/bed1ddd9-ff03-4265-908e-273216cda6db.jpeg"
  },
  {
    id: "popys-limao-2l",
    categoria: "refrigerantes",
    grupo: "Pop's",
    nome: "POPYS LIMÃO 2L",
    descricao: "Refrigerante Popys Limão na versão limão, refrescante para servir gelado.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/87293708-6c21-46fa-889c-8c1634ac21c8.jpeg"
  },
  {
    id: "popys-guarana-2l",
    categoria: "refrigerantes",
    grupo: "Pop's",
    nome: "POPYS GUARANÁ 2L",
    descricao: "Refrigerante Popys Guaraná na versão guaraná, refrescante para servir gelado.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/740e3898-c093-405c-9987-f1406b1ef629.jpeg"
  },





  // SUCOS ------------------------------------------------------------------





  {
    id: "suco-del-valle-maracuja-290ml",
    categoria: "sucos",
    grupo: "Sucos",
    nome: "SUCO DEL VALLE MARACUJÁ 290ml",
    descricao: "Suco Del Valle Maracujá sabor maracujá em embalagem individual, ideal para consumir gelado.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/c141359d-1a9f-4f16-b0de-67d3e51e5ff0.jpeg"
  },
  {
    id: "suco-del-valle-uva-290ml",
    categoria: "sucos",
    grupo: "Sucos",
    nome: "SUCO DEL VALLE UVA 290ml",
    descricao: "Suco Del Valle Uva sabor uva em embalagem individual, ideal para consumir gelado.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbp-aFr5thNEMY9z8ksn_GgK-C8F0aO29zPfk6h3C0g&s=10"
  },





  // CHOCOLATES / DOCES ------------------------------------------------------------------
  




  {
    id: "trento-avela-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO AVELÃ CAIXA C/16un",
    descricao: "Chocolate Trento Trento Avelã sabor avelã, em caixa para compartilhar.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/70ad36d8-fccb-4aa8-bc52-ce2c5bf36dd4.jpeg"
  },
  {
    id: "trento-cheesecake-morango-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO CHEESCAKE MORANGO CAIXA C/16un",
    descricao: "Chocolate Trento Trento Cheescake Morango sabor morango, em caixa para compartilhar.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/cb656e1a-eace-4fb3-aca0-c42d503dedef.jpeg"
  },
  {
    id: "trento-duo-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO DUO CAIXA C/16un",
    descricao: "Chocolate Trento Trento Duo em caixa para compartilhar.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/98e94dbc-f2de-4490-b493-4db29fbd0ae3.jpeg"
  },
  {
    id: "trento-morango-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO MORANGO CAIXA C/16un",
    descricao: "Chocolate Trento Trento Morango sabor morango, em caixa para compartilhar.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/c76047aa-9148-4882-877f-8d778c134eb4.jpeg"
  },
  {
    id: "trento-chocolate-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO CHOCOLATE CAIXA C/16un",
    descricao: "Chocolate Trento Trento Chocolate sabor chocolate, em caixa para compartilhar.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/78a04790-ff7e-41c8-a100-d58048548805.jpeg"
  },
  {
    id: "trento-torta-limao-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO TORTA DE LIMÃO CAIXA C/16un",
    descricao: "Chocolate Trento Trento Torta De Limão sabor torta de limão, em caixa para compartilhar.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/61a27f10-2f3e-4371-8a05-5afaef76aeae.jpeg"
  },
  {
    id: "trento-torta-pistache-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO TORTA DE PISTACHE CAIXA C/16un",
    descricao: "Chocolate Trento Trento Torta De Pistache sabor pistache, em caixa para compartilhar.",
    preco: null,
    precoCartao: null,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSal_0etDTPswimtDvRR8J8ETX9n4g62I2nEcloKNmFOQ&s=10"
  },
  {
    id: "trento-trufa-caixa-16un",
    categoria: "doces",
    grupo: "Doces",
    nome: "TRENTO TRUFA CAIXA C/16un",
    descricao: "Chocolate Trento Trento Trufa sabor trufa, em caixa para compartilhar.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/43bd5f70-98da-4b64-8e31-031c7d86e562.jpeg"
  },

  // DESCARTÁVEIS ------------------------------------------------------------------
  
  {
    id: "copo-770ml-orleplast",
    categoria: "descartaveis",
    grupo: "Descartáveis",
    nome: "COPO 770ML ORLEPLAST",
    descricao: "Copo descartável  para servir bebidas, prático para festas e eventos.",
    preco: null,
    precoCartao: null,
    imagem: "https://images.getinapp.com.br/07e0550f-a768-4182-b99f-96668a3397ad.jpeg"
  },



  
/* SEM IMAGEM */

/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVGBbBkB3V-8eNxJ5-OiMvux3BAODupASs3LQzSCEKw&s=10 */

  

];
