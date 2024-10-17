import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'wonders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('zwid')
      table.string('name')
      table.string('province')
      table.string('description')
      table.string('image')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
