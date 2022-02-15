var vp = document.getElementById("campo");
papel = vp.getContext("2d");

document.addEventListener("keydown", mover_Dim);

var n, mov = 10; // variable contadora, para los ciclos for

tecla = 
{
    Left: 37,    Up: 38,
    Right: 39,   Down: 40
}

// objetos literles para las caracteristicas de cada animal y sus posiciones dentro del canvas

var vaca =
{
    url: "asets/vaca.png",
    loaded: false,
    cantidad: randomizer(1, 20)
}

var Dim = {
    url: "asets/Dim.png",
    loaded: false,
    x: 200,
    y:200
}

var pollo = 
{
    url:"asets/pollo.png",
    loaded: false,
    cantidad: randomizer(3, 25)
}

var cerdo =
{
    url: "asets/cerdo.png",
    loaded:false,
    cantidad: randomizer(2, 15)
}

var fondo =
{
    url: "asets/tile.png",
    loaded: false
}
 
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.position_x = [];
cerdo.position_y = [];
cerdo.imagen.addEventListener("load", cargar_cerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.position_x = [];
pollo.position_y = [];
pollo.imagen.addEventListener("load", cargar_pollo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.position_x = [];
vaca.position_y = [];
vaca.imagen.addEventListener("load", cargar_vaca);

Dim.imagen = new Image();
Dim.imagen.src = Dim.url;
Dim.imagen.addEventListener("load", cargar_Dim);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargar_fondo);



function cargar_vaca()
{
   
    vaca.loaded = true;
    for (n = 0; n < vaca.cantidad; n ++)
    {
        vaca.position_y[n] = randomizer(0, 8)*60;
        vaca.position_x[n] = randomizer(0, 8)*60;
    }   
    dibujar();    
}

function cargar_pollo()
{
    for (n = 0; n < pollo.cantidad; n ++)
    {
        pollo.position_y[n] = randomizer(0, 12)*35;
        pollo.position_x[n] = randomizer(0, 12)*35;
    } 
    pollo.loaded = true;
    dibujar();
}

function cargar_cerdo()
{
    for (n = 0; n < vaca.cantidad; n ++)
    {
        cerdo.position_y[n] = randomizer(0, 10)*42;
        cerdo.position_x[n] = randomizer(0, 10)*42;
    } 
    cerdo.loaded = true;
    dibujar();    
}

function cargar_fondo()
{
    fondo.loaded = true;
    dibujar();    
}

function cargar_Dim() 
{
    Dim.loaded = true;
    dibujar();
}

function mover_Dim(event)
{
    if (event.keyCode == tecla.Up)
    {
        Dim.y = Dim.y - mov;
        console.log(Dim.y);
        dibujar();
    }

    if (event.keyCode == tecla.Down)
    {
        Dim.y = Dim.y + mov;
        dibujar();
    }

    if (event.keyCode == tecla.Left)
    {
        Dim.x = Dim.x - mov;
        dibujar();
    }

    if (event.keyCode == tecla.Right)
    {
        Dim.x = Dim.x + mov;
        dibujar();
    }
}

function dibujar()
{
    if(fondo.loaded)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (cerdo.loaded)
    {
        for(n = 0; n < cerdo.cantidad; n++)
        {
            papel.drawImage(cerdo.imagen, cerdo.position_x[n], cerdo.position_y[n]);
        }
    }

    if (pollo.loaded)
    {
        for(n = 0; n < pollo.cantidad; n++)
        {
            papel.drawImage(pollo.imagen, pollo.position_x[n], pollo.position_y[n]);
        }
    }

    if (Dim.loaded)
    {
        papel.drawImage(Dim.imagen, Dim.x, Dim.y);
        console.log(Dim.x);
            
    }

    if (vaca.loaded)
    {
        for(n = 0; n < vaca.cantidad; n++)
        {
            papel.drawImage(vaca.imagen, vaca.position_x[n], vaca.position_y[n]);
        }
        
    }
}

function randomizer(min, max)
{
    var resultado = Math.floor(Math.random()* (max - min)) + min;
    return resultado;
}