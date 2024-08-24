//jquery
$(document).ready(function(){


    $('#flexSwitchCheckChecked').change(function(){
        $("body").toggleClass("claro oscuro")
    })

})


/**modal */
var modal = document.querySelector(".modal")
var main = document.querySelector("#main")
var btnAbrirModal = document.querySelector("#btn-modal")
var btnCerrarModal = document.querySelector("#btn-cerrar-modal")

var abrirModal = () => {
    main.style.display = "none"
    modal.style.display = "block"
}

btnAbrirModal.onclick = abrirModal

var cerrarModal = () => {
    main.style.display = "block"
    modal.style.display = "none"
}

btnCerrarModal.onclick = cerrarModal
/** */


/*Habilitar boton formulario y checkbox */
/*habilitar checkbox*/
function habilitarCheck(){
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let celular = document.getElementById('celular');
    let mensaje = document.getElementById('validationTextarea');
    let check = document.getElementById('micheckbox');    

    if(nombre.value === '' || apellido.value === '' || email.value ==='' || celular.value === '' || mensaje.value ===''){
        check.disabled = true;
    }else{
        check.disabled = false;
    }

}
/**/


/*habilitar boton enviar*/
function validarDatos(){
    let estado = document.forms["miForm"]["micheckbox"].checked;

    if(estado == true){
        document.getElementById('btn_enviar').disabled = false;
    }else{
        document.getElementById('btn_enviar').disabled = true;
    }
}
/** */


/**opciones navbar */
var btnSkill = document.querySelector("#btn-skill")
var btnTrabajos = document.querySelector("#btn-trabajos")
var btnHome = document.querySelector("#btn-home")

var infoTrabajos = document.querySelector("#trabajos")
var infoPresentacion = document.querySelector(".presentacion")
var infoSkill = document.querySelector("#skill")

var mostrarSkill = () => {
    infoSkill.style.display = "block"
    infoTrabajos.style.display = "none"
    infoPresentacion.style.display = "none"
}

var mostrarHome = () => {
    infoPresentacion.style.display = "block"
    infoSkill.style.display = "none"
    infoTrabajos.style.display = "none"
}

var mostrartrabajos = () => {
    infoTrabajos.style.display = "block"
    infoPresentacion.style.display = "none"
    infoSkill.style.display = "none"
}

btnHome.onclick = mostrarHome
btnSkill.onclick = mostrarSkill 
btnTrabajos.onclick = mostrartrabajos

/** */