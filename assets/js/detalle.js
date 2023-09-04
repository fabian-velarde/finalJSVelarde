const getProducts = async () => {
    const respuesta = await fetch("assets/data/data.json");
    return await respuesta.json();
  };
  
  const detalleProducto = document.querySelector("#detalleProducto");
  detalleProducto.classList.add("w-100");
  
  const renderProductoDetalle = async () => {
    const productos = await getProducts();
  
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("pid");
  
    const producto = productos.find((p) => p.id === parseInt(productId));
  
    if (producto) {
      const div = document.createElement("div");
      div.classList.add("card");
  
      const img = document.createElement("img");
      img.src = producto.imgUrl;
      img.classList.add("card-img-top");
      img.style.width = "70%";
      img.style.height = "auto";
  
      const nombre = document.createElement("h3");
      nombre.textContent = `Nombre: ${producto.nombre}`;
  
      const precio = document.createElement("p");
      precio.textContent = `Precio: $${producto.precio}`;
  
      const categoria = document.createElement("p");
      categoria.textContent = `Categoría: ${producto.categoria}`;
  
      const stock = document.createElement("p");
      stock.textContent = `Stock: ${producto.stock}`;
  
      const botonComprar = document.createElement("button");
      botonComprar.textContent = "Agregar al carrito";
      botonComprar.classList.add("btn", "btn-primary");
      botonComprar.onclick = () => agregarAlCarrito(producto.id);
  
      div.appendChild(img);
      div.appendChild(nombre);
      div.appendChild(precio);
      div.appendChild(categoria);
      div.appendChild(stock);
      div.appendChild(botonComprar);
      detalleProducto.appendChild(div);
    } else {
      const mensaje = document.createElement("p");
      mensaje.textContent = "Producto no encontrado";
      detalleProducto.appendChild(mensaje);
    }
  };
  
  const agregarAlCarrito = (productId) => {
    // Lógica para agregar el producto al carrito
  
    // Redireccionar al HTML del carrito
    window.location.href = "/carrito.html";
  };
  
  renderProductoDetalle();