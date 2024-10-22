// Datos simulados del carrito
let cart = [
    { id: 1, nombre: 'Producto A', cantidad: 2, precio: 10.00 },
    { id: 2, nombre: 'Producto B', cantidad: 1, precio: 20.00 }
];

function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    cartItems.innerHTML = ''; // Limpiar contenido previo
    let total = 0;

    cart.forEach(item => {
        const totalItem = item.cantidad * item.precio;
        total += totalItem;
        cartItems.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td><input type="number" value="${item.cantidad}" min="1" onchange="cambiarCantidad(${item.id}, this.value)"></td>
                <td>$${item.precio.toFixed(2)}</td>
                <td>$${totalItem.toFixed(2)}</td>
                <td><button onclick="eliminarProducto(${item.id})">Eliminar</button></td>
            </tr>
        `;
    });

    totalAmount.textContent = `$${total.toFixed(2)}`;
}

function cambiarCantidad(id, nuevaCantidad) {
    const producto = cart.find(item => item.id === id);
    if (producto) {
        producto.cantidad = parseInt(nuevaCantidad);
        actualizarCarrito();
    }
}

function eliminarProducto(id) {
    cart = cart.filter(item => item.id !== id);
    actualizarCarrito();
}

// Inicializar la visualización del carrito
actualizarCarrito();
