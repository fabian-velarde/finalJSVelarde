// Obtener referencia a los elementos del DOM
const searchInput = document.getElementById('search');
const galleryItems = document.querySelectorAll('.gallery li');
const carritoLista = document.getElementById('carrito-lista');
const carritoTotal = document.getElementById('carrito-total');

// Agregar evento de input al campo de búsqueda
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  // Filtrar los elementos de la galería según el término de búsqueda
  filtrarGaleria(searchTerm);
});

// Agregar evento de click a los botones de agregar al carrito
galleryItems.forEach(item => {
  const addButton = item.querySelector('.btn');
  const itemName = item.querySelector('btn').innerText.split(' - ')[0];
  const itemPrice = item.querySelector('btn').innerText.split(' - ')[1].replace('$', '');

  addButton.addEventListener('click', () => {
    agregarAlCarrito(itemName, itemPrice);
  });
});

// Función para filtrar la galería según el término de búsqueda
function filtrarGaleria(searchTerm) {
galleryItems.forEach(item => {
    const itemText = item.dataset.filter.toLowerCase();
    if (itemText.includes(searchTerm)) {
    item.style.display = 'block';
    } else {
    item.style.display = 'none';
    }
});
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
carrito.push({ nombre, precio });
localStorage.setItem('carrito', JSON.stringify(carrito));

mostrarCarrito();
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    carritoLista.innerHTML = '';
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let total = 0;

    carrito.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.nombre} - $${item.precio}`;
    carritoLista.appendChild(li);

      total += parseInt(item.precio); // Convertir el precio a número entero

      // Asegurarse de que el precio sea un número válido
    if (isNaN(total)) {
        total = 0;
    }
    });

    carritoTotal.innerText = `Total: $${total}`;
}

// Mostrar el contenido del carrito al cargar la página
mostrarCarrito();

