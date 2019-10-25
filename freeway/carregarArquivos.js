//Variável para as imagens
let imgEstrada;
let imgVaca;
let imgCarro =[];
//                Direita   /   Esquerda
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 215, 270, 325];
let velocidadeCarro = [3, 5, 7, 3, 5, 7];

//Placar
let meuPlacar = 0;
let placarOponente = 0;

//altura,largura etc
let larguraTela = 600;
let alturaTela = 400;

//Vaca
let yVaca = 368;
let yGard = 368;
let altura = 28;
let largura = 28;

let xVaca = 150;
let xGard = 450;

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgGardevoir =loadImage('imagens/gardevoir.png');
  
  
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  //Sons
  ponto = loadSound('sons/pontos.wav')
  atropelou = loadSound('sons/colidiu.mp3')
  trilha = loadSound('sons/trilha.mp3')
  vitoria = loadSound('sons/Vaca_Louca.mp3')
}
