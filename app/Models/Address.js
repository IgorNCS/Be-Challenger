'use strict'

const { BaseModel } = use('App/Models/BaseModel')

class Address extends BaseModel {
  static boot () {
    super.boot()
  }

  client () {
    return this.belongsTo('App/Models/Client')
  }
}

Address.table = 'addresses'

Address.fields = {
  cep: 'string',
  street: 'string',
  number: 'string',
  complement: 'string',
  city: 'string',
  state: 'string'
}

module.exports = Address
