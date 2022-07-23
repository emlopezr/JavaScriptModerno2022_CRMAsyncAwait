// Módulos importados
import { obtenerClientes, eliminarCliente } from './API.js';

// IFEE para proteger las funciones de este archivo
(function () {
    // Selectores y eventos
    document.addEventListener('DOMContentLoaded', mostrarCilientes)

    const listado = document.querySelector('#listado-clientes');
    listado.addEventListener('click', confirmarEliminacion)

    async function mostrarCilientes() {
        // Esperar a que se obtengan todos los clientes
        const clientes = await obtenerClientes();

        // Iterar la lista de clientes para mostrarlos en la lista
        clientes.forEach(cliente => {
            // Destructuring
            const { nombre, email, telefono, empresa, id } = cliente;

            // Generar fila de la tabla
            const row = document.createElement('TR');
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            // Imprimirlo en la tabla
            listado.appendChild(row);
        });
    }

    function confirmarEliminacion(e) {
        // Delegarion para verificar si se dió click al botón eliminar
        if (!e.target.classList.contains('eliminar')) {
            return;
        }

        // Recuperar el ID del cliente que se va a eliminar
        const clienteId = parseInt(e.target.dataset.cliente);

        // Alerta de confirmación 
        const confirmar = confirm('¿Deseas eliminar este registro?');

        if (confirmar) {
            // Eliminar el registro
            eliminarCliente(clienteId);
        }
    }
})();