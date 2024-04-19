'use strict'

const UserService = use('App/Services/UserService')

class UserController {
  async signup({ request, response }) {
    try {
      const userData = request.only(['email', 'password']) 
      const user = await UserService.createUser(userData) 
      return response.status(201).send({ user }) 
    } catch (error) {
      return response.status(400).send({ error: 'Registration failed' }) 
    }
  }

  async login({ request, response }) {
    try {
      const userData = request.only(['email', 'password']) 
      const user = await UserService.login(userData) 

      return response.status(200).send({ user })
    } catch (error) {
      return response.status(401).send({ error: 'Authentication failed' }) 
    }
  }
}

module.exports = UserController
