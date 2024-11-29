import {Empresa} from "./empresa/Empresa.js";
import {Videojuego} from "./videojuego/Videojuego.js";

export let empresas = []; 
export let videojuegos = []; 

export function agregarEmpresa(empresa) {
    if (empresa instanceof Empresa) {
        empresas.push(empresa);
    } else {
        throw new Error("El objeto no es una instancia válida de Empresa");
    }
}

export function agregarVideojuego(videojuego) {
    if (videojuego instanceof Videojuego) {
        videojuegos.push(videojuego);
    } else {
        throw new Error("El objeto no es una instancia válida de Videojuego");
    }
}

export function eliminarEmpresa(id) {
    const tieneVideojuegos = videojuegos.some((vj) => vj.empresaId === id);
    if (tieneVideojuegos) {
        throw new Error("No se puede eliminar la empresa porque tiene videojuegos asociados.");
    }
    const index = empresas.findIndex((empresa) => empresa.id === id);
    if (index !== -1) {
        empresas.splice(index, 1);
    }
}

export function eliminarVideojuego(id) {
    const index = videojuegos.findIndex((vj) => vj.id === id);
    if (index !== -1) {
        videojuegos.splice(index, 1);
    }
}