var residencial = document.getElementById("residencial");
var industrial = document.getElementById("industrial");

var zonaDom = document.getElementById("zonaDom");
var kWh = document.getElementById("kWhMes");
        
function validar(){
    if (residencial.checked==true){  // pregunto si la opcion residencial fue presionada y muestro el alert
        alert("Ha seleccionado Residencial");
    }
    else if(industrial.checked==true){
       alert("Ha seleccionado industrial");
    }
    else{       // sino selecciono ninguna de las dos opciones le muestro este alert
        alert("Por favor seleccione una opcion de Tipo de usuario");
    }


            // pregunto si el valor es == a el valor predeterminador del select o si es vacio, le indico que seleccione una opcion de las 4
    if(zonaDom.value=="select-zona" || zonaDom.value=="" ){    

        alert("Por favor seleccione una de las cuatro opciones");
            
    }
    else{
            alert("Perfecto");
            
    }


    if (kWh.value <= 0 || kWh.value==""){
        alert("La cantidad de kWh no debe ser cero ni negativo");
    }
    else{
        alert("Perfecto 2");
    }
    

    
}





