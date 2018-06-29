let botonRegistrar = document.querySelector('#btnRegistrarCF');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){

    let inputCodigoCasa = document.querySelector('#txtCodigoC');
    let sCodigo = inputCodigoCasa.value;

    let inputNombreCasa = document.querySelector('#txtNombreC');
    let sNombreCasa = inputNombreCasa.value;

    let inputPais = document.querySelector('#txtPais');
    let sPais = inputPais.value;

    console.log(sCodigo);
    console.log(sNombreCasa);
    console.log(sPais);

};



