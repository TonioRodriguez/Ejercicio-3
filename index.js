let dato, datoS;
dato = window.prompt("Introduce un número grande ?", "0");
datoS = window.prompt("Introduce un número chico ?", "0");

let resultado = dato - datoS;
document.getElementById("salida").innerHTML = `La resta de ambos es ${resultado}`;