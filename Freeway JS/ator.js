//codigos do ator
let xAtor = 80;
let yAtor = 367;
let comprimentoAtor = 30;
let alturaAtor = 30;
let diametroAtor = 15;
let colisao = false;
let pontos = 0;


function mostraAtor(){
  image(atorPlayer, xAtor, yAtor, comprimentoAtor, alturaAtor);
}


function movimentaAtorPlayer(){
  if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
  if (keyIsDown(DOWN_ARROW)){
    if(verificaYAtor())
      yAtor += 3;
    }
}


function verificaColisao(){
  for (let contador = 0; contador < imagemCarros.length; contador++){
    colisao = collideRectCircle (xCarros[contador], yCarros[contador],comprimentoCarro, alturaCarro, xAtor, yAtor, diametroAtor);
    if (colisao){
      somColisao.play()
      voltaAtorPosicaoInicial();
      if (pontosMaiorQueZero()){
        pontos -= 1;
      }
    }
  }
}


function pontosMaiorQueZero (){
  return pontos > 0;
}


function voltaAtorPosicaoInicial (){
  yAtor = 367;
}


function exibirPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,200,0))
  text(pontos, width/5, 25)
}


function marcarPonto(){
  if (yAtor < 15){
    pontos++
    somPonto.play()
    voltaAtorPosicaoInicial()
  } 
}

function verificaYAtor(){
 return yAtor < 366
    
}