/* Escribe un programa en el que se solicite al usuario que escriba un título para una
página. A continuación se abrirá una nueva ventana de 400 píxeles de alto por 500
píxeles de ancho, en la que se podrá leer el título ingresado por el usuario.
 La nueva ventana ha de visualizarse arriba y a la derecha de la pantalla del
usuario.
 La ventana principal ha de contener un botón cerrar ventana, que permita 
cerrar la ventana secundaria */


var nuevaVentana;
function abrirPagina() {

    nuevaVentana = window.open("", "ventanaSecundaria", "width=500,height=400,left=" + (screen.width - 500));
    nuevaVentana.document.write(`<title>ventana segundaria</title>`);

    document.write(`<button onclick="cerrarVentana()">cerrar ventana</button>`);

}
function cerrarVentana() {
    nuevaVentana.close();
}

/* Nombre del archivo: T3_ej13.html
Escribe un programa que tenga un botón abrir ventana. Al pulsar sobre el botón ha de
aparecer una nueva ventana secundaria.
 La ventana secundaria ha de contener un botón cerrar ventana, que permita
cerrarse a sí misma.
 La ventana principal también tendrá un botón cerrar ventana secundaria, para
poder cerrar la ventana secundaria. */


function abrirVentana() {

    document.write(`<button onclick=newVentana()>Abrir ventana</button>`);
    //boton ultimo ejercicio
   // document.write(`<button onclick=enviarMensaje() style="margin-left: 20px;">Envía un mensaje a la ventana secundaria</button>`);
}

var ventana = "";
var texto;
function newVentana() {
    texto = "Este es un mensaje de la ventana secundaria";
    ventana = window.open("", "ventana secundaria", "width=500,height=400");
    ventana.document.write(`<button onclick=window.close()>Cerrar ventana</button>`);
    ventana.document.write(`<button onclick=recibirMensajeDeTexto(texto) style="margin-left: 20px;">Envía un mensaje a la ventana secundaria</button>`);
}



/* Nombre del archivo: T3_ej14.html
Crea una nueva página que contenga el texto Haz clic aquí.
 Cuando el usuario haga clic sobre alguna parte del texto se han de generar
cinco ventanas emergentes de Google, de tamaño 350x350px.
 En cada ventana aparecerá el texto ventana 1, ventana 2… ventana 5.
 Cada ventana tendrá un botón Cerrar que permita cerrarla */

var element;
function hazClick() {

    document.write(`<a onclick=generarVentanas()>Haz click aqui</a>`);


}

function generarVentanas() {

    // let nombre;

    for (let i = 0; i < 5; i++) {

        let ventana = window.open("https://www.google.es", "", "width=350,height=350");
        ventana.document.write(`
            <head><title>ventana${i + 1}</title></head>
            <body>
                <h1>Ventana ${i + 1}</h1>
                <button onclick="window.close()">Cerrar ventana</button>
            </body>
        `);

    }
}

/* Nombre del archivo: T3_ej15.html
Crea una página web que muestre el mensaje Hemos cambiado de ubicación esta
página. En breves momentos será redireccionado... junto a una cuenta atrás que
muestre 5, 4, 3, 2, 1 (correspondiente a 5 segundos). Tras transcurrir los 5 segundos y
mostrarse la cuenta atrás, el usuario debe ser redireccionado a la url
http://www.pccomponentes.com. */

function cambioDeUbicacion() {
    let contador = 5;

    document.write(`<p>Hemos cambiado de ubicación esta
                    página. En breves momentos será redireccionado...<strong id="contador">${contador}</strong></p>`);

    setInterval(() => {
        contador--;
        cambiar = document.getElementById("contador");
        cambiar.innerHTML = `${contador}`

        if(contador === 0 ){
            location.href = "http://www.pccomponentes.com";
        }
    }, 1000);

}

/* Sobre el ejercicio T3_ej13, añade el código siguiente en el documento
ventanaSecundaria.html: */


