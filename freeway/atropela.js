let atropelaVaca = false;
let atropelaGard = false;

function atropelamento(){
  for(let i=0; i<imgCarro.length; i++){
    atropelaVaca = collideRectRect(xVaca,yVaca,28,28, xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaVaca){
      //Vaca atropelada
      yVaca = 368;
      if(placarOponente > 0)
        placarOponente -= 1
    }
    
    atropelaGard = collideRectRect(xGard,yGard,28,28, xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaGard){
      //Gardevoir Atropelado
      yGard = 368;
       if(meuPlacar > 0)
        meuPlacar -= 1
    }
    
  }
  
}