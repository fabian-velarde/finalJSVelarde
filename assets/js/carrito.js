const renderCarrito = () => {
    // Obtener el elemento del HTML donde se mostrará el carrito
    const carritoContainer = document.getElementById('carrito-container');
  
    // Limpiar el contenido actual del carrito
    carritoContainer.innerHTML = '';
  
    // Recorrer los productos en el carrito
    carrito.forEach((producto) => {
      // Crear un elemento de lista para cada producto
      const productoLi = document.createElement('li');
  
      // Agregar la información del producto al elemento de lista
      productoLi.innerHTML = `
        <span>${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}</span>
        <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
      `;
  
      // Agregar el elemento de lista al carrito
      carritoContainer.appendChild(productoLi);
    });
  };
  
  // Llamar a la función para renderizar el carrito inicialmente
  renderCarrito();