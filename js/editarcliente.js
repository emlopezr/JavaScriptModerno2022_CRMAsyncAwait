// Módulos importados
import { imprimirAlerta, validarVacios } from './funciones.js';
import { obtenerCliente, editarCliente } from './API.js';

// IFEE para proteger las funciones de este archivo
(function () {
    // Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    // Selectores y eventos
    document.addEventListener('DOMContentLoaded', async () => {
        // Identificar el cliente que se está editando por medio del URL
        const parametrosURL = new URLSearchParams(window.location.search);
        const clienteId = parseInt(parametrosURL.get('id'));

        // Esperar hasta obtener el cliente y rellenar el formulario con sus datos
        const cliente = await obtenerCliente(clienteId);
        mostrarCliente(cliente);

        // Escuchar por el submit del formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    })

    function mostrarCliente(cliente) {
        // Destructuring
        const { nombre, email, telefono, empresa, id } = cliente;

        // Rellenar el formulario con los datos del cliente
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    function validarCliente(e) {
        // Prevenir submit por default
        e.preventDefault();

        // Validar que ningún campo esté vacío
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        if (validarVacios(cliente)) {
            // Mostrar mensaje de error y parar la ejecución
            imprimirAlerta(formulario, 'Todos los campos son obligatorios', 3);
            return;
        }

        // Reesribir el cliente en el API
        editarCliente(cliente);
    }
})();