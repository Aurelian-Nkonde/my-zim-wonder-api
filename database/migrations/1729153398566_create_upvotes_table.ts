import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'upvotes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('zwid')
      table.string('wonderid')
      table.string('userid')
      table.boolean('value')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}