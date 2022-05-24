const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MascotaSchema = new Schema({
  type: {
    type: String,
    required: [true, 'Por favor ingresa el tipo de mascota'],
  },
  description: {
    type: String,
    required: [true, 'Por favor ingresa la descripción'],
  },
});

module.exports = mongoose.models.Mascota || mongoose.model('Mascota', MascotaSchema)