function setup() {
  createCanvas(600, 400);
}

function draw() {
  if(frameCount > 400){
    if(placarOponente <5 && meuPlacar <5)
   jogar();
    else
      verificaVencedor();
      
  }else{
  telaInicial();
  }
}

function jogar() {
 background(imgEstrada);
  mostraVaca();
  movimentaVaca();
  mostraCarros();
  movimentaCarros();
  mostraPlacar();
  pontuaçao();
  movimentaGard();
  resetar();
  atropelamento();
}

 function telaInicial(){
 background("Chartreuse");
 textStyle(BOLD);
 textAlign(CENTER);
 textSize(48);
 text("Avenida Paulista",300,200);
 textSize(24);
 text("Desenvolvidor por Mito", 300,230);
 }

function verificaVencedor(){
  if(placarOponente >=5)
    vacaVencedora();
  else
    GardevoirVencedora();
}

function vacaVencedora(){
   background("Chartreuse");
 textStyle(BOLD);
 textAlign(CENTER);
 textSize(48);
 text("Vaca Venceu",300,90);
 textSize(24);
 image(imgVaca,200,100,200,200);
 }

function GardevoirVencedora(){
   background("Chartreuse");
 textStyle(BOLD);
 textAlign(CENTER);
 textSize(48);
 text("Gardevoir Venceu",300,90);
 textSize(24);
 image(imgGardevoir,200,100,200,200);
 }




