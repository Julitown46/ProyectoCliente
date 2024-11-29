import { empresas, inicializarDatos, eliminarEmpresa } from '../main.js';

export function actualizarTablaEmpresas() {
    const tabla = document.getElementById("tablaEmpresas");
    tabla.innerHTML = "";

    empresas.forEach((empresa) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td class="text-white">${empresa.id}</td>
            <td class="text-white">${empresa.nombre}</td>
            <td class="text-white">${empresa.latitud}, ${empresa.longitud}</td>
            <td class="text-white">${empresa.fundacion}</td>
        `;

        const accionesTd = document.createElement("td");

        const btnEditar = document.createElement("a");
        btnEditar.href = `./editarEmpresa.html?id=${empresa.id}`;
        btnEditar.className = "btn btn-primary btn-sm me-2";
        btnEditar.textContent = "Editar";
        accionesTd.appendChild(btnEditar);

        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-secondary btn-sm";
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            if(eliminarEmpresa(empresa.id)){
            actualizarTablaEmpresas();
            alert("Empresa eliminada correctamente.");
            }
        });
        accionesTd.appendChild(btnEliminar);

        fila.appendChild(accionesTd);
        tabla.appendChild(fila);
    });
}

inicializarDatos();
actualizarTablaEmpresas();