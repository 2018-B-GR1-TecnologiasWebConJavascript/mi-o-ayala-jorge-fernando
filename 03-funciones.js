holamundo();
function holamundo() {
    console.log("Hola mundo");

}

//toda funion devuelve undefined
function sumarDosNumeros(numeroUno,numeroDos) {

    //definir variable
    var numeroUnoEsValido=typeof  numeroUno=='number';
    var numeroDosEsValido=typeof  numeroDos=='number';
    if(numeroUnoEsValido&&numeroDosEsValido)
    {
        return numeroUno+numeroDos;
    }
    else
    {
        console.error('Parametros no son numeros');
        return 0;
    }

}
console.log(sumarDosNumeros(1,2));//suma de nuermos
console.log(sum arDosNumeros(1,2,3,4,5,6,7));
console.log(sumarDosNumeros(true,0,undefined,null,"asd",6,7));
function sumarNnumeros(...numero) {
    console.log(numero);
}
console.log(sumarNnumeros(1,2,3));
function sumarNNumeros(...numeros) {
    var suma=0;
    var todosLosNumerosSonValidos=true;
        for(var i=0;i<numeros.length;i++)
        {
            var numeroEsvalido=typeof numeros[i]=='number';
            if(numeroEsvalido){
                suma=suma+numeros[i];
                console.log("numero valido")
                return suma;
            }
            else
            {
                todosLosNumerosSonValidos=false;
                //break;
            }
        }


}
    console.log(sumarNNumeros(true,1,2,3));


// funcion como parametro
function saludar(nombre,funcion) {

        return `Hola  ${funcion(nombre)}`;

}
console.log(saludar("adrian",holamundo));
function nombreEnMayuscula(nombre) {
    return nombre.toUpperCase();
}
function nombreEnMinuscula(nombre) {
    return nombre.toLowerCase();
}
function nombreConPuntoFinal(nombre) {
    return nombre+".";
}
console.log(saludar("Adrian",nombreEnMayuscula));
console.log(saludar("Adrian",nombreEnMinuscula));
console.log(saludar("Adrian",nombreConPuntoFinal));

function restar(){}
console.log(restar());
console.log(typeof restar)
console.log(restar);