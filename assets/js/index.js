const getProducts = async () => {
  const respuesta = await fetch('/assets/data/data.json');
  return await respuesta.json();
};

const ListadoProductos = document.querySelector('#listadoProductos');
ListadoProductos.classList.add('row', 'w-100');

const renderProductos = async () => {
  const productos = await getProducts();

  productos.forEach(producto => {
    //CARD
    const card = document.createElement('div');
    card.classList.add('card', 'col-4');

    card.innerHTML = `
        <div class="card-body">
          <img src="${producto.imgUrl}" class="card-img-top" style="max-width: 50%; height: auto;">
          <h3 class="card-title">${producto.nombre}</h3>
          <p class="card-text">Precio: ${producto.precio}</p>
          <a href="/detalle.html?pid=${producto.id}" class="btn btn-primary">Ver detalle</a>
        </div>
    `;
    ListadoProductos.appendChild(card);
  });
};

renderProductos();