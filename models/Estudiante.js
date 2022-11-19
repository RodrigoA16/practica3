var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = new Schema({
    codigo: {type: String, required: true, max: 20},
    nombre: {type: String, required: true, max: 20},
    email: {type: String, required: true, max: 20},
    facultad: {type: String, required: true, max: 20},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
