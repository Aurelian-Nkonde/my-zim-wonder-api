import Upvote from '#models/upvote'
import { ID_TYPES } from '../enums/id_types.js'
import { IUpvote } from '../Interfaces/upvote.js'
import generateUniqueId from '../utils/generateUniqueId.js'

export default class UpvoteService {
  async Create(data: IUpvote) {
    const upvoteExistance = await Upvote.findBy({ wonderid: data.wonderid, userid: data.userid })
    console.log(upvoteExistance)
    if (!upvoteExistance) {
      const zwid = generateUniqueId(ID_TYPES.UPVOTE)
      const upvote = new Upvote().fill({
        zwid: zwid,
        userid: data.userid,
        wonderid: data.wonderid,
        value: data.value,
      })
      return upvote.save()
    }
    console.error('Upvote already exists')
    throw new Error('Upvote already exists')
  }

  async Update(id: string, value: boolean) {
    const update = await Upvote.findByOrFail('zwid', id)
    update.value = value
    return update.save()
  }

  async Upvotes() {
    return await Upvote.all()
  }

  async Upvote(id: string) {
    return await Upvote.findByOrFail('zwid', id)
  }

  async UpvotesCount() {
    return (await Upvote.all()).length
  }

  async UserAllUpvotesCount(id: string) {
    return (await Upvote.findManyBy('userid', id)).length
  }

  async WonderUpvoteCount(id: string) {
    return (await Upvote.findManyBy('wonderid', id)).length
  }

  async WonderPositiveUpvoteCount(id: string) {
    let result = await Upvote.findManyBy({wonderid: id, value:  true})
    return result.length
  }

  async WonderNegetiveUpvoteCount(id: string) {
    let result =  await Upvote.findManyBy({wonderid: id, value: false})
    return result.length
  }
}
