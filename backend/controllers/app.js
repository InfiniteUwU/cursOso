const listaCursos = [
    new Curso('Desarrollo web', 'Javier Romero', '90 horas', 'html, css, javascript', '01/03/2022', 360),
    //new Curso('Desarrollo de aplicaciones moviles', 'Javier Romero', '50 horas', 'html, css y javascript', '01/03/2021', 300),
];

function mostrarCursos() {
    console.log('mostrar personas');
    let texto = '';
    for (curso of listaCursos) {
        texto += `<li>
                   <b><h2>Curso de ${curso.nombre}</h2></b><br><br>
                      <b>profesor:</b> ${curso.profesor}<br>
                      <b>Duracion:</b> ${curso.duracion}<br>
                      <b>Contenidos:</b> ${curso.contenidos}<br>
                      <b>Fecha:</b> ${curso.fecha}<br><br>
                      <div>${curso.coste}</div></li><br>`;
    }
    document.getElementById('personas').innerHTML = texto;
}
function agregarCurso() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const profesor = forma['profesor'];
    const duracion = forma['duracion'];
    const contenidos = forma['contenidos'];
    const fecha = forma['fecha'];
    const coste = forma['coste'];
    if (nombre.value != '' && profesor.value != '' && duracion.value != '' && contenidos.value != '' && fecha.value != '' && coste.value != '') {
        const persona = new Curso(nombre.value,
            profesor.value,
            duracion.value,
            contenidos.value,
            fecha.value,
            coste.value);
        console.log(persona);
        listaCursos.push(persona);
        mostrarCursos();
        nombre.value = "";
        profesor.value = "";
        duracion.value = "";
        contenidos.value = "";
        fecha.value = "";
        coste.value = "";
    }
    else {
        console.log('no hay informacion que agregar');
    }


}