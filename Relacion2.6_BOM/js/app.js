/* 1.Muestra, maquetada en una tabla HTML toda la informacion que puedas extraer
mediante JavaScript del navegador cliente */


function navegador() {

    const valor = [
        navigator.appCodeName, navigator.product, navigator.userAgent,
        navigator.platform, navigator.language, navigator.onLine,
        navigator.javaEnabled(), navigator.cookieEnabled
    ];
    const propiedades = [
        "navigator.appCodeName", "navigator.product", "navigator.userAgent",
        "navigator.platform", "navigator.language", "navigator.onLine",
        "navigator.javaEnabled()", "navigator.cookieEnabled"
    ];

    for (let i = 0; i < propiedades.length; i++) {


        document.write(`<tr> 
                        <td>${propiedades[i]}</td>
                        <td>${valor[i]}</td>
                       </tr>`);
    }
}

/* 2.Realiza lo mismo para la informaci n de la pantalla utilizada por el cliente. */

function pantalla() {

    const valor = [
        screen.width, screen.height, screen.availWidth,
        screen.availHeight, screen.colorDepth, screen.pixelDepth,

    ];
    const propiedades = [
        "screen.width", "screen.height", "screen.availWidth",
        "screen.availHeight", "screen.colorDepth", "screen.pixelDepth",
    ];

    for (let i = 0; i < propiedades.length; i++) {


        document.write(`<tr> 
                        <td>${propiedades[i]}</td>
                        <td>${valor[i]}</td>
                       </tr>`);
    }
}

/* 3.Crea una página con una serie de enlaces que realicen lo que se pide en los siguientes
apartados:*/

//a) Abre una ventana de confirmacin, mostrando que opción ha pulsado el usuario.

function confirmar() {
    let texto;
    if (window.confirm("Presiona un botón")) {
        texto = "Has dado a aceptar!!";

    } else {
        texto = "Has dado a cancelar!!";

    }
    document.getElementById("parrafo").innerHTML = texto;

}


//b) Abre una ventana y después analiza si esta se cerrado o no

function abrirVentana() {

    let ventana = window.open("", "Nueva ventana", "width=400,height=300");

    const comprobar = setInterval(() => {
        if (!ventana || ventana.closed) {
            document.getElementById("parrafo").innerHTML = "La ventana está cerrada";
        } else {
            document.getElementById("parrafo").innerHTML = "La ventana sigue abierta";

        }
    }, 1000);
}

//c) Abre una ventana y pide al usuario un nuevo nombre para ella.

function ventanaNuevoNombre() {

    let ventana = window.open("", "Nueva ventana", "width=300,height=300");

    let nombre = prompt("Introduzca un nuevo nombre para la ventana");

    if (nombre) {

        ventana.document.title = nombre;
        document.getElementById("parrafo").innerHTML = `El titulo introducido es: ${nombre}`;
    } else {
        document.getElementById("parrafo").innerHTML = `No has introducido ningún nombre`;
    }

}
/* d) El primer enlace permite cerrar la ventana actual y el segundo cierra una
ventana abierta con el método open() en la variable ventanaNueva. */
let ventanaNueva;

function cerrarVentanaActual() {

    window.close();
}

function abrirNuevaVentana() {

    ventanaNueva = document.open("", "Nueva ventana", "width=300, height=300");
}

function cerrarVentanaNueva() {

    if (ventanaNueva && !ventanaNueva.closed) {

        ventanaNueva.close();


    } else {
        document.getElementById("parrafo").innerHTML = `La ventana nueva está cerrada o no se ha abierto`;
    }
}

/*   
  

  

  j) Mueve la barra de desplazamiento 10 pixeles hacia abajo.
      k) Desplaza la barra de desplazamiento a una determinada posición.
*/

//  f) Abre una ventana de un tama o de 300x100 que puede ser cambiada de tamaño

let ventana;
let ancho;
let alto;
function cambioDeTamaño() {

    ancho = 300;
    alto = 100;
    ventana = window.open("", "ventana", `width=${ancho},height=${alto},resizable=yes`);
    ventana.document.write(`
        <h2>Esta es una nueva ventana</h2>
        <button id="cambiar-tamano">Cambiar Tamaño Aleatorio</button>
        <button id="escribir-texto">Hola mundo</button>
        <script>
        document.getElementById('cambiar-tamano').onclick = function() {

        const nuevoAncho = Math.floor(Math.random() * 500) + 100; 
        const nuevoAlto = Math.floor(Math.random() * 300) + 100; 
      
      
        window.resizeTo(nuevoAncho, nuevoAlto);
    };
    
    document.getElementById('escribir-texto').onclick = function() {
      
      if (window.opener) {
        window.opener.document.body.innerHTML += "<p>Texto añadido desde la ventana nueva.</p>";
      }
    };
    
  </script>`);
}
/* h) Mueve la ventana 50 pixeles hacia abajo y hacia la derecha al activar el enlace */
function mueveVentana() {

    let mover = function () {
        if (ventana && !ventana.closed) {
            ventana.moveBy(0, 50);
        } else {
            ventana = window.open("", "ventana", `width=300,height=200,resizable=yes`);
        }
    };

    // Usar la variable para mover la ventana
    mover();
}

/*  4.Crea una página con una serie de enlaces que realicen lo que se pide en en los
 siguientes apartados:

 a)Define un enlace que se desplaza hasta una línea en la que existe un
 marcador. El marcador está en un enlace que si se activa muestra el nombre
 de este */

function mostrarNombre(nombre) {
    document.getElementById('nombreMarcador').textContent = "Has llegado al: " + nombre;
}

/* b) Indica el nombre del host en el que está publicada la página que estamos
viendo. */

function mostrarHost() {
    document.getElementById('nombreHost').textContent = "El nombre del host es: " + window.location.hostname;
}

/* c) Devuelve la URL completa de la página actual. */

function mostrarUrl() {

    document.getElementById('urlCompleta').textContent = "La URL completa es: " + urlCompleta;

}

/* d) Pregunta por una dirección y la activas en el navegador actual. */

function direccion() {


    var direccion = prompt("Introduce una dirección URL completa:");


    if (direccion) {

        window.location.href = direccion;
    } else {
        alert("No se introdujo ninguna dirección.");
    }
}

/* e) Indica el protocolo que se está utilizando en la página actual. */


function mostrarProtocolo() {
    document.getElementById('protocolo').textContent = "El protocolo es: " + window.location.protocol;
}

/* f) Crea un enlace que al activarlo recarga de nuevo la página. */
function recargarPagina() {
    // Recargar la página actual
    location.reload();
}

/* 5.Crea una página con una serie de enlaces que realicen lo que se pide en á
los siguientes apartados:
a) escribe en el documento la fecha de la última actualización */

function ultimaFechaModificacion() {

    document.getElementById('ultimaActualizacion').textContent = "Última actualización: " + document.lastModified;
}

/* b) muestra la URL desde la cual se ha activado el enlace que ha llevado al usuario hasta el
documento actual. */

function urlActivada() {

    var urlReferencia = document.referrer;

    if (urlReferencia) {

        document.getElementById('urlReferencia').textContent = "URL desde la que llegaste: " + urlReferencia;
    } else {
        document.getElementById('urlReferencia').textContent = "No hay URL de referencia disponible.";
    }
}

/* c) muestra el título del documento actual */

function mostrarTitulo() {

    var titulo = document.title;
    document.getElementById('tituloDocumento').textContent = "El título del documento es: " + titulo;
}

/* d) muestra la dirección URL completa. */

function urlEntera() {

    var urlCompleta = window.location.href;
    document.getElementById('urlCompleta').textContent = "La URL completa es: " + urlCompleta;
}


/* e) Un documento se abre automáticamente cuando empieza a cargarse y se cierra cuando
termina de hacerlo. As pues, si deseamos escribir en un documento sin sobreescribir su
contenido, deberemos hacerlo antes de que éste termine de cargar. Si lo hacemos después,
sobreescribiremos su contenido. Implementa dos ejemplos que lo demuestren  */
function antesDeTerminarDeCargar() {

    // Escribir en el documento antes de que termine de cargarse
    document.write("<p>Este texto se agregó antes de que el documento terminara de cargarse.</p>");
}

function sobreEscribirContenido() {

    window.onload = function () {
        // Escribir en el documento después de que ha terminado de cargarse
        document.write("<p>Este texto sobrescribió todo el contenido porque se escribió después de que el documento terminó de cargarse.</p>");
    };
}


/* a) Muestra el n mero de anclas que tiene el documento. */

function numeroAnclas() {

    let numeroDeAnclas = document.anchors.length + 1;
    document.getElementById('numAnclas').textContent = "El número de anclas en el documento es: " + numeroDeAnclas;

}

/*  b) Muestra el texto dentro del tag del primer ancla (innerHTML). */

function mostrarTextoDentroTag() {

    var textoPrimerAncla = document.anchors[0].innerHTML;
    document.getElementById('textoPrimerAncla').textContent = "El texto del primer ancla es: " + textoPrimerAncla;
}

/* c) Muestra el n mero de imágenes del documento  */

function numImagenes() {

    let numeroDeImagenes = document.images.length;
    document.getElementById('numImagenes').textContent = "El número de imágenes en el documento es: " + numeroDeImagenes;
}

/* d) Muestra el id de la primera imagen */

function mostrarID() {

    let idPrimeraImagen = document.images[0].id;
    document.getElementById('idPrimeraImagen').textContent = "El ID de la primera imagen es: " + idPrimeraImagen;
}

/* e) Muestra el n mero de enlaces del documento */
function mostrarNumEnlaces() {

    let numeroDeEnlaces = document.links.length;
    document.getElementById('numEnlaces').textContent = "El número de enlaces en el documento es: " + numeroDeEnlaces;
}

/* f) Cambia el título del documento */


function cambiaTitulo() {

    document.title = "Nuevo Título del Documento";
    document.getElementById('mensaje').textContent = "El título del documento ha sido cambiado a: " + document.title;
}