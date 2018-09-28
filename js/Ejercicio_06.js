var encrypt = (cadena) => {
    var arreglonew = [];
    for(let i = 0;  i < cadena.length; i++){
     
        if(cadena[i] == "m" ){
           
            arreglonew.push("0");
        }
        else if(cadena[i] == "u"){
            arreglonew.push("1");
        }
        else if(cadena[i] == "r"){
            arreglonew.push("2");
        }
        else if(cadena[i] == "c"){
            arreglonew.push("3");
        }
        else if(cadena[i] == "i"){
            arreglonew.push("4");
        }
        else if(cadena[i] == "e"){
            arreglonew.push("5");
        }
        else if(cadena[i] == "l"){
            arreglonew.push("6");
        }
        else if(cadena[i] == "a"){
            arreglonew.push("7");
        }
         else if(cadena[i] == "g"){
            arreglonew.push("8");
        }
        else if(cadena[i] == "o"){
            arreglonew.push("9")
        }else if(cadena[i] != "m" && cadena[i] != "u" && cadena[i] != "r" && cadena[i] != "c" && cadena[i] != "i" && cadena[i] != "e" && cadena[i] != "l" && cadena[i] != "a" && cadena[i] != "g" && cadena[i] != "o"){
            arreglonew.push(i);
        }

        }
        return arreglonew;
    }
    

var a = "murcielago";
console.log(encrypt(a));
