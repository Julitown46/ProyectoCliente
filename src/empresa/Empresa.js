import {Videojuego} from "../videojuego/Videojuego.js"

export class Empresa {
    constructor(id, nombre, latitud, longitud, fundacion) {
        this.id = id; 
        this.nombre = nombre; 
        this.latitud = latitud; 
        this.longitud = longitud; 
        this.fundacion = fundacion; 
        this.videojuegos = []; 
    }
    obtenerInfo() {
        return `Empresa: ${this.nombre}, Ubicación: (${this.latitud}, ${this.longitud}), Fundación: ${this.fundacion}`;
    }
}