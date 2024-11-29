import { videojuegos, empresas, inicializarDatos, eliminarVideojuego } from '../main.js';

export function actualizarTablaVideojuegos() {
    const tabla = document.getElementById("tablaVideojuegos");
    tabla.innerHTML = "";

    videojuegos.forEach((videojuego) => {
        const fila = document.createElement("tr");

        const empresaAsociada = empresas.find((emp) => emp.id === videojuego.empresaId);
        const nombreEmpresa = empresaAsociada ? empresaAsociada.nombre : "Desconocida";

        fila.innerHTML = `
            <td class="text-white">${videojuego.id}</td>
            <td class="text-white">${videojuego.nombre}</td>
            <td class="text-white">${videojuego.genero}</td>
            <td class="text-white">${nombreEmpresa}</td>
            <td class="text-white">${videojuego.fechaLanzamiento}</td>
        `;

        const accionesTd = document.createElement("td");

        const btnEditar = document.createElement("a");
        btnEditar.href = `./editarVideojuego.html?id=${videojuego.id}`;
        btnEditar.className = "btn btn-success btn-sm me-2";
        btnEditar.textContent = "Editar";
        accionesTd.appendChild(btnEditar);

        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-secondary btn-sm";
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            if(eliminarVideojuego(videojuego.id)){
                actualizarTablaVideojuegos();
                alert("Videojuego eliminado correctamente.");
            }
        });
        accionesTd.appendChild(btnEliminar);

        fila.appendChild(accionesTd);
        tabla.appendChild(fila);
    });
}

inicializarDatos();
actualizarTablaVideojuegos();