var sumar = [0,1,10,6,4,4];

var suma = (arreglo) =>{
    for(let i = 0;i<(arreglo.length/2); i++){
        console.log(arreglo[i]+arreglo[(arreglo.length-1)-i]);
    }
}
suma(sumar);