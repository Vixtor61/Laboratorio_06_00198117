var prom = (arreglo) => {
    let conts = 0;
    console.log(arreglo);
    for(let i=0;i<arreglo.length;i++){
   
         
            conts = conts + parseInt(arreglo[i]);
        
    }
    
    return (conts/arreglo.length);
}
console.log(prom(arreglo));
