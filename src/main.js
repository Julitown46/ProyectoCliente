import {Empresa} from "./empresa/Empresa.js";
import {Videojuego} from "./videojuego/Videojuego.js";

export let empresasDatos = [
    {
        "id": 1,
        "nombre": "From Software",
        "latitud": 35.6895,
        "longitud": 139.6917,
        "fundacion": "1986-11-01"
    },
    {
        "id": 2,
        "nombre": "Santa Monica Studio",
        "latitud": 34.0522,
        "longitud": -118.2437,
        "fundacion": "1999-07-15"
    },
    {
        "id": 3,
        "nombre": "Rockstar Games",
        "latitud": 40.7128,
        "longitud": -74.0060,
        "fundacion": "1998-12-01"
    }
];

export let videojuegosDatos = [
    {
        "id": 1,
        "nombre": "Dark Souls",
        "genero": "RPG",
        "empresaId": 1,
        "fechaLanzamiento": "2011-09-22"
    },
    {
        "id": 2,
        "nombre": "Bloodborne",
        "genero": "Acción",
        "empresaId": 1,
        "fechaLanzamiento": "2015-03-24"
    },
    {
        "id": 3,
        "nombre": "Elden Ring",
        "genero": "Aventura",
        "empresaId": 1,
        "fechaLanzamiento": "2022-02-25"
    },
    {
        "id": 4,
        "nombre": "God of War",
        "genero": "Acción",
        "empresaId": 2,
        "fechaLanzamiento": "2018-04-20"
    },
    {
        "id": 5,
        "nombre": "God of War Ragnarok",
        "genero": "Acción",
        "empresaId": 2,
        "fechaLanzamiento": "2022-11-09"
    },
    {
        "id": 6,
        "nombre": "Grand Theft Auto V",
        "genero": "Mundo Abierto",
        "empresaId": 3,
        "fechaLanzamiento": "2013-09-17"
    },
    {
        "id": 7,
        "nombre": "Red Dead Redemption 2",
        "genero": "Aventura",
        "empresaId": 3,
        "fechaLanzamiento": "2018-10-26"
    }
];

export let empresas = []; 
export let videojuegos = []; 

export function inicializarDatos() {
    empresasDatos.forEach((e) => {
        const nuevaEmpresa = new Empresa(
            e.id,
            e.nombre,
            e.latitud,
            e.longitud,
            e.fundacion
        );
        agregarEmpresa(nuevaEmpresa);
    });

    videojuegosDatos.forEach((vj) => {
        const nuevoVideojuego = new Videojuego(
            vj.id,
            vj.nombre,
            vj.genero,
            vj.empresaId,
            vj.fechaLanzamiento
        );
        agregarVideojuego(nuevoVideojuego);
    });
}

export function agregarEmpresa(empresa) {
    if (empresa instanceof Empresa) {
        empresas.push(empresa);
    } else {
        console.log("El objeto no es una Empresa");
        
    }
}

export function agregarVideojuego(videojuego) {
    if (videojuego instanceof Videojuego) {
        videojuegos.push(videojuego);
    } else {
        console.log("El objeto no es una Videojuego");
        
    }
}

export function eliminarEmpresa(id) {
    let eliminado = false;
    const tieneVideojuegos = videojuegos.some((vj) => vj.empresaId === id);
    if (tieneVideojuegos) {
        alert("No se puede eliminar la empresa porque tiene videojuegos asociados.");
        return eliminado;
    }

    const index = empresas.findIndex((empresa) => empresa.id === id);
    if (index !== -1) {
        empresas.splice(index, 1);
        eliminado = true;
    } else {
        alert("No se encontró la empresa que intentas eliminar.");
        eliminado = false;
    }
    return eliminado;
}

export function eliminarVideojuego(id) {
    let eliminado = false;
    const index = videojuegos.findIndex((vj) => vj.id === id);
    if (index !== -1) {
        videojuegos.splice(index, 1);
        eliminado = true;
    } else {
        alert("No se encontro el videojuego que intentas eliminar.");
        eliminado = false;
    }
    return eliminado;
}