import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Url } from 'url'

export default class Wonder extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  declare id: string

  @column({isPrimary: true})
  declare zwid: string

  @column()
  declare name: string

  @column()
  declare province: string | null

  @column()
  declare description: string | null

  @column()
  declare image: string | Url

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}