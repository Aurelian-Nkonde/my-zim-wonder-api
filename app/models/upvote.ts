import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Upvote extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare zwid: string

  @column()
  declare userid: string

  @column()
  declare wonderid: string

  @column()
  declare value: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
