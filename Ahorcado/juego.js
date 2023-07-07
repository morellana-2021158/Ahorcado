let palabrita; // Let esta declarando que la variable sea global
let cant_errores = 0; // cantidadad de veces que me equivoque 
let cant_aciertos = 0; // cantidad de acierto

const palabras = [
    'naranja',  // 0
    'manzana', // 1
    'zapato', // 2
    'camisa', // 3              // todo esto es un Array
    'kinal', // 4
    'colegio', // 5
    'informatica', // 6
    'carro', // 7
    'caramelo', // 8
    'elefante', // 9
    'mouse', // 10
    'medicina', // 11
    'almuerzo', // 12
    'hamburguesa', // 13
    'nike', // 14
    'twitch', // 15
]

const btn = id('jugar');
const imagen = id('imagen');
const btn_letras =document.querySelectorAll("#letras button"); //  querySelectorAll representa una lista de elementos del documento que coinciden con el grupo de selectores indicados
                                                                // querySelectorAll Esto devuelve un Array de tantos elementos que encontro 

btn.addEventListener('click', iniciar); //addEventListener es un escuchador de eventos. Se espera el evento click del boton. 
                                        // Si la funcion ya esta creada solo se pone el nombre en este caso iniciar sin parentecis el nombre.
                                        // los parentecis en una funcion son: Ejecutame el codigo en cuanto leo el codigo y no en el evento que se espera.

function iniciar(event){ // event permiten la interacción entre las aplicaciones JavaScript y los usuarios. Cada vez que se pulsa un botón.
    id('resultado').innerHTML = '';
    imagen.src = 'img/img0.png';
    btn.disabled = true; // aquí desabilita el boton de jugar Nuevamente cuando se presiona
     cant_errores = 0; 
     cant_aciertos = 0;
   
    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = ''; // esto sirve para que cuando le demos al jugar nuevamnete se limpie los span y no se sigan creando, y nos de una cadena de texto vacia nuevamente
    // innerHTML representa el html interno

    const cant_palabras = palabras.length; // se uso length ya que indica el numero de argumentos que una funcion requiere. En ese caso la const Palabras tiene 16 argumentos
    const valor_al_azar = obtener_random(0, cant_palabras) // variable privada de la función: obtener_random que es del valor mas bajo en ese caso 0 y el valor mas alto que en este caso es cant_palabras
    palabrita = palabras [valor_al_azar] // esto es para que el valor que me de sea las palabras que se pusieron en la const palabras 
    console.log(palabrita); // esto es lo que tengo que adivinar (palabrita una palabra que esta entre el 0 y 15 y eso es lo que se adivina)
    const cant_letas = palabrita.length;

    for(let i = 0; i < btn_letras.length; i++){
        btn_letras [i].disabled = false;
    }

    for(let i = 0; i < cant_letas; i++){ // que arranque en 0 ya que es el valor mas bajo va ir hasta la cant_letras y que se dezplace en uno en uno
        const span = document.createElement('span'); // por cada caracter que tenga la palabrita se crea una etiqueta span 
        parrafo.appendChild(span); // aquí le metimos un span a otro span

    }
    //Cuando vaya y le de al boton jugar Nuevamente: Va a sacar un valor al azar, va va a buscar una palabrita al azar
    //Me va a mostrar la palabra que tengo que adivinar en consola, y por ultimo me va a tener que crear una etiqueta span vacia por cada letra que tenga la palabra adivinar. 
}


for(let i = 0; i < btn_letras.length; i++){
    btn_letras [i].addEventListener('click', click_letras);
}

function click_letras(event){
    const spans = document.querySelectorAll('#palabra_a_adivinar span'); // busca la letra adivinar y boton de la letra que presiona y te lo pone en el span su lugar correspondido
    const button = event.target; // Target: cual de todas las letras, llamo a la funcion.
    button.disabled = true; // aquí desabilita los botonnes de las letras cuando se presiona
    const letra = button.innerHTML.toLowerCase(); // te pone todo n minuscula 
    const palabra = palabrita.toLowerCase(); // te pone todo en minuscula
    
    let acerto = false;
    for(let i = 0; i < palabra.length; i++){
        if(letra == palabra[i]){ // esto es que si la letra si existe no te cobra una vida, pero la letra no existe en la palabra te cobra la vida
            // la variable i es la psicion de la letra en la palabra
            // que coincide con el span al que tenemos que mostrar la letra
                                
            spans[i].innerHTML = letra; // cambia el contenido del span y se pone la letra dentro del span si esta dicha letra en la palabra
            cant_aciertos++;
            acerto = true;
        }
    }

    if (acerto == false){
            cant_errores++;
            const source = `img/img${cant_errores}.png`;
            const imagen = id('imagen');
            imagen.src = source;
    }

    if(cant_errores == 7){
        alert("GAME OVER 🥲, La palabra era = " + palabrita) ;
        game_over();
    }else if(cant_aciertos == palabrita.length){
        alert("Has ganado la partida 🥳🥳🎊");
        
        game_over();

    }
    console.log("la letra " + letra + " en la palabra " + palabra + " ¿existe?:" + acerto); // la letra que se presiono si existe en la palabra.
}

function game_over(){
    for(let i = 0; i < btn_letras.length; i++){
        btn_letras [i].disabled = true;
    }

    btn.disabled = false;
}

game_over();