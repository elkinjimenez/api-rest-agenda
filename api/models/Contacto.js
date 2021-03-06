/**
 * Contacto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: { type: 'string', required: true },
    apellido: { type: 'string', required: true },
    direccion: { type: 'string', required: true },
    correo: { type: 'string', required: true },
    telefono: { type: 'number', required: true },
    imagen: { type: 'string', required: true },
    estado: { type: 'boolean', required: true },
  },

};

