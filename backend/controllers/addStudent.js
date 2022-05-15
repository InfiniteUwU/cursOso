const listaAlumnos = [
    new Alumno('Javier Romero', 'i92roraj@uco.es', 'password', '01/02/2000',),
    
];



function mostrarAlumnos() {
    console.log('mostrar personas');
    let texto = '';
    for (alumno of listaAlumnos) {
        texto += `<li>
                   <b><h2>Alumnos de CursOso</h2></b><br><br>
                      <b>Nombre:</b> ${alumno.nombre}<br>
                      <b>email:</b> ${alumno.email}<br>
                      <b>Contraseña:</b> ${alumno.Contraseña}<br>
                      <b>nacimiento:</b> ${alumno.nacimiento}<br><br>
                      </li><br>`;
    }
    document.getElementById('personas').innerHTML = texto;
}
function agregarAlumno() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const email = forma['email'];
    const Contraseña = forma['Contraseña']; 
    const nacimiento = forma['nacimiento'];
    if (nombre.value != '' && email.value != '' && Contraseña.value != '' && nacimiento.value != '') {
        const persona = new Alumno(nombre.value,
            email.value,
            Contraseña.value,
            nacimiento.value);
        console.log(persona);
        listaAlumnos.push(persona);
        mostrarAlumnos();
        nombre.value = "";
        email.value = "";
        Contraseña.value = "";
        nacimiento.value = "";
    }
    else {
        console.log('no hay informacion que agregar');
    }


}