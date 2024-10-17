import Wonder from '#models/wonder'
import { ID_TYPES } from '../enums/id_types.js'
import { IWonder } from '../Interfaces/wonder.js'
import generateUniqueId from '../utils/generateUniqueId.js'

export default class WonderService {
  constructor() {}

  async AllWonders() {
    return await Wonder.all()
  }

  async Wonder(id: string) {
    return await Wonder.findByOrFail('zwid', id)
  }

  async Create(data: IWonder) {
    const wonder = new Wonder()
    const zwId = generateUniqueId(ID_TYPES.WONDER)
    const createdWonder = wonder.fill({
      name: data.name,
      province: data.province,
      description: data.description,
      zwid: zwId,
    })
    createdWonder.save()
    return createdWonder
  }

  async Update(id: string, data: IWonder) {
    const wonder = Wonder.findByOrFail('zwid', id)
    return (await wonder).merge({ ...data }).save()
  }

  async DeleteWonder(id: string) {
    const wonder = await Wonder.findByOrFail('zwid', id)
    return await wonder.delete()
    // return {}
  }

  async WondersCount() {
    return (await Wonder.all()).length
  }
}
