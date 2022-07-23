// Usando JSON Server -> "json-server db.json -p 4000"

const url = 'http://localhost:4000/clientes';

// Crear un nuevo cliente en el JSON del API 
export const nuevoCliente = async cliente => {
    try {
        // Insertar el cliente en el archivo JSON -> Usando los principios de REST API
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Redirigir al usuario al index
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtener los clientes que hay en el JSON de la API
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// Eliminar el cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// Obtener un cliente por medio de su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;

    } catch (error) {
        console.log(error);
    }
}

export const editarCliente = async cliente => {
    try {
        // Reescribir todo el cliente con el método PUT
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // Redirigir al usuario al index
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}