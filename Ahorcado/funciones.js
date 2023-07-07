function id(str ){ //str aqui recibe un string 
    return document.getElementById(str); // aquí me retorna lo que hayamos mandado como argumento
}

function obtener_random(num_minimo, num_max){
    const amplitud_valores = num_max - num_minimo; // valor mas alto - valor mas bajo del random (16-0)
    const valor_al_azar = Math.floor(Math.random( )* amplitud_valores)+ num_minimo; // Math.floor te quita los decimales y te deja solo el entero: Ej 7.999 te dara el 7
    return valor_al_azar;                                                          // la amplitud_valores es la diferencia entre el numero mas alto y el numero mas bajo 7-0 = 7 amplitud
}                                                                                   // este algoritmo se completa con el + num_minimo Ej: 5 - 15 = amplitud 10 por lo cual el random sacara valores de 0 a 10
                                                                                    // Pero si quiere todos los valores seria el 10 de amplitud mas el valor mas bajo 10+5 = 15