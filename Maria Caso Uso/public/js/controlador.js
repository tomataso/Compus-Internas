'use strict';

imprimirListaPersonas();
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click' , obtenerDatos);

let inputNombreProfesor = document.querySelector('txtNombreProfesor');
let inputApellidoProfesor = document.querySelector('#txtApellidoProfesor');
let inputCedulaProfesor = document.querySelector('#txtCedulaProfesor');
let inputTelefonoProfesor = document.querySelector('#txtTelefonoProfesor');
let inputGradoAcademicoProfesor = document.querySelector('#txtGradoAcademico');
let inputEmailProfesor = document.querySelector('txtCorreoProfesor');




function obtenerDatos(){
    let infoProfesor =[];
    let bError = false;

    let sNombreProfesor = inputNombreProfesor.value
    let sApellidoProfesor =  inputApellidoProfesor.value  
    let sCedulaProfesor = inputCedulaProfesor.value;
    let sTelefonoProfesor = inputTelefonoProfesor.value;
    let sGradoAcademicoProfesor = inputGradoAcademicoProfesor.value;
    let sEmailProfesor = inputEmailProfesor.value;

    infoProfesor.push(sNombreProfesor, sApellidoProfesor, sCedulaProfesor, sTelefonoProfesor, sGradoAcademicoProfesor, sEmailProfesor);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el usuario profesor.',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el usuario profesor');
    }else{
        registrarCliente(infoProfesor);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El profesor usuario se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        limpiarFormularioProfesor();
    }
    
};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del NombreProfesor
    if(inputNombreProfesor.value == '' || (regexSoloLetras.test(inputNombreProfesor.value)==false) ){
        inputNombreProfesor.classList.add('error_input');
        bError = true;
    }else{
        inputNombreProfesor.classList.remove('error_input');
    }


    //Validación del ApellidoProfesor
    if(inputApellidoProfesor.value == ''|| (regexSoloLetras.test(inputApellidoProfesor.value)==false) ){
        inputApellidoProfesor.classList.add('error_input');
        bError = true;
    }else{
        inputApellidoProfesor.classList.remove('error_input');
    }

    //Validación de la CedulaProfesor
    if(inputCedulaProfesor.value == ''|| (regexSoloNumeros.test(inputCedulaProfesor.value)==false) ){
        inputCedulaProfesor.classList.add('error_input');
        bError = true;
    }else{
        inputCedulaProfesor.classList.remove('error_input');
    }

    //Validación de la TelefonoProfesor
    if(inputTelefonoProfesor.value == '' || (regexSoloNumeros.test(inputTelefonoProfesor.value) == false) ){
        inputTelefonoProfesor.classList.add('error_input');
        bError = true;
    }else{
        inputTelefonoProfesor.classList.remove('error_input');
    }



    //Validación del  GradoAcademicoProfesor
    if(inputGradoAcademicoProfesor.value == '' ){
        inputGradoAcademicoProfesor.classList.add('error_input');
        bError = true;
    }else{
        inputGradoAcademicoProfesor.classList.remove('error_input');
    }



    //Validación de la CorreoProfesor
    if(inputEmailProfesor.value == '' ){
        inputEmailProfesor.classList.add('error_input');
        bError = true;
    }else{
        inputEmailProfesor.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormularioProfesor(){
 

    inputNombreProfesor.value = '';
    inputApellidoProfesor.value = '';
    inputCedulaProfesor.value = '';
    inputTelefonoProfesor.value = ''; 
    inputGradoAcademicoProfesor.value = '';
    inputEmailProfesor.value = '';


}