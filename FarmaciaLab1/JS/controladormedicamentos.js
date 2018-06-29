let botonRegistrar = document.querySelector('#btnRegistrarMedicamento');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){

    let inputCodigoMedicamento = document.querySelector('#txtCodigoM');
    let sCodigoMedicamento = inputCodigoMedicamento.value;

    let inputNombreMedicamento = document.querySelector('#txtNombreM');
    let sNombreMedicamento = inputNombreMedicamento.value;

    let inputCosto = document.querySelector('#txtcosto');
    let sCosto = inputCosto.value;

    let inputCasaFarmacia = document.querySelector('#txtCasaFarma');
    let sCasaFarmacia = inputCasaFarmacia.value;

    // Este es el del radial buttons
    let inputSuministrar = document.querySelector('#txtsuministrar input[type="radio"]:checked');
    let sSuministrar = inputSuministrar.value;

    console.log(CodigoMedicamento);
    console.log(sNombreMedicamento);
    console.log(sCosto);
    console.log(sCasaFarmacia);
    console.log(sSuministrar);

};


    

                        
                        

                        






