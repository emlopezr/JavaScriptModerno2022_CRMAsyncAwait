// Módulos importados
import { imprimirAlerta, validarVacios } from './funciones.js';
import { nuevoCliente } from './API.js';

// IFEE para proteger las funciones de este archivo
(function () {
    // Selector y evento del formulario
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        // Prevenir submit por default
        e.preventDefault();

        // Leer valores de los campos
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        // Validar que ningún campo esté vacío
        const cliente = { nombre, email, telefono, empresa }

        if (validarVacios(cliente)) {
            // Mostrar mensaje de error y parar la ejecución
            imprimirAlerta(formulario, 'Todos los campos son obligatorios', 3);
            return;
        }

        // Insertar nuevo cliente en la API -> JSON Server genera automáticamente un ID
        nuevoCliente(cliente);
    }
})();