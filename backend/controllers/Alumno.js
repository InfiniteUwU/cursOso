class Alumno{
    constructor(nombre, email, Contraseña, nacimiento) {
        this._nombre = nombre;
        this._email = email;
        this._Contraseña = Contraseña;
        this._nacimiento = nacimiento;
        
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get Contraseña() {
        return this._Contraseña;
    }
    set Contraseña(Contraseña) {
        this._Contraseña = Contraseña;
    }
    

    get nacimiento() {
        return this._nacimiento;
    }
    set nacimiento(nacimiento) {
        this._nacimiento = nacimiento;
    }
    

}