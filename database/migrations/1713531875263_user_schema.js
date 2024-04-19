'use strict'

const Schema = use('Schema')

class CreateUsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = CreateUsersSchema
