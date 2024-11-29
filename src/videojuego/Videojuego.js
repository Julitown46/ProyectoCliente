export class Videojuego {
    constructor(id, nombre, genero, empresaId, fechaLanzamiento) {
        this.id = id;
        this.nombre = nombre; 
        this.genero = genero; 
        this.fechaLanzamiento = fechaLanzamiento;
        this.empresaId = empresaId; 
    }

    obtenerInfo() {
        return `Videojuego: ${this.nombre}, Género: ${this.genero}, Lanzamiento: ${this.fechaLanzamiento}`;
    }
}