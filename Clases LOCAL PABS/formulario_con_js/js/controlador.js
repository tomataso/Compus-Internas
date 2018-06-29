/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){

    let infoPersona = [];

    let inputNombre = document.querySelector('#txtNombre');
    let sNombre = inputNombre.value;

    let inputEmail = document.querySelector('#txtEmail');
    let sEmail = inputEmail.value;

    let inputTelefono = document.querySelector('#txtTelefono');
    let sTelefono = inputTelefono.value;

    let inputEdad = document.querySelector('#txtEdad');
    let nEdad = Number(inputEdad.value);

    let inputContrasenna = document.querySelector('#txtContrasenna');
    let sContrasenna = inputContrasenna.value;

    let inputConfirmacion = document.querySelector('#txtConfirmacion');
    let sConfirmacion = inputConfirmacion.value;

    infoPersona.push(sNombre, sEmail, sTelefono, nEdad, sContrasenna, sConfirmacion);

    registrarPersona(infoPersona);

};

function imprimirListaPersonas(){

    let listaPersonas= obtenerListaPersonas();

    let tbody = document.query('#tblPersonas tbody')
    // Para vaciar el tbody
    tbody.innerHTLM = '';

    // para imprimir fila por fila es solo con un ciclo for, sabe cuantas veces se va a repetir antes.
    for(let i=o; i< listaPersonas.Length; i++){

        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cEmail = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cEdad = fila.insertCell();

        // De la lista de personas en la posicion i. Posicion 0 por ser el nombre
        cNombre.innerHTLM = listaPersonas[i][0];
        // De la lista de personas en la posicion i. Posicion 1 por ser el nombre
        cEmail.innerHTLM = listaPersonas[i][1];
        // De la lista de personas en la posicion i. Posicion 2 por ser el nombre
        cTelefono.innerHTLM = listaPersonas[i][2];
        // De la lista de personas en la posicion i. Posicion 3 por ser el nombre
        cEdad.innerHTLM = listaPersonas[i][3];

    }
}