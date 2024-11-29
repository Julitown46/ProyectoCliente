import {Empresa} from "./Empresa.js";
import { empresas, agregarEmpresa, eliminarEmpresa } from '../main.js';

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
            <td>
                <a href="./editarEmpresa.html?id=${empresa.id}" class="btn btn-primary btn-sm">Editar</a>
                <button class="btn btn-secondary btn-sm" onclick="eliminarEmpresa(${empresa.id})">Eliminar</button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

const empresa1 = new Empresa(1, "FromSoftware", 313131, 31313131, "13/02/2012");
agregarEmpresa(empresa1);
actualizarTablaEmpresas();