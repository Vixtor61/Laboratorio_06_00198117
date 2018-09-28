var typeA = (arreglo) => {
    let cont = 0;
    let array = [];
    let arrayC = [];
    for(let i=0;i<arreglo.length;i++){
        if(!array.includes(typeof arreglo[i])){
            array.push(typeof arreglo[i]);
            
        }
    }

    console.log(array);
    for(let i = 0 ;i<array.length; i++){
    
        for(let j = 0; j<arreglo.length;j++ ){
            if(array[i] == typeof arreglo[j]){
                console.log("Asd");
                cont++;
            }
            
        }
        arrayC.push(cont);
        cont = 0;
        
    } 
    console.log("numero de tipos: " + arrayC); 
  
    return cont;
}
var j = [4,"Sds",null,4,4];
typeA(j);