
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
    let select = document.getElementById('categoria')
    select.addEventListener('change', function(){
        console.log(select.value)
    })

    //fazer um event listener para juntar função da quantidade e da categoria quando muda uma das duas
                
  /*  const select = document.getElementById('categoria');
        select.addEventListener('change', function() {
        console.log(this.option.value)
}) */
/*function categoriaT(){
    const select = document.getElementById('categoria');
    console.log(this.option.value)
}*/

//fazer uma validação para quantidade ainda nao foi preenchida
function categoriaT(){
    let categoriaTicket = document.getElementById('categoria');
    let cantidad = document.getElementById('cantidad');
    if (categoriaTicket.value === "estudiante"){
            precio = cantidad.value * 200* 0.2;
            console.log(precio);
            return document.getElementById('alerta').innerText = precio;
        }
    else if (categoriaTicket.value === "trainee"){
        precio = cantidad.value * 200 * 0.5;
        return document.getElementById('alerta').innerText = precio;
   }else if (categoriaTicket.value == "junior"){
        precio = cantidad.value * 200 * 0.85;
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

//função resumen
function resume(){
    //console.log('clicou');
    let cantidad = document.getElementById('cantidad');
    //console.log(cantidad.value);
    document.getElementById('resume-cantidad').innerText = cantidad.value;
    let select = document.getElementById('categoria')
    document.getElementById('resume-categoria').innerText = select.value;
    let precioTotal = document.getElementById('alerta');
    let precioTotalResume = document.getElementById('precio-total');
    console.log(precioTotal);
    precioTotalResume.innerText = precioTotal;
    
}
function borrarInfo(){
    document.getElementById('alerta').innerText = "0";
}