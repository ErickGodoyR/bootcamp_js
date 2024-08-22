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