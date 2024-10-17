// import type { HttpContext } from '@adonisjs/core/http'

import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  getUsers() {
    return this.userService.AllUsers()
  }

  getUser({ params }: HttpContext) {
    const id = params.id
    return this.userService.User(id)
  }

  updateUser({ request, params }: HttpContext) {
    const id = params.id
    const data = request.only(['firstName', 'lastName', 'email', 'province'])
    return this.userService.Update(id, data)
  }
}
