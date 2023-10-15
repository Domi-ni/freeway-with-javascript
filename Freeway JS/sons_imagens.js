let imagemDeFundo;
let atorPlayer;
let carroVerde;
let carroPreto;
let carroAmarelo;

let somDaTrilha
let somPonto
let somColisao


function preload(){
  imagemDeFundo = loadImage("imagens/estrada.png");
  atorPlayer = loadImage("imagens/ator-1.png");
  carroVerde = loadImage("imagens/carro-1.png");
  carroPreto = loadImage("imagens/carro-2.png");
  carroAmarelo = loadImage ("imagens/carro-3.png");
  imagemCarros = [carroVerde, carroPreto, carroAmarelo, carroVerde, carroPreto, carroAmarelo];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somPonto = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
}


