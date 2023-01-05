

var yAtor   = 366;
var xAtor = 100;

let pontos = 0;

function mostraAtor(){

    image(imagemAtor, xAtor, yAtor, 30, 30);
}


function movimentaPersonagem() {


    if (keyIsDown(UP_ARROW)){

       yAtor -= 2;  
    }
   
    if (keyIsDown(DOWN_ARROW)){

        yAtor += 2;
    }


}

function colidir(){
    for(let i = 0; i < xCarros.length; i++)
    if ( xAtor < xCarros[i] + 50 && xAtor + 30 > xCarros[i] &&  yAtor < yCarros[i] + 40 && yAtor + 30 > yCarros[i]) {
        // collision detected!
        colidiu.play();
        yAtor = 366;
        pontos = 0;
      
    }
    
}

function placar(){

    fill(255);
    text(pontos, 152, 26);
}

function chegada(){

    if(yAtor < 20){

        pontos++
        pontosSom.play();
        yAtor = 366;
    }
}

function antiBugs(){

    if(yAtor > 366 ){

        yAtor = 366
    }
}
