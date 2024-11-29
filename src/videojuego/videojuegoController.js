import {Videojuego} from "./Videojuego.js";
import {Empresa} from "../empresa/Empresa.js";
import { videojuegos, empresas, agregarVideojuego, eliminarVideojuego } from '../main.js';

function actualizarTablaVideojuegos() {
    const tabla = document.getElementById("tablaVideojuegos");
    tabla.innerHTML = "";

    videojuegos.forEach((videojuego) => {
        const fila = document.createElement("tr");

        const empresaAsociada = empresas.find((emp) => emp.id === videojuego.empresaId);
        const nombreEmpresa = empresaAsociada ? empresaAsociada.nombre : "Desconocida";

        fila.innerHTML = `
            <td class="text-white>${videojuego.id}</td>
            <td class="text-white>${videojuego.nombre}</td>
            <td class="text-white>${videojuego.genero}</td>
            <td class="text-white>${nombreEmpresa}</td>
            <td class="text-white>${videojuego.fechaLanzamiento}</td>
            <td>
                <a href="./editarVideojuego.html?id=${videojuego.id}" class="btn btn-success btn-sm">Editar</a>
                <button class="btn btn-secondary btn-sm" onclick="eliminarVideojuego(${videojuego.id})">Eliminar</button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

const videojuego1 = new Videojuego(1, "Dark Souls", "Souls", 1, "13/02/2011");
agregarVideojuego(videojuego1);
actualizarTablaVideojuegos();