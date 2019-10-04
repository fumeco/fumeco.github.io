let tocouMinhaRaquete = false;
let tocouRaqueteOponente = false;

//Dimensões da Tela
let alturaTela = 600;
let larguraTela = 1280;
let metadeTela = larguraTela/2;

//Variáveis em Javascript da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadeX = 10;
let velocidadeY = 10;
let raio = diametro / 2;

aumentoDeVelocidade = 1.5;

//Variáveis das raquetes
let alturaRaquete = 110;
let larguraRaquete = 10;

let xMinhaRaquete = larguraTela - larguraRaquete;
let yMinhaRaquete = alturaTela/2 - alturaRaquete/2;

let xRaqueteOponente = 5;
let yRaqueteOponente = alturaTela/2 - alturaRaquete/2;

let meuPlacar = 0;
let placarOponente = 0;

let velocidadeRaquete = 15;

function preload(){
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura = "+largura);
  console.log("Altura = "+altura);
}

//Um looping sempre, desenha o que tem dentro
function draw() {
  background("green");
  stroke(255);
  strokeWeight(5);
  line(metadeTela,0,metadeTela,alturaTela);
  if(frameCount < 200) // 5 segundos
    telaInicial();
  else
  jogar();

}//Fim da função Draw

function telaInicial(){
  fill('white');
  rect(larguraTela/4, 0, metadeTela, alturaTela);
  textAlign(CENTER);
  fill('red');
  noStroke();
  textSize(35);
  textFont('Time New Romam');
  text("Ping Pong do Programador", metadeTela, alturaTela/2);
}

function jogar(){
  if(meuPlacar < 5 && placarOponente < 5){
  mostraBolinha();
  movimentaBolinha();
  detectaColisao();
  minhaRaquete();
  raqueteOponente();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  detectaColisaoBolinhaRaquetes();
  mostraPlacar();
} else{
 //Verifica e mostra o campeão
  if(meuPlacar == 5)
    setasVenceu();
  else
    letrasVenceu();
  }
}
  
  function letrasVenceu(){
   fill('0,255,0');
    rect(0,0,metadeTela,alturaTela);
    textSize(30);
    fill("darkBlue");
    textFont('bold');
    textAlign(CENTER);
    text("Letras venceu",metadeTela/2, alturaTela/2);
  }
  
  function setasVenceu(){
    fill('0,255,242');
    rect(metadeTela, 0, larguraTela, alturaTela);
    textSize(30);
    textFont('bold',);
    fill("Red");
    textAlign(CENTER); // 3/4*larguraTela
    text("Setas venceu", metadeTela + metadeTela/2, alturaTela/2);
  }
  
function mostraPlacar(){
  textSize(25);
  fill("#1c6578");
  text(meuPlacar, 3/4 * larguraTela, 35);
  fill("#a31e0f");
  text(placarOponente, larguraTela/4, 35);
  textFont('italic');
}

function detectaColisaoBolinhaRaquetes(){
  //Colisão da minha raquete
  tocouMinhaRaquete = collideRectCircle(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);

  if(tocouMinhaRaquete){
  //Impede gol contra
   if(xBolinha > metadeTela && velocidadeX > 0){
    velocidadeX *= -1;
     somRaquetada.play();
   }
  }
  
  //Colisão da raquete do oponente
  tocouRaqueteOponente = collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
 
  if(tocouRaqueteOponente){
    if(xBolinha < metadeTela & velocidadeX < 0){
    velocidadeX *= -1;
    somRaquetada.play();  
    }
  }
    
}

function movimentaMinhaRaquete(){
  //console.log("y: "+yMinhaRaquete);
  //console.log("x: "+xMinhaRaquete);
  if(keyIsDown(UP_ARROW)){//Para cima
    if(yMinhaRaquete > 0)//Teto
   yMinhaRaquete -= velocidadeRaquete;
 }
  if(keyIsDown(DOWN_ARROW)){//Para baixo
    if(yMinhaRaquete < (alturaTela - alturaRaquete))//Chão
    yMinhaRaquete += velocidadeRaquete;
  }
   if(keyIsDown(LEFT_ARROW)){//Para esquerda
     if(xMinhaRaquete > metadeTela)//Parede Esquerda
     xMinhaRaquete -= velocidadeRaquete;
 }
  if(keyIsDown(RIGHT_ARROW)){//Para direita
    if(xMinhaRaquete < (larguraTela - larguraRaquete))//Parede Direita
    xMinhaRaquete += velocidadeRaquete;
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){//W - Para cima
    if(yRaqueteOponente > 0)//Teto
    yRaqueteOponente -= velocidadeRaquete;
  }
  if(keyIsDown(83)){//S - Para baixo
    if(yRaqueteOponente < (alturaTela - alturaRaquete))//Chão
    yRaqueteOponente += velocidadeRaquete;
  }
  if(keyIsDown(65)){//A - Para esquerda
    if(xRaqueteOponente > 0)//Parede Esquerda
    xRaqueteOponente -= velocidadeRaquete;
  }
  if(keyIsDown(68)){//D - Para direita
    if(xRaqueteOponente < (metadeTela - larguraRaquete - 2))//Parede Direita
    xRaqueteOponente += velocidadeRaquete;
  }
}

function minhaRaquete(){
  fill("#1c6578");
  noStroke();
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete,);
}
function raqueteOponente(){
  fill ("#a31e0f");
  noStroke();
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete,);
}

function mostraBolinha(){
  fill("white");
  noStroke();
  circle(xBolinha,yBolinha,diametro);
}//Fim mostraBolinha

function movimentaBolinha(){
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}//Fim movimentaBolinha

function detectaColisao(){
  //Colisão com as Bordas Laterais
  
  //Lado direito - meu lado
  if(xBolinha + raio >= largura){
    velocidadeX *= -1;
    placarOponente += 1;
    somPonto.play();
    velocidadeX -= aumentoDeVelocidade;
    velocidadeY -= aumentoDeVelocidade;
  }
  
  //Lado esquerdo - lado do oponente
  if(xBolinha - raio <= 0){
    velocidadeX *= -1;
    meuPlacar += 1;
    somPonto.play();
    velocidadeX += aumentoDeVelocidade;
    velocidadeY += aumentoDeVelocidade;
  }
  
  //Colisão com as bordas superior e inferior
  if(yBolinha + raio >= altura || yBolinha - raio <= 0){
    velocidadeY *= -1;
  }
}//Fim detectaColisao


