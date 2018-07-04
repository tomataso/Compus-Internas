'use strict';


function GuardarProfesor(paInfoProfesor){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarProfesor',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            NombreProfesor : paInfoProfesor[0],
            ApellidoProfesor : InfoProfesor[1],
            CedulaProfesor : InfoProfesor[2],
            TelefonoProfesor : InfoProfesor[3],
            GradoAcademicoProfesor: InfoProfesor[4],
            EmailProfesor: InfoProfesor[5]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
