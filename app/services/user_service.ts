import User from '#models/user'
import { ID_TYPES } from '../enums/id_types.js'
import { USER_TYPE } from '../enums/user_type.js'
import { IUser } from '../Interfaces/user.js'
import generateUniqueId from '../utils/generateUniqueId.js'

export default class UserService {
  constructor() {}

  async AllUsers() {
    return await User.all()
  }

  async User(id: string) {
    return await User.findByOrFail('zwid', id)
  }

  async Create(data: IUser) {
    const zwid = generateUniqueId(ID_TYPES.USER)
    const newUser = new User()
      .fill({
        zwid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: USER_TYPE.USER,
        province: data.province,
      })
      .save()
    return newUser
  }

  async Update(id: string, data: IUser) {
    const userValue = User.findByOrFail('zwid', id)
    return (await userValue).merge({ ...data }).save()
  }
}
