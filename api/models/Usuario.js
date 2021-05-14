/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: { type: 'string', required: true },
    apellido: { type: 'string', required: true },
    correo: { type: 'string', required: true },
    estado: { type: 'boolean', required: true },
    imagen: { type: 'string', required: true },
    usuario: { type: 'string', required: true },
    clave: { type: 'string', required: true },
  },

};

