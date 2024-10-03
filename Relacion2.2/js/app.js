/* Utilizando setTimeout(), setInterval() 
creo un contador hacia atrás de 60 segundos */

/* Utilizando el programa anterior haz que al llegar a 0 
se cargue la página de google, para ello puedes utilizar
el objeto location. */

let contador = 60;

function cuentaAtras() {

  document.write(`<p>${contador}</p>`);
  contador -= 1;

  if (contador >= 0) {
    setTimeout(cuentaAtras, 1000);
  } else {

    location.assign("https://www.google.es");
  }

}

/* 
Usando el objeto Date, sus métodos getHours,
 getMinutes y GetSeconds y el método setTimeout(),setInterval()
crea un reloj que se actualice cada segundo 
*/

function reloj() {

  let hora = new Date().getHours();
  let min = new Date().getMinutes();
  let segundos = new Date().getSeconds();

  let horaCompleta = document.write(`<p>${hora}:${min}:${segundos}</p>`);

  setTimeout(reloj, 1000);

}







