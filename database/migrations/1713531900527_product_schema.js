'use strict'

const Schema = use('Schema')

class CreateProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.decimal('price', 8, 2).notNullable()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = CreateProductsSchema
