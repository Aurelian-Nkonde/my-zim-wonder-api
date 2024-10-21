// import type { HttpContext } from '@adonisjs/core/http'

import UpvoteService from '#services/upvote_service'
import { createUpvoteValidator, updateUpvoteValidator } from '#validators/upvote'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UpvotesController {
  constructor(private upvoteService: UpvoteService) {}

  async create({ request }: HttpContext) {
    const payload = await request.validateUsing(createUpvoteValidator)
    return this.upvoteService.Create({ ...payload })
  }

  async update({ request, params }: HttpContext) {
    const id = params.id
    const payload = await request.validateUsing(updateUpvoteValidator)
    return this.upvoteService.Update(id, payload.value)
  }

  getAllUpvotes() {
    return this.upvoteService.Upvotes()
  }

  getUpvote({ params }: HttpContext) {
    const id = params.id
    return this.upvoteService.Upvote(id)
  }

  getAllUpvotesCount() {
    return this.upvoteService.UpvotesCount()
  }

  getUserAllUpvotesCount({ params }: HttpContext) {
    const data = params.id
    console.log("id: ", data)
    return this.upvoteService.UserAllUpvotesCount(data)
  }

  getWonderUpvoteCount({ params }: HttpContext) {
    const data = params.id
    return this.upvoteService.WonderUpvoteCount(data)
  }

  getWonderPositiveCount({ params }: HttpContext) {
    const id = params.id
    return this.upvoteService.WonderPositiveUpvoteCount(id)
  }

  getWonderNegativeCount({ params }: HttpContext) {
    const id = params.id
    return this.upvoteService.WonderNegetiveUpvoteCount(id)
  }
}
