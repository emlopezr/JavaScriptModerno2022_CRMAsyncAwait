export function imprimirAlerta(contenedor, mensaje, tiempo) {
    console.log('SI');

    // Revisar si ya existe una alerta previa -> Eliminarla e imprimir esta
    const alertaPrevia = document.querySelector('.alerta');

    if (alertaPrevia) {
        alertaPrevia.remove();
        return imprimirAlerta(contenedor, mensaje, tiempo);
    }

    // Generar la alerta
    const alerta = document.createElement('P');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta');
    alerta.innerHTML = `
        <strong class="font-bold">¡Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
    `;

    // Imprimir la alerta en el contenedor indicado
    contenedor.appendChild(alerta);

    // Remover la alerta luego del tiempo indicado
    setTimeout(() => alerta.remove(), tiempo * 1000);
}

export function validarVacios(objeto) {
    return !Object.values(objeto).every(input => input !== '');
}