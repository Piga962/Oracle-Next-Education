let numSecreto = 0;
let intentos = 0;
let numSorteados = [];
let numMax = 10;

function intentoDeUsuario(){
    alert('Click desde el boton');
}

function asignarTexto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumSecreto(){
    let numGenerado = Math.floor((Math.random()*numMax))+1;
    console.log(numGenerado);
    console.log(numSorteados);
    if(numSorteados.length == numMax){
        asignarTexto('p','Ya se sortearon todos los numeros');
    }else{
        if(numSorteados.includes(numGenerado)){
            return generarNumSecreto();
        }else{
            numSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function verificarIntento(){
    let numUser = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    
    if(numUser === numSecreto){
        asignarTexto('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numUser > numSecreto){
            asignarTexto('p','El numero es menor');
        }else{
            asignarTexto('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTexto('h1','Juego xd');
    asignarTexto('p',`Indica un numero del 1 al ${numMax}`);
    numSecreto = generarNumSecreto();
    intentos = 1;
}

function nuevoJuego(){
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();