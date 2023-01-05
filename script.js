



function setup(){
    
    createCanvas(500, 400);
    trilha.loop
}

function draw(){

    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaPersonagem();
    voltaPosicaoInicial();
    colidir();
    placar();
    chegada();
    antiBugs();
    


}



