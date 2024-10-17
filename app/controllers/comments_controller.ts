// import type { HttpContext } from '@adonisjs/core/http'

import CommentService from '#services/comment_service'
import { createCommentValidator, updateCommentValidator } from '#validators/comment'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class CommentsController {
  constructor(private commentService: CommentService) {}

  getAllComments() {
    return this.commentService.AllComments()
  }

  getComment({ params }: HttpContext) {
    const id = params.id
    return this.commentService.Comment(id)
  }

  async createComment({ request }: HttpContext) {
    const payload = await request.validateUsing(createCommentValidator)
    return this.commentService.Create(payload)
  }

  deleteComment({ params }: HttpContext) {
    const id = params.id
    return this.commentService.Delete(id)
  }

  async updateComment({ request, params }: HttpContext) {
    const id = params.id
    const payload = await request.validateUsing(updateCommentValidator)
    return this.commentService.Update(id, payload.mesage)
  }

  AllUserComments({ params }: HttpContext) {
    const id = params.id
    return this.commentService.AllUserComments(id)
  }

  AllWonderComments({ params }: HttpContext) {
    const id = params.id
    return this.commentService.AllCommentsWonder(id)
  }

  AllCommentsCount() {
    return this.commentService.AllCommentsCount()
  }

  AllUserCommentCount({ params }: HttpContext) {
    const id = params.id
    return this.commentService.AllCommentsUserCount(id)
  }

  AllWonderCommentCount({ params }: HttpContext) {
    const id = params.id
    return this.commentService.AllCommentWonderCount(id)
  }
}
