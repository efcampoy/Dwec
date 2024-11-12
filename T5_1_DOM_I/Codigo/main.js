import { arrArticulos } from "./modulos/articulos.mjs";

//Funcion Main
(function Main() {
  console.log("Mostrando artículos");
  const section = document.querySelector('section');
  console.log(arrArticulos);
  arrArticulos.forEach((articulo) => {
    const articuloContainer = document.createElement('div');
        
        // Crear y agregar el título
        const titulo = document.createElement('h2');
        titulo.textContent = articulo.title;
        articuloContainer.appendChild(titulo);

        // Crear y agregar la descripción
        const descripcion = document.createElement('p');
        descripcion.classList.add('description');
        descripcion.textContent = articulo.description;
        articuloContainer.appendChild(descripcion);

        // Crear y agregar la imagen
        const imagen = document.createElement('img');
        imagen.src = articulo.image;
        imagen.alt = "imagen del producto";
        articuloContainer.appendChild(imagen);

        // Crear y agregar el precio
        const precio = document.createElement('p');
        precio.classList.add('price');
        precio.textContent = articulo.price;
        articuloContainer.appendChild(precio);

        // Agregar el contenedor del artículo a la sección principal
        section.appendChild(articuloContainer);


    console.log(articulo);
  });
})();

