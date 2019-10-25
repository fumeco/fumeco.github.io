
function mostraVaca(){
 image(imgVaca, xVaca, yVaca, largura, altura);
 image(imgGardevoir, xGard, yGard, largura, altura)
}

function movimentaVaca(){
 
  if(keyIsDown(87)){
    //yVaca = yVaca -3;
    if(yVaca > 5)
    yVaca -= 5;
  }
  if(keyIsDown(83)){
    if(yVaca < 365)
  yVaca += 5;
  }     
}

function movimentaGard(){
 
  if(keyIsDown(UP_ARROW)){
    if(yGard > 5)
    yGard -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yGard < 365)
  yGard += 5;
  }     
}

//Pontos
function pontuaçao(){
  if(yVaca < 10 ){
    placarOponente += 1;
  }
  
  if(yGard < 10 ){
    meuPlacar += 1;
  }
}

function resetar(){
 if(yVaca < 10){
    yVaca = 368;
 }
   if(yGard < 5){
    yGard = 368;
 }
}
