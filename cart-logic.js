// 1. Cargamos la memoria con la clave 'pablo_store'
let carrito = JSON.parse(localStorage.getItem('pablo_store')) || [];

// 2. Referencias a los IDs del HTML
const tablaCuerpo = document.getElementById('cart-body');
const totalDisplay = document.getElementById('total-val');

function renderizarCarrito() {
    // Si no hay elementos, limpiamos la tabla
    if (!tablaCuerpo) return;
    tablaCuerpo.innerHTML = "";
    let acumulado = 0;

    // 3. Dibujamos la lista
    carrito.forEach((producto, indice) => {
        acumulado += producto.price; // Suma de precios
        
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.name}</td>
            <td>$${producto.price.toLocaleString()}</td>
            <td>
                <button class="btn-del" onclick="eliminarDelCarrito(${indice})">
                    Eliminar
                </button>
            </td>
        `;
        tablaCuerpo.appendChild(fila);
    });

    // 4. Actualizamos el total visual
    totalDisplay.innerText = `$${acumulado.toLocaleString()}`;
}

// 5. Función para eliminar y que el contador baje
window.eliminarDelCarrito = function(indice) {
    // Quitamos el producto del array
    carrito.splice(indice, 1);
    
    // Guardamos la lista actualizada en la memoria
    localStorage.setItem('pablo_store', JSON.stringify(carrito));
    
    // IMPORTANTE: Si tenés el contador (cart-count) en esta página, lo actualizamos
    const contador = document.getElementById('cart-count');
    if(contador) {
        contador.innerText = carrito.length;
    }
    
    // Volvemos a dibujar la lista y el total
    renderizarCarrito();
};

// 6. Ejecutar al abrir la página
document.addEventListener('DOMContentLoaded', renderizarCarrito);