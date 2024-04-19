'use strict'

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
  static boot () {
    super.boot()
  }

  client () {
    return this.belongsTo('App/Models/Client')
  }

  product () {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = Sale
