// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Crear elemento de lista para el producto
    var lista = document.getElementById("carrito-lista");
    var nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = nombre + " - $" + precio;

    // Crear botón de eliminar y agregar evento
    var btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", function() {
        lista.removeChild(nuevoProducto);
        actualizarTotal();
    });

    // Agregar botón al elemento de lista
    nuevoProducto.appendChild(btnEliminar);

    // Agregar producto al carrito
    lista.appendChild(nuevoProducto);

    // Actualizar total del carrito
    actualizarTotal();
}

// Función para actualizar el total del carrito
function actualizarTotal() {
    var lista = document.getElementById("carrito-lista");
    var productos = lista.getElementsByTagName("li");
    var total = 0;

    // Calcular el total sumando los precios de los productos
    for (var i = 0; i < productos.length; i++) {
        var precioTexto = productos[i].textContent.split(" - $")[1];
        var precio = parseFloat(precioTexto);
        total += precio;
    }

    // Mostrar el total en el carrito
    var totalElemento = document.getElementById("carrito-total");
    totalElemento.textContent = "Total: $" + total.toFixed(2);
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    var carrito = localStorage.getItem("carrito");
    if (carrito) {
        var productos = JSON.parse(carrito);
        var lista = document.getElementById("carrito-lista");

        // Crear elementos de lista para los productos en el carrito
        for (var i = 0; i < productos.length; i++) {
            var nuevoProducto = document.createElement("li");
            nuevoProducto.textContent = productos[i].nombre + " - $" + productos[i].precio;

            // Crear botón de eliminar y agregar evento
            var btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn-eliminar");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", function() {
                lista.removeChild(nuevoProducto);
                actualizarTotal();
            });

            // Agregar botón al elemento de lista
            nuevoProducto.appendChild(btnEliminar);

            // Agregar producto al carrito
            lista.appendChild(nuevoProducto);
        }

        // Actualizar total del carrito
        actualizarTotal();
    }
}

// Función para filtrar los productos por nombre
function filtrarProductos() {
    var input = document.getElementById("search");
    var filtro = input.value.toUpperCase();
    var galeria = document.getElementsByClassName("gallery")[0];
    var productos = galeria.getElementsByTagName("li");

    // Recorrer los productos y ocultar los que no coincidan con el filtro
    for (var i = 0; i < productos.length; i++) {
        var nombre = productos[i].textContent.toUpperCase();
        if (nombre.includes(filtro)) {
            productos[i].style.display = "";
        } else {
            productos[i].style.display = "none";
        }
    }
}

// Mostrar el contenido del carrito al cargar la página
mostrarCarrito();

// Función para mostrar el carrito de compras
function mostrarCarrito() {
    var carrito = document.getElementById("carrito");
    carrito.style.display = "block";
}







function toggleCarrito() {
    var carrito = document.getElementById("carrito");
    var toggleButton = document.getElementById("toggleCarrito");
  
    if (carrito.style.display === "none") {
      carrito.style.display = "block";
      toggleButton.innerText = "Ocultar carrito";
    } else {
      carrito.style.display = "none";
      toggleButton.innerText = "Mostrar carrito";
    }
  }

