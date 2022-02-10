//l = document.getElementById("campo");
boton = document.getElementById("botoncito");
//alert("js en prueba");


//document.write("<br> esta es una prueba " + " el valor es " + z);
var z = boton.addEventListener("click", random);




function random(min, max)
{
    get_min = document.getElementById("caja_min");
    get_max = document.getElementById("caja_max");
    //console.log("este es el minimo " + get_min.value + " este es el maximo" + get_max.value);
    maximo = parseInt(get_max.value);
    minimo = parseInt(get_min.value);
    var result = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    document.write(result);
    //console.log(result);
    return result;    
}