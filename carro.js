
let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]





function movimentaCarro(){

    for(let b = 0; b < xCarros.length; b++ ){

        xCarros[b] -= velocidadeCarros[b];
    }  

}


function mostraCarro(){

    for(let i = 0; i < imagemCarros.length; i++ ){
     
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }

}

function voltaPosicaoInicial(){
     

    for(let a = 0; a < xCarros.length; a++){

        if(xCarros[a] < -40){

            xCarros[a]= 600;
        }
     
    }
    
  
}
