class Curso{
    constructor(nombre, profesor, duracion, contenidos, fecha, coste) {
        this._nombre = nombre;
        this._profesor = profesor;
        this._duracion = duracion;
        this._contenidos = contenidos;
        this._fecha = fecha;
        this._coste = coste;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get profesor() {
        return this._profesor;
    }
    set profesor(profesor) {
        this._profesor = profesor;
    }
    get duracion() {
        return this._duracion;
    }
    set duracion(duracion) {
        this._duracion = duracion;
    }
    get contenidos() {
        return this._contenidos;
    }
    set contenidos(contenidos) {
        this._contenidos = contenidos;
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get coste() {
        return this._coste;
    }
    set coste(coste) {
        this._coste = coste;
    }

}