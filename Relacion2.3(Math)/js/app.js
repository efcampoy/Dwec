/* 1. Crea una página en la que se muestre:
• Un número aleatorio entre 0 y 1.
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un nº aleatorio entre esos dos
valores. */

function numeroAleatorio(numero1, numero2) {

    let generarAleatorio = 0;

    if (numero1 > numero2) {

        generarAleatorio = Math.round(Math.random() * (numero1 - numero2) + numero2);
    } else {

        generarAleatorio = Math.round(Math.random() * (numero2 - numero1) + numero1);
    }

    return generarAleatorio;
}

/* En un nueva página web, pide al usuario un ángulo y calcula su seno,
coseno y tangente. */

function calcular() {

    let angulo = parseFloat(prompt("Introduce un entre 0 grados y 360 grados:"));
    let coseno = 0;
    let tangente = 0;
    let seno = 0;

    if (angulo < 0 | angulo > 360) {
        return `No se puede calcular un angulo si el número introducido es meno a 0 o mayor a 360`;
    } else {
        coseno = Math.cos(angulo);
        tangente = Math.tan(angulo);
        seno = Math.sin(angulo);
    }

    return `El resultado es:</br> seno = ${seno} </br> coseno = ${coseno} </br> tangente = ${tangente}`;
}

/* 3. Crea una web que e calcula la hipotenusa de un triangulo rectangulo
(pidiendo al usuario el tamaño de los dos catetos). */

function hipotenusa(){

    let cateto1  = parseFloat(prompt("Introduce el cateto 1 :"));
    let cateto2  = parseFloat(prompt("Introduce el cateto 2 :"));

    let resultado = Math.sqrt( (Math.pow(cateto1,2) + Math.pow(cateto2,2)));

    return`La hipotenusa del triangulo  rectangulo es: ${Math.sqrt(Math.pow(resultado,2)).toFixed(2)}`;
}

/* 4. Mejora el ejercicio anterior para que continúe realizando el mismo cálculo
hasta que el usuario decida que no quiere continuar. */

function hipotenusaConSalida(){

    let salir = true;

    while(salir){

        let cateto1  = parseFloat(prompt("Introduce el cateto 1 :"));
        let cateto2  = parseFloat(prompt("Introduce el cateto 2 :"));
    
        let resultado = Math.sqrt( (Math.pow(cateto1,2) + Math.pow(cateto2,2)));

        alert(`La hipotenusa del triangulo  rectangulo es: ${Math.sqrt(Math.pow(resultado,2)).toFixed(2)}`);

        let continuar = prompt("Desea continuar? [s/n o S/N ] :").toLocaleLowerCase();

        if(continuar === "n"){
            salir= false;
        }
        
    }

    return`Gracias por su visita`;
}

/* 5. Crea una web para resolver ecuaciones de segundo grado. Deberá pedir por
tanto los coeficientes y mostrar las soluciones posibles. */
//formula  (-b±√(b²-4ac))/(2a)

function ecuacionesSegundoGrado(){

    let coeficienteA = parseInt(prompt("Introduzca el coeficiente A"));
    let coeficienteB = parseInt(prompt("Introduzca el coeficiente B"));
    let coeficienteC = parseInt(prompt("Introduzca el coeficiente C"));

    let x1 = ((-coeficienteB) + Math.sqrt(Math.pow(coeficienteB,2) - (4 * coeficienteA * coeficienteC))) / (2*coeficienteA);
    let x2 = ((-coeficienteB) - Math.sqrt(Math.pow(coeficienteB,2) - (4 * coeficienteA * coeficienteC))) / (2*coeficienteA);
    
    return `Las posibles soluciones son: </br> a) ${x1} </br> b) ${x2}`;
}

/* 6. Crea una web que calcule potencias */

function potencias(){

    let base = parseInt(prompt("Introduzca la base:"));
    let exponente = parseInt(prompt("Introduzca el exponente:"));

    return `La potencia de ${base} elevado a ${exponente} es:  ${Math.pow(base,exponente)}`;
}

/* 7. Crea una web que genere una tabla con dos columnas. En la primera un
número ascendente y en la otra el valor de su seno. */

function generarTablas(){

    document.write(`<table>`);
    document.write(`<tr>`);
    document.write(`<th> Numero </th>`);
    document.write(`<th> Seno </th>`);
    document.write(`</tr>`);
    
    
    for(let i = 0; i< 360; i+=10){
        
        document.write(`<tr>`);
        document.write(`<td> ${i} </td>`);
        document.write(`<td>  ${Math.sin(i)} </td>`);
        document.write(`</tr>`);
    }
    document.write(`<tbody>`);
    document.write(`</table>`);
}

/* 8. Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles. */

function imagenAleatoria(){

    let aleatorio = Math.random() * 2;

    document.write(`<img src="./img/${Math.round(aleatorio)}.jpg">`);


}