// Recuperamos el carrito previo o iniciamos uno vacío [cite: 45]
let carrito = JSON.parse(localStorage.getItem('pablo_store')) || [];

function cleanInputString(str) {
    // Sanitización de datos para seguridad del examen [cite: 44]
    return str.replace(/[<>]/g, "");
}

function agregarAlCarrito(nombre, precio) {
    const item = {
        id: Date.now(), // ID único para poder eliminarlo después [cite: 49]
        name: cleanInputString(nombre),
        price: parseFloat(precio)
    };
    
    // Guardamos en el array y luego en LocalStorage [cite: 45]
    carrito.push(item);
    localStorage.setItem('pablo_store', JSON.stringify(carrito));
    
    // Actualizamos el contador visual en el header [cite: 48, 58]
    actualizarContador();

    // Feedback visual rimbombante
    alert(`🎸 ¡${nombre} ha sido añadido a tu carrito!`);
}

function actualizarContador() {
    const contador = document.getElementById('cart-count');
    if(contador) {
        contador.innerText = carrito.length;
        // Animación sutil de escala al cambiar el número
        contador.style.transform = "scale(1.2)";
        setTimeout(() => contador.style.transform = "scale(1)", 200);
    }
}

// Ejecutar al cargar la página para mostrar lo que ya había
actualizarContador();