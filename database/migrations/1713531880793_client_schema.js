'use strict'

const Schema = use('Schema')

class CreateClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = CreateClientsSchema
