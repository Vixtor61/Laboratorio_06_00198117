var typearray = (arreglo,type) => {
    let cont = 0;
    let array = [];
    

    for(let i = 0 ;i<arreglo.length; i++){
            if(type == typeof arreglo[i]){
              array.push(arreglo[i]);  
            }
        
        }
     
        
    
  
  
    return array;
}
var type = prompt("escriba el tipo");
var j = [4,"Sds",null,4,4,5];
console.log(typearray(j,type));