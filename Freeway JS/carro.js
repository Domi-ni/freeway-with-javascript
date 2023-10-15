let yCarros = [40, 100, 150, 213, 267, 315]
let xCarros = [550, 550, 550,550, 550, 550];
let velocidadeCarros = [2.5, 3, 4.2, 5, 4.5, 2.2]
let comprimentoCarro = 50;
let alturaCarro = 35;


function mostraCarros(){
  for (let contador = 0; contador < imagemCarros.length; contador++){
    image(imagemCarros[contador], xCarros[contador],yCarros[contador],comprimentoCarro,alturaCarro);
  }
}


function movimentaCarro(){
  for (let contador = 0; contador < imagemCarros.length; contador++){
    xCarros[contador] -= velocidadeCarros[contador];
  }
}


function voltaCarroPosicaoInicial(){
  for (let contador = 0; contador < imagemCarros.length; contador++){
    if (verificaPassouTela(xCarros[contador])){
      xCarros[contador] = 550;
    }
  }
}

function verificaPassouTela(xCarros){
  return xCarros < -50
}
