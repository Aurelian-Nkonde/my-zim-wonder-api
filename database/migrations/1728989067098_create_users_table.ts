import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('firstName').notNullable()
      table.string('lastName').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('province').nullable()
      table.string('role').defaultTo('user')
      table.string('zwid').notNullable().unique()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}