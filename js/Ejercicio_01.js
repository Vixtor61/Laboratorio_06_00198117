var num= prompt("Ingrese el numero");
var arreglo = [];

var llenararreglo = (arreglo) => {
    var array = prompt("ingrese tamaño del arreglo");
    for(i=0;i<array;i++){
        arreglo.push(prompt("ingrese numero"));
    }
    return arreglo;
}

arreglo = llenararreglo(arreglo);
console.log(arreglo);
var ocurencia = (arreglo,num) => {
    let cont = 0;

    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]==num){
         
            cont++;
        }
    }
  
    return cont;
}
console.log(ocurencia(arreglo,num));

