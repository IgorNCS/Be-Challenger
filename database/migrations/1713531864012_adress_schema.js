'use strict'

const Schema = use('Schema')

class CreateAddressesSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').onDelete('CASCADE')
      table.string('cep', 8).notNullable()
      table.string('street').notNullable()
      table.string('number').notNullable()
      table.string('complement')
      table.string('city').notNullable()
      table.string('state', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = CreateAddressesSchema
