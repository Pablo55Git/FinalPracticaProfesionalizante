# FinalPracticaProfesionalizante
Repositorio para el final de la materia Práctica Profesionalizante I

## Descripción del Proyecto 
Este proyecto consiste en una plataforma de E-commerce de instrumentos musicales de alta gama. El objetivo principal es ofrecer una experiencia de usuario fluida y visualmente atractiva ("rimbombante"), permitiendo la gestión dinámica de un carrito de compras a través de múltiples páginas.
•	Autor: Pablo 
•	Fecha de creación: Febrero 2026 
________________________________________
Estructura del Proyecto 
El código se organiza en los siguientes archivos clave:
•	index.html: Página principal que contiene el catálogo visual, la marquesina de héroe y los botones de compra.
•	carrito.html: Página secundaria donde se gestionan los productos seleccionados y se visualizan los cálculos finales.
•	style.css: Hoja de estilos centralizada que define la identidad visual (Naranja/Negro), el diseño responsivo y las animaciones.
•	main.js: Lógica de la tienda encargada de la sanitización de datos, la persistencia en el navegador y la actualización del contador en tiempo real.
•	cart-logic.js: Lógica específica del carrito que realiza cálculos automáticos de sumatoria y permite la eliminación dinámica de ítems.
________________________________________
Tecnologías Utilizadas 
•	HTML5: Estructura semántica (header, nav, main, section, article, footer).
•	CSS3: Uso de variables personalizadas, Flexbox, CSS Grid para el catálogo tipo "Mercado Libre" y Media Queries para diseño responsivo.
•	JavaScript (ES6+): Manipulación del DOM, gestión de eventos y uso de la API de localStorage para persistencia de datos.
________________________________________
Características Destacadas
•	Persistencia de Datos: Los productos agregados no se pierden al navegar entre páginas gracias al uso de JSON.parse y localStorage.
•	Sanitización de Strings: Implementación de funciones para limpiar entradas de texto y prevenir errores de renderizado.
•	Cálculos Automáticos: Sumatoria en tiempo real del balance de compra en la página de gestión.
•	Diseño Responsivo: Adaptación completa para dispositivos móviles y tablets.
________________________________________
Instrucciones de Uso 
1.	Clonar el repositorio o descargar los archivos en una misma carpeta.
2.	Abrir el archivo index.html en cualquier navegador moderno (Chrome, Firefox, Edge).
3.	Navegar por el catálogo y hacer clic en "Añadir al Carrito" para cargar instrumentos.
4.	Hacer clic en el icono de Carrito para gestionar la compra y visualizar el total.
________________________________________
Contribuciones 
Si deseas contribuir a este proyecto: 
1.	Realiza un Fork del repositorio.
2.	Crea una rama para tu mejora (git checkout -b mejora-increible).
3.	Envía un Pull Request para revisión.
________________________________________
