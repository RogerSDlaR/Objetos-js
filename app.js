const jugadorBaloncesto = {
    nombre: "LeBron James",
    edad: 39,
    equipo: "Los Angeles Lakers",
    puntosPorPartido: 27.2,
    
    actualizarPuntosPorPartido(nuevosPuntos) {
        this.puntosPorPartido = nuevosPuntos;
        console.log(`Los puntos por partido de ${this.nombre} ahora son ${this.puntosPorPartido}`);
    }
};


jugadorBaloncesto.actualizarPuntosPorPartido(28.5);
