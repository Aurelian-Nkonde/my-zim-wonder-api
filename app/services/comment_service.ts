import Comment from '#models/comment'
import { ID_TYPES } from '../enums/id_types.js'
import { IComment } from '../Interfaces/comment.js'
import generateUniqueId from '../utils/generateUniqueId.js'

export default class CommentService {
  constructor() {}

  async AllComments() {
    return await Comment.all()
  }

  async Comment(id: string) {
    return await Comment.findByOrFail('zwid', id)
  }

  async Delete(id: string) {
    const value = await Comment.findByOrFail('zwid', id)
    return value.delete()
  }

  async Update(id: string, message: string) {
    const comment = await Comment.findByOrFail('zwid', id)
    comment.message = message
    return comment.save()
  }

  async Create(data: IComment) {
    const zwid = generateUniqueId(ID_TYPES.COMMENT)
    const comment = new Comment().fill({
      zwid: zwid,
      userid: data.userid,
      wonderid: data.wonderid,
      message: data.message,
    })
    return comment.save()
  }

  async AllUserComments(id: string) {
    const comments = await Comment.findManyBy('userid', id)
    return comments
  }

  async AllCommentsWonder(id: string) {
    const comments = await Comment.findManyBy('wonderid', id)
    return comments
  }

  async AllCommentsCount() {
    return (await Comment.all()).length
  }

  async AllCommentsUserCount(id: string) {
    return (await Comment.findManyBy('userid', id)).length
  }

  async AllCommentWonderCount(id: string) {
    return (await Comment.findManyBy('wonderid', id)).length
  }
}
