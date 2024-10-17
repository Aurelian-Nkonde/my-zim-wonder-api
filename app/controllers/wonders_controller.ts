// import type { HttpContext } from '@adonisjs/core/http'

import WonderService from '#services/wonder_service'
import { createWonderValidator, updateWonderValidator } from '#validators/wonder'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class WondersController {
  constructor(private wonderService: WonderService) {}

  allWonders() {
    return this.wonderService.AllWonders()
  }

  singleWonder({ params }: HttpContext) {
    const id = params.id
    return this.wonderService.Wonder(id)
  }

  async createWonder({ request }: HttpContext) {
    const payload = await request.validateUsing(createWonderValidator)
    return this.wonderService.Create(payload)
  }

  deleteWonder({ params }: HttpContext) {
    const id = params.id
    return this.wonderService.DeleteWonder(id)
  }

  async updateWonder({ request, params }: HttpContext) {
    const id = params.id
    const payload = await request.validateUsing(updateWonderValidator)
    console.log({ ...payload })
    return this.wonderService.Update(id, { ...payload })
  }
}
