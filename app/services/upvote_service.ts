import Upvote from '#models/upvote'
import { ID_TYPES } from '../enums/id_types.js'
import { IUpvote } from '../Interfaces/upvote.js'
import generateUniqueId from '../utils/generateUniqueId.js'

export default class UpvoteService {
  Create(data: IUpvote) {
    const zwid = generateUniqueId(ID_TYPES.UPVOTE)
    const upvote = new Upvote().fill({
      zwid: zwid,
      userid: data.userid,
      wonderid: data.wonderid,
      value: data.value,
    })
    return upvote.save()
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
    return (await Upvote.findManyBy('wonderid', id)).filter((u) => u.value === true).length
  }

  async WonderNegetiveUpvoteCount(id: string) {
    return (await Upvote.findManyBy('wonderid', id)).filter((u) => u.value === false).length
  }
}
