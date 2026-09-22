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
    id: "beefeater-tradicional", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 750ml - TRADICIONAL", descricao: "BEEFEATER 750ml",
    preco: 64.99, precoCartao: 98.99, imagem: "imagens/gin/beefeater-tradicional.jpeg"
  },
  {
    id: "beefeater-pink", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 700ml - PINK", descricao: "BEEFEATER PINK 700ml",
    preco: 77.99, precoCartao: 98.99, imagem: "imagens/gin/beefeater-pink.jpeg"
  },
  {
    id: "beefeater-blackberry", categoria: "gin", grupo: "Gin",
    nome: "BEEFEATER 700ml - BLACKBERRY", descricao: "BEEFEATER 700ml - BLACKBERRY",
    preco: 129.99, precoCartao: 134.99, imagem: "imagens/gin/beefeater-blackberry.jpeg"
  },
  {
    id: "bombay-sapphire", categoria: "gin", grupo: "Gin",
    nome: "BOMBAY SAPPHIRE 750ml", descricao: "BOMBAY SAPPHIRE 750ml",
    preco: 89.99, precoCartao: 99.90, imagem: "imagens/gin/bombay-sapphire.jpeg"
  },
  {
    id: "tanqueray-tradicional", categoria: "gin", grupo: "Gin",
    nome: "TANQUERAY TRADICIONAL 750ml", descricao: "TANQUERAY TRADICIONAL 750ml",
    preco: 107.99, precoCartao: 129.90, imagem: "imagens/gin/tanqueray-tradicional.jpeg"
  },
  
  {
    id: "tanqueray-royale-700ml",
    categoria: "gin",
    grupo: "Gin",
    nome: "TANQUERAY ROYALE 700ml",
    descricao: "TANQUERAY ROYALE 700ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },

  {
    id: "tanqueray-bossa-nova-700ml",
    categoria: "gin",
    grupo: "Gin",
    nome: "TANQUERAY BOSSA NOVA 700ml",
    descricao: "TANQUERAY BOSSA NOVA 700ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  
  {
  id: "tanqueray-sevilla-700ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "TANQUERAY SEVILLA 700ml",
  descricao: "TANQUERAY SEVILLA 700ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "mini-tanqueray-tradicional-375ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "MINI TANQUERAY TRADICIONAL 375ml",
  descricao: "MINI TANQUERAY TRADICIONAL 375ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gordons-750ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GORDONS 750ml",
  descricao: "GORDONS 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gordons-pink-700ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GORDONS PINK 700ml",
  descricao: "GORDONS PINK 700ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-rocks-prata-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS PRATA 1L",
  descricao: "GIN ROCKS PRATA 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-rocks-melancia-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MELANCIA 1L",
  descricao: "GIN ROCKS MELANCIA 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-rocks-morango-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MORANGO 1L",
  descricao: "GIN ROCKS MORANGO 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-rocks-sunset-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS SUNSET 1L",
  descricao: "GIN ROCKS SUNSET 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-rocks-maca-verde-1l",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ROCKS MAÇÃ VERDE 1L",
  descricao: "GIN ROCKS MAÇÃ VERDE 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-invictus-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MORANGO",
  descricao: "GIN INVICTUS MORANGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-invictus-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MELANCIA",
  descricao: "GIN INVICTUS MELANCIA 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-invictus-abacaxi-hortela-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - ABACAXI COM HORTELÃ",
  descricao: "GIN INVICTUS ABACAXI COM HORTELÃ 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-invictus-morango-pessego-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INVICTUS 900ml - MORANGO COM PÊSSEGO",
  descricao: "GIN INVICTUS MORANGO COM PÊSSEGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MELANCIA 900ml",
  descricao: "GIN ETERNITY MELANCIA 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-tropical-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY TROPICAL 900ml",
  descricao: "GIN ETERNITY TROPICAL 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-baunilha-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY BAUNILHA 900ml",
  descricao: "GIN ETERNITY BAUNILHA 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-morango-pessego-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MORANGO E PÊSSEGO 900ml",
  descricao: "GIN ETERNITY MORANGO E PÊSSEGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-royale-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY ROYALE 900ml",
  descricao: "GIN ETERNITY ROYALE 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY MORANGO 900ml",
  descricao: "GIN ETERNITY MORANGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-abacaxi-hortela-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY ABACAXI C/ HORTELÃ 900ml",
  descricao: "GIN ETERNITY ABACAXI C/ HORTELÃ 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-pistache-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY PISTACHE 900ml",
  descricao: "GIN ETERNITY PISTACHE 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-eternity-pessego-framboesa-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN ETERNITY PÊSSEGO E FRAMBOESA 900ml",
  descricao: "GIN ETERNITY PÊSSEGO E FRAMBOESA 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-rms-morango-pessego-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS MORANGO E PÊSSEGO 950ml",
  descricao: "GIN RMS MORANGO E PÊSSEGO 950ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-rms-abacaxi-hortela-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS ABACAXI COM HORTELÃ 950ml",
  descricao: "GIN RMS ABACAXI COM HORTELÃ 950ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-rms-tradicional-950ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN RMS TRADICIONAL 950ml",
  descricao: "GIN RMS TRADICIONAL 950ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-fulls-frutas-vermelhas-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS FRUTAS VERMELHAS 980ml",
  descricao: "GIN FULLS FRUTAS VERMELHAS 980ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-fulls-frutas-silvestres-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS FRUTAS SILVESTRES 980ml",
  descricao: "GIN FULLS FRUTAS SILVESTRES 980ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-fulls-melancia-980ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN FULLS MELANCIA 980ml",
  descricao: "GIN FULLS MELANCIA 980ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-intencion-morango-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INTENCION MORANGO 900ml",
  descricao: "GIN INTENCION MORANGO 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gin-intencion-melancia-900ml",
  categoria: "gin",
  grupo: "Gin",
  nome: "GIN INTENCION MELANCIA 900ml",
  descricao: "GIN INTENCION MELANCIA 900ml",
  preco: null,
  precoCartao: null,
  imagem: null
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

  {
  id: "jack-daniels-gentleman-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS GENTLEMAN 1L",
  descricao: "JACK DANIELS GENTLEMAN 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "jack-gentleman-copo",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK GENTLEMAN 1L + COPO",
  descricao: "JACK GENTLEMAN 1L + COPO",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "jack-daniels-sinatra-select-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS SINATRA SELECT 1L",
  descricao: "JACK DANIELS SINATRA SELECT 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "jack-daniels-single-barrel-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JACK DANIELS SINGLE BARREL 750ml",
  descricao: "JACK DANIELS SINGLE BARREL 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "woodford-reserve-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "WHISKY WOODFORD RESERVE 750ml",
  descricao: "WHISKY WOODFORD RESERVE 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "ballantines-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES 1L",
  descricao: "BALLANTINES 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "ballantines-10-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES 10 ANOS 1L",
  descricao: "BALLANTINES 10 ANOS 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "ballantines-sunshine-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES SUNSHINE 700ml",
  descricao: "BALLANTINES SUNSHINE 700ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "ballantines-burbon-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES BURBON 750ml",
  descricao: "BALLANTINES BURBON 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "ballantines-sweet-brend-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BALLANTINES SWEET BREND 700ml",
  descricao: "BALLANTINES SWEET BREND 700ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "red-label-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "RED LABEL 1L",
  descricao: "RED LABEL 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "black-label-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BLACK LABEL 1L",
  descricao: "BLACK LABEL 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "double-black-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "DOUBLE BLACK 1L",
  descricao: "DOUBLE BLACK 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "gold-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GOLD LABEL 750ml",
  descricao: "GOLD LABEL 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "green-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GREEN LABEL 750ml",
  descricao: "GREEN LABEL 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "blue-label-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BLUE LABEL 750ml",
  descricao: "BLUE LABEL 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "jim-beam-tradicional-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM TRADICIONAL 1L",
  descricao: "JIM BEAM TRADICIONAL 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "jim-beam-honey-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM HONEY 1L",
  descricao: "JIM BEAM HONEY 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "jim-beam-maca-verde-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM MAÇÃ VERDE 1L",
  descricao: "JIM BEAM MAÇÃ VERDE 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "jim-beam-black-cherry-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM BLACK CHERRY 1L",
  descricao: "JIM BEAM BLACK CHERRY 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "jim-beam-black-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "JIM BEAM BLACK 1L",
  descricao: "JIM BEAM BLACK 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "white-horse-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "WHITE HORSE 1L",
  descricao: "WHITE HORSE 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "bells-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BELLS 700ml",
  descricao: "BELLS 700ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "chanceler-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHANCELER 1L",
  descricao: "CHANCELER 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "chanceler-maca-verde-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHANCELER MAÇÃ VERDE 1L",
  descricao: "CHANCELER MAÇÃ VERDE 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "grants-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "GRANTS 750ml",
  descricao: "GRANTS 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "old-parr-12-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "OLD PARR 12 ANOS 1L",
  descricao: "OLD PARR 12 ANOS 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "buchanans-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BUCHANANS 1L",
  descricao: "BUCHANANS 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "buffalo-trace-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "BUFFALO TRACE 750ml",
  descricao: "BUFFALO TRACE 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "passaport-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSAPORT 1L",
  descricao: "PASSAPORT 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "passport-maca-670ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSPORT MAÇÃ 670ml",
  descricao: "PASSPORT MAÇÃ 670ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "passaport-honey-670ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "PASSAPORT HONEY 670ml",
  descricao: "PASSAPORT HONEY 670ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "chivas-12-anos-1l",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHIVAS 12 ANOS 1L",
  descricao: "CHIVAS 12 ANOS 1L",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "chivas-15-anos-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "CHIVAS 15 ANOS 750ml",
  descricao: "CHIVAS 15 ANOS 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "royal-salute-750ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE 750ml",
  descricao: "ROYAL SALUTE 750ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "royal-salute-grain-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE GRAIN 700ml",
  descricao: "ROYAL SALUTE GRAIN 700ml",
  preco: null,
  precoCartao: null,
  imagem: null
},
{
  id: "royal-salute-malts-blend-verde-21-anos-700ml",
  categoria: "whisky",
  grupo: "Whisky",
  nome: "ROYAL SALUTE MALTS BLEND VERDE 21 ANOS 700ml",
  descricao: "ROYAL SALUTE MALTS BLEND VERDE 21 ANOS 700ml",
  preco: null,
  precoCartao: null,
  imagem: null
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

  {
    id: "ciroc-red-berry-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "CIROC RED BERRY 750ml",
    descricao: "CIROC RED BERRY 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "ciroc-tradicional-3l",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "CIROC TRADICIONAL 3L",
    descricao: "CIROC TRADICIONAL 3L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "absolut-tradicional-1l",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT TRADICIONAL 1L",
    descricao: "ABSOLUT TRADICIONAL 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "absolut-raspberri-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT RASPBERRI 750ml",
    descricao: "ABSOLUT RASPBERRI 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "absolut-citron-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT CITRON 750ml",
    descricao: "ABSOLUT CITRON 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "absolut-vanilla-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT VANILLA 750ml",
    descricao: "ABSOLUT VANILLA 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "absolut-tabasco-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT TABASCO 750ml",
    descricao: "ABSOLUT TABASCO 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "absolut-elyx-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ABSOLUT ELYX 750ml",
    descricao: "ABSOLUT ELYX 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "askov-blueberry-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - BLUEBERRY",
    descricao: "ASKOV 900ml - BLUEBERRY",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "askov-frutas-vermelhas-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - FRUTAS VERMELHAS",
    descricao: "ASKOV 900ml - FRUTAS VERMELHAS",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "askov-frutas-roxas-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV FRUTAS ROXAS 900ml",
    descricao: "ASKOV FRUTAS ROXAS 900ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "askov-maracuja-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - MARACUJÁ",
    descricao: "ASKOV 900ml - MARACUJÁ",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "askov-limao-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - LIMÃO",
    descricao: "ASKOV 900ml - LIMÃO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "askov-pessego-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - PÊSSEGO",
    descricao: "ASKOV 900ml - PÊSSEGO",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "askov-kiwi-900ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "ASKOV 900ml - KIWI",
    descricao: "ASKOV 900ml - KIWI",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "smirnoff-998ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "VODKA SMIRNOFF 998ml",
    descricao: "VODKA SMIRNOFF 998ml",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "belvedere-tradicional-750ml",
    categoria: "vodka",
    grupo: "Vodka",
    nome: "VODKA BELVEDERE TRADICIONAL 750ml",
    descricao: "VODKA BELVEDERE TRADICIONAL 750ml",
    preco: null,
    precoCartao: null,
    imagem: null
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

  {
    id: "original-lata-269ml-c15un",
    categoria: "cerveja",
    grupo: "Cerveja",
    nome: "ORIGINAL LATA 269ml C/15UN",
    descricao: "ORIGINAL LATA 269ml C/15UN",
    preco: null,
    precoCartao: null,
    imagem: null,
    unidade: true
  },
  {
    id: "original-269ml-c8un",
    categoria: "cerveja",
    grupo: "Cerveja",
    nome: "ORIGINAL 269ml C/8UN",
    descricao: "ORIGINAL 269ml C/8UN",
    preco: null,
    precoCartao: null,
    imagem: null,
    unidade: true
  },
  {
    id: "skol-lata-269ml-fardo-fechado-c15",
    categoria: "cerveja",
    grupo: "Cerveja",
    nome: "SKOL LATA 269ml FARDO FECHADO C/15",
    descricao: "SKOL LATA 269ml FARDO FECHADO C/15",
    preco: null,
    precoCartao: null,
    imagem: null,
    unidade: true
  },
  {
    id: "itaipava-269ml",
    categoria: "cerveja",
    grupo: "Cerveja",
    nome: "ITAIPAVA 269ml",
    descricao: "ITAIPAVA 269ml",
    preco: null,
    precoCartao: null,
    imagem: null,
    unidade: true
  },
  {
    id: "amstel-lata-269ml",
    categoria: "cerveja",
    grupo: "Cerveja",
    nome: "AMSTEL LATA 269ml",
    descricao: "AMSTEL LATA 269ml",
    preco: null,
    precoCartao: null,
    imagem: null,
    unidade: true
  },
  {
    id: "xeque-mate-lata-355ml",
    categoria: "cerveja",
    grupo: "Cerveja",
    nome: "XEQUE MATE LATA 355ml",
    descricao: "XEQUE MATE LATA 355ml",
    preco: null,
    precoCartao: null,
    imagem: null,
    unidade: true
  },
  {
    id: "draft-chopp-600ml",
    categoria: "cerveja",
    grupo: "Cerveja",
    nome: "DRAFT CHOPP 600ml",
    descricao: "DRAFT CHOPP 600ml",
    preco: null,
    precoCartao: null,
    imagem: null,
    unidade: true
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

  {
    id: "vibe-morango-pessego-2l",
    categoria: "energetico",
    grupo: "Energético",
    nome: "VIBE MORANGO E PÊSSEGO 2L",
    descricao: "VIBE MORANGO E PÊSSEGO 2L",
    preco: null,
    precoCartao: null,
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
    imagem: null,
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
  
  {
    id: "mansao-maromba-whisky-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY PRONTO 1L",
    descricao: "MANSÃO MAROMBA WHISKY PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "mansao-maromba-whisky-maca-verde-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY MAÇÃ VERDE PRONTO 1L",
    descricao: "MANSÃO MAROMBA WHISKY MAÇÃ VERDE PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "mansao-maromba-whisky-tigrinho-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA WHISKY TIGRINHO PRONTO 1L",
    descricao: "MANSÃO MAROMBA WHISKY TIGRINHO PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "mansao-maromba-gin-combo-tropical-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA GIN COMBO TROPICAL PRONTO 1L",
    descricao: "MANSÃO MAROMBA GIN COMBO TROPICAL PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "mansao-maromba-gin-melancia-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "MANSÃO MAROMBA GIN MELANCIA PRONTO 1L",
    descricao: "MANSÃO MAROMBA GIN MELANCIA PRONTO 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "drink-invictus-tropical-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR TROPICAL 1L",
    descricao: "DRINK INVICTUS SABOR DO SABOR TROPICAL 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "drink-invictus-maca-verde-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR MAÇÃ VERDE 1L",
    descricao: "DRINK INVICTUS SABOR DO SABOR MAÇÃ VERDE 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "drink-invictus-melancia-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR MELANCIA 1L",
    descricao: "DRINK INVICTUS SABOR DO SABOR MELANCIA 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },
  {
    id: "drink-invictus-whisky-1l",
    categoria: "prontos",
    grupo: "Drinks prontos",
    nome: "DRINK INVICTUS SABOR DO SABOR WHISKY 1L",
    descricao: "DRINK INVICTUS SABOR DO SABOR WHISKY 1L",
    preco: null,
    precoCartao: null,
    imagem: null
  },

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

  // DESCARTÁVEIS ------------------------------------------------------------------
  


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
  


  // CACHAÇA ------------------------------------------------------------------
  


  // RUM ------------------------------------------------------------------
  


  // ÁGUA MINERAL ------------------------------------------------------------------
  


  // GELOS SABORES ------------------------------------------------------------------
  


  // REFRIGERANTES ------------------------------------------------------------------
  


  // SUCOS ------------------------------------------------------------------



  // CHOCOLATES / DOCES ------------------------------------------------------------------
  


  // DESCARTÁVEIS ------------------------------------------------------------------
  
  
];
