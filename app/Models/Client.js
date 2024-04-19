'use strict'

import {BaseModel} from '@adonisjs/lucid/src/Lucid/Model/Base'

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

export default class Client extends BaseModel {
  static boot () {
    super.boot()
  }

  addresses () {
    return this.hasMany('App/Models/Address')
  }

  phones () {
    return this.hasMany('App/Models/Phone')
  }
}

module.exports = Client
