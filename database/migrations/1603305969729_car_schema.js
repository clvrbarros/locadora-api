'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments()
      table.timestamps()
      table.string('modelo').notNullable()
      table.string('marca').notNullable()
      table.integer('quantidade').notNullable()
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarSchema
