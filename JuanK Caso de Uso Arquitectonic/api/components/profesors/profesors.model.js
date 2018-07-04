'use strict';
let mongoose = require('mongoose');

let profesorSchema = new mongoose.Schema({
    NombreProfesor : {type : String,  required : true},
    ApellidoProfesor : {type : String,  required : true},
    Cedula : {type : String, unique : true, required: true},
    Telefono : {type : String, required : true},
    GradoAcademico: {type : String, required : true},
    CorreoElectronico : {type : String, unique : true, required : true}
});

module.exports = mongoose.model('profesor', profesorSchema);