// import type { HttpContext } from '@adonisjs/core/http'

import UpvoteService from '#services/upvote_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UpvotesController {
  constructor(private upvoteService: UpvoteService) {}

  create({ request }: HttpContext) {
    const data = request.only(['userid', 'wonderid', 'value'])
    return this.upvoteService.Create({ ...data })
  }

  update({ request, params }: HttpContext) {
    const id = params.id
    const data = request.only(['value'])
    return this.upvoteService.Update(id, data.value)
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

  getUserAllUpvotesCount({ request }: HttpContext) {
    const data = request.only(['userid'])
    return this.upvoteService.UserAllUpvotesCount(data.userid)
  }

  getWonderUpvoteCount({ request }: HttpContext) {
    const data = request.only(['wonderid'])
    return this.upvoteService.WonderUpvoteCount(data.wonderid)
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
