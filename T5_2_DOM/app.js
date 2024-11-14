/* Crea una página web con al menos tres párrafos de texto y dentro de ellos un número
        indeterminado de enlaces (al menos uno debe enlazar a google). Haciendo tan sólo
        uso del DOM muestra los siguientes datos:
        • Número de enlaces de la página
        • Dirección a la que enlaza el penúltimo enlace
        • Numero de enlaces que enlazan a google
        • Número de enlaces del tercer párrafo */

function contarEnlaces() {
    let enlaces = document.getElementsByTagName('a');
    return enlaces.length;
}

function penultimoEnlace() {

    let enlaces = document.getElementsByTagName('a');

    return enlaces[enlaces.length -2].href
}

function enlacesQueEnlazanGoogle(){

    contador = 0;
    let enlaces = document.getElementsByTagName('a');

    Array.from(enlaces).forEach(element => {
        if(element.href.includes("google")){
            contador++;
        }
    });

    return contador;
}

function numeroEnlacesParrafo3(){

    let parrafo = document.getElementsByTagName('p')

    return parrafo[2].children.length;
    
}

/* 2. Imagina que para una web que estás diseñando se te pide que en un apartado sólo se
muestre una parte de un texto, y al pulsar un enlace “Ver Articulo Completo” se
muestre el resto del texto. Implementa esta funcionalidad en una nueva página. */

function mostrarMas(){

    let span = document.querySelector(".articuloCompleto");
    span.style.display = 'block';

    let propiedade = document.getElementsByTagName('span')
    /* if(span.) */
    console.log(propiedade)
}

/* 3. Mejora el ejercicio anterior cambiando el enlace “Ver Articulo Completo” por
“Ocultar Articulo” que lo devuelve a su forma original. */

function mostrarMas2(){

    let span = document.querySelector(".articuloCompleto");
    let enlace = document.querySelector('a');
    
    if(span.style.display == "block"){
        enlace.innerHTML = "Ver Articulo Completo";
        span.style.display = 'none';
    }else{
        
        enlace.innerHTML = "Ocultar Articulo";
        span.style.display = 'block';
    }
}


/* 4. Crea una web con una lista de elementos y un botón que cada vez que pulsemos
introduzca una entrada nueva en la lista. */


function anadirElemento(){

    let nuevoElemento = document.createElement('li');
    let contador = document.getElementsByTagName('li');

    nuevoElemento.textContent = "elemento " + contador.length

    document.getElementsByTagName('ul')[0].appendChild(nuevoElemento)
}


/* 5. Estás diseñando una aplicación web para subir ficheros al servidor. Haciendo uso de
DOM, consigue que el usuario pueda adjuntar tantos ficheros como desee. Por tanto
inicialmente será necesario un input de tipo fichero, un botón “Adjuntar otro fichero”
y un segundo botón “Enviar”, de modo que al pulsar el primero de los botones
automáticamente aparezca otro input para elegir fichero. */


function adjuntarNuevoFichero() {

    let nuevoFichero = document.createElement('input');
    nuevoFichero.type = 'file'
    
    document.getElementsByTagName('p')[0].appendChild(nuevoFichero)
}

/* 6. Se desea realizar mediante DOM un visor de imágenes. Para ello en tu página se
mostrará una imagen, junto a dos botones “Siguiente” y “Anterior”. Impleméntala la
funcionalidad para poder navegar entre un conjunto de imágenes que tendrás
previamente preparadas. */

/* const imagenes = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg"]; */

function siguienteImagen() {
    let imagen = document.getElementsByTagName('img')[0];
    let contador = parseInt(imagen.src.split("/")[6].split(".")[0]);
    let siguiente = contador +1;

    console.log(contador);
    
    console.log(siguiente);
    
    if (siguiente == imagenes.length) {
        siguiente = 0;
    }

    imagen.src = "./img/" + imagenes[siguiente];
}

function anteriorImagen() {
    let imagen = document.getElementsByTagName('img')[0];
    let contador = parseInt(imagen.src.split("/")[6].split(".")[0]);
    let siguiente = contador - 1;

    console.log(contador);
    
    if (siguiente <= 0) {
        siguiente = imagenes.length -1;
    }

    imagen.src = "./img/" + imagenes[siguiente];
}



