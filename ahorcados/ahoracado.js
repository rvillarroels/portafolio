var palabra = new Array("Tamarindo","reloj", "animal", "bohemia", "esperanza", "autonomia","ahoracado", "felicidonia", "toxico", "Madera");
var hombre, l, espacio;
//Objeto declaracion de la clase ahoracado
var Ahoracado = function (con){

	//this es las variables locales de la clase, accesibles en toda la clase
    //this.contexto es el context de dibujo del canvas, que llega por parametro
    //desde la variable con
	this.contexto = con;
	this.maximo = 5;
	this.intento = 0;
	this.vivo= true;
	this.dibujar();
}

Ahoracado.prototype.dibujar = function()
{
	var dibujo = this.contexto;
	//dijunado el poste
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath();
	if (this.intento > 0 )
	{
		// intentos = 1 --> rostro
		dibujo.beginPath();
		dibujo.arc(150,140,40,0, Math.PI*2, false);
		dibujo.strokeStyle = "#F00";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();
	}
	if (this.intento > 1)
	{
		dibujo.beginPath();
		dibujo.moveTo(150,180);
		dibujo.lineTo(150,250);
		dibujo.lineWidth = 5;
		dibujo.strokeStyle = "#F00";
		dibujo.stroke();
		dibujo.closePath();

		if (this.intento > 2)
		{
		dibujo.beginPath();
		dibujo.moveTo(120,220);
		dibujo.lineTo(150,180);
		dibujo.lineTo(180,220);
		dibujo.lineWidth = 5;
		dibujo.strokeStyle = "#F00";
		dibujo.stroke();
		dibujo.closePath();
		}

		if (this.intento > 3)
		{
		dibujo.beginPath();
		dibujo.moveTo(120,290);
		dibujo.lineTo(150,250);
		dibujo.lineTo(180,290);
		dibujo.lineWidth = 5;
		dibujo.strokeStyle = "#F00";
		dibujo.stroke();
		dibujo.closePath();
		}

		if (this.intento > 4)
		{
		dibujo.beginPath();
		//Ojo Izq
		dibujo.moveTo(125,120);
		dibujo.lineTo(145,145);
		dibujo.moveTo(145,120);
		dibujo.lineTo(125,145);
		//Ojo Derecho
		dibujo.moveTo(155,120);
		dibujo.lineTo(175,145);
		dibujo.moveTo(175,120);
		dibujo.lineTo(155,145);


		dibujo.lineWidth = 5;
		dibujo.strokeStyle = "blue";
		dibujo.stroke();
		dibujo.closePath();
		}
	}
}

Ahoracado.prototype.trazar = function()
{
	this.intento ++;
	if (this.intento >= this.maximo)
	{
		this.vivo= false;
		alert("Estas Muerto!!")
	}
	this.dibujar();
}

function iniciar(){
	palabra = palabra[Math.floor(Math.random()*10)];
	 l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	canvas.width= 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre= new Ahoracado(contexto);


	//convierte a mayuscula
	palabra = palabra.toUpperCase();
	//declaro un array con n espacios de acuerdo al largo de palabra
	espacio = new Array(palabra.length);

	//Agregamos una funcion que se dispara al dar click al boton

	b.addEventListener("click", agregarLetras);
	mostrarPista(espacio);
    //hombre.trazar();
	//hombre.trazar();
	//hombre.trazar();
	//hombre.trazar();
	//hombre.trazar();
	
}

function agregarLetras ()
{
	var letra = l.value;
	l.value = "";
	
	mostrarPalabra(palabra, hombre, letra);
}

function mostrarPalabra(palabra, ahorcado, letra)
{
	var encontrado = false;
	var p;
	letra = letra.toUpperCase();
	//ciclo In
	for (p in palabra)
	{
		if (letra == palabra[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
	}

	mostrarPista(espacio);

	if (!encontrado)
	{
		ahorcado.trazar();
	}

	if (!ahorcado.vivo)
	{
		//Mostrar la palabra entera
		alert("La palabra era: " + palabra);
		document.location.reload();
	}
}

function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var largo = espacio.length

	for (i = 0; i<largo; i ++)
	{
		if (espacio[i] != undefined)
		{
				texto = texto + espacio[i] + " ";
		}
		else
			{
				texto += "_ ";
			}
	}
	pista.innerText = texto;
}