import { USER_TYPE } from '../enums/user_type.js'

export interface IUser {
  id?: string
  zwid?: string
  firstName: string
  lastName: string
  email: string
  province: string
  password?: string
  role?: USER_TYPE
}
