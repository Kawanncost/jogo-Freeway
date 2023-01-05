
// imagens
let imagemDaEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;


function preload(){

    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemAtor = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("imagens/carro-1.png");
    imagemCarro2 = loadImage("imagens/carro-2.png");
    imagemCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
    
    trilha = loadSound("trilha.mp3");
    pontosSom = loadSound("pontos.wav");
    colidiu = loadSound("colidiu.mp3");
    
}
