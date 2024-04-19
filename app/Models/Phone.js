'use strict'

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Phone extends Model {
  static boot () {
    super.boot()
  }

  client () {
    return this.belongsTo('App/Models/Client')
  }
}

module.exports = Phone
