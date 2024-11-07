/* 1.-Personas:
• Crear un objeto literal persona con nombre y edad y una método que determine si es mayor de edad o no.
• Crear una función constructora que permita crear objetos del tipo personas pasándole solo un nombre y edad, agregar el método.
• Crear un array que contenga varios objetos persona 
• Crear una función que reciba el array y devuelva la edad promedio del grupo de personas. */


const persona = {
    nombre: "Pepe",
    edad: 20,
    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }
};


function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.esMayorDeEdad = function() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    };
}

const personas = [
    new Persona("Pepe", 20),
    new Persona("Juan", 27),
    new Persona("Antonio", 17),
    new Persona("Jesus", 25)
];


function promedioEdad(personasArray) {
    let totalEdad = 0;
    personasArray.forEach(persona => {
        totalEdad += persona.edad;
    });
    return totalEdad / personasArray.length;
}

/* 2.-Teléfono:
• Crear una función constructora que devuelva objetos del tipo teléfono, 
como argumento debe recibir un número de teléfono, 
el objeto creado tiene el número de llamadas que debe ser inicializado en cero 
y un método llamar que debe aumentar el número de llamados en uno. */

function Telefono (telefono) {
    this.telefono = telefono;
    this.llamadas = 0;
    this.llamar = function () {
        return this.llamadas++;
    }
}


/* 3.-Puntos y líneas:
• Crear la función constructura punto que recibe un par de coordenadas (x,y) 
y devuelve un objeto punto en esa posición.
• Crear la función constructora recta que recibe como argumento 2 puntos. */

function Punto (punto1, punto2) {
    this.punto1 = punto1;
    this.punto2 = punto2;
}

function Recta (x, y) {
    this.x = x;
    this.y = y;
}

/* 4.- Viviendas.html
Queremos hacer una aplicación en JavaScript para gestionar las viviendas (casas) 
de una serie de clientes de una empresa dedicada a la seguridad y protección de las mismas. 
Para ello queremos almacenar la siguiente información de cada vivienda:

calle.
número.
código postal */

/* Se pide:
• Crear un objeto que nos permita instanciar casas. 
Cada vez que instanciemos una casa le pasaremos la calle, número y código postal como parámetros. 
Se pide además crear los siguientes métodos para el objeto Casa: */

function Casa (calle, numero, codigo_postal) {

    this.calle = calle,
    this.numero = numero,
    this.CP = codigo_postal,
    // setNumero(numero) // Se le pasa el nuevo número de la casa para que lo actualice.
    this.setNumero = function(numero){
        this.numero = numero;
    };
    //setCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.
    this.setCalle =function(calle){
        this.calle = calle;
    };
    //setCodigoPostal(codigo) // Se le pasa el nuevo número de código postal de la casa.
    this.setCodigoPostal = function(codigo){
        this.CP = codigo;
    };

    // imprimeCalle // Devuelve el nombre de la calle de la casa.
    this.imprimeCalle = function(){
       return this.calle;
    };

    //imprimeNumero // Devuelve el número de la casa.
    this.imprimeNumero = function(){
        return this.numero;
    };

    // imprimeCodigoPostal // Devuelve el código postal de la casa.
    this.imprimeCodigoPostal = function(){
        return this.CP;
    };

    // Cada vez que se da de alta una nueva casa, que muestre automáticamente un mensaje del estilo:
    //Nueva casa en calle: xxxxxx, nº: xx, CP: xxxxx.

    document.write(`Nueva casa en calle: ${this.calle} , nº:${this.numero} , CP:${this.CP} <br>`);
}


/* 5.- CentroEducativo.html
Queremos gestionar los colegios/centros educativos de una determinada compañía de enseñanzas concertadas.
✓ Crea el objeto Alumno, con las siguientes propiedades:
Identificador del alumno (número)
Nombre del alumno
Nota media */

function Alumno (numero, nombre_alumno, nota_media){

    this.numero = numero,
    this.nombre = nombre_alumno,
    this.nota_media = nota_media
}

/* Crea el objeto Colegio con las siguientes propiedades:
Nombre del colegio
Número de aulas
Número de alumnos
Array con los datos de los alumnos */

function Colegio (nombre, numero_aulas, numero_alumnos){

    this.nombre = nombre,
    this.numero_Aulas = numero_aulas,
    this.numero_alumnos = numero_alumnos,

    this.array_alumnos = [],

    /* que inicialice el array de alumnos: la nota media por defecto será de 5.00 
    y el nombre de cada alumno será alumno1, alumno2, alumno3, … 
    El identificador para cada alumno será 0, 1, 2… */

    this.array_alumnos = [
        new Alumno(0, "alumno1", 5.00),
        new Alumno(1, "alumno2", 5.00),
        new Alumno(2, "alumno3", 5.00),
        new Alumno(3, "alumno4", 5.00),
        new Alumno(4, "alumno5", 5.00),
    ]
}


