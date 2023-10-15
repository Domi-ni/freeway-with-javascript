function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDeFundo);
  mostraCarros();
  mostraAtor()
  movimentaCarro();
  movimentaAtorPlayer();
  verificaColisao();
  voltaCarroPosicaoInicial();
  exibirPontos();
  marcarPonto();
  
}

