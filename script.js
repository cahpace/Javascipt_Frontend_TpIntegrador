
function validarCantidad(){
    let cantidad = document.getElementById('cantidad');
    
    let precio = 0;
    if(cantidad.value <= 0){
        document.getElementById('alerta').innerText ="Elija una cantidad mayor 0";
        console.log("invalido");  
    } else {
       let precio = cantidad.value * 200;
       document.getElementById('alerta').innerText = precio;
       return precio;
    }
    }
//fazer uma validação para quantidade ainda nao foi preenchida
function categoriaT(){
    let categoriaTicket = document.getElementsByTagName("option").value;
    if (categoriaTicket === "estudiante"){
            precio = cantidad.value * 200* 0.8;
            console.log(precio);
            return document.getElementById('alerta').innerText = precio;
        }
    else if (categoriaTicket === "trainee"){
        precio = cantidad * 200 * 0.5;
        return document.getElementById('alerta').innerText = precio;
   }else if (categoriaTicket == "junior"){
        precio = cantidad * 200 * 0.15;
       return  document.getElementById('alerta').innerText = precio;
    }
}


    //console.log(cantidad.value);
/*function categoria(){
    let categoriaTicket = document.getElementById("categoria");
    console.log(categoriaTicket.value);
}*/
//valida cantidad 
//função
//cantidadTicket.oninput = validarCantidad(this);

/*function validarCantidad(){
if (cantidad <= 0){
    let cantidad;
    //return alerta = "Elija cantidad mayor que cero";
    console.log("Elija cantidad mayor que cero");
}
}*/

//funçao que faz borrar dados colocados
//função resumen