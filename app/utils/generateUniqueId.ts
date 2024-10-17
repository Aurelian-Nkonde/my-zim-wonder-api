import ShortUniqueId from 'short-unique-id'
import { ID_TYPES } from '../enums/id_types.js'

export default function generateUniqueId(type: ID_TYPES) {
  let id = ''
  switch (type) {
    case ID_TYPES.COMMENT:
      id = new ShortUniqueId({ length: 14 }).randomUUID()
      break
    case ID_TYPES.UPVOTE:
      id = new ShortUniqueId({ length: 16 }).randomUUID()
      break
    case ID_TYPES.USER:
      id = new ShortUniqueId({ length: 20 }).randomUUID()
      break
    case ID_TYPES.WONDER:
      id = new ShortUniqueId({ length: 18 }).randomUUID()
      break
    default:
      break
  }
  return id
}
