'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const profesorsModel = require('./profesors.model');

module.exports.registrar = function(req, res){
    let nuevoProfesr = new profesorsModel({
        NombreProfesor : req.body.NombreProfesor,
        ApellidoProfesor : req.body.ApellidoProfesor,
        Cedula : req.body.Cedula,
        Telefono : req.body.Telefono,
        GradoAcademico : req.body.GradoAcademico,
        CorreoElectronico : req.body.CorreoElectronico 
        

    });

    nuevoProfesor.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el profesor, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El profesor se registró con éxito'});
        }

    });

};
