'use strict'

const Hash = use('Hash')
const User = use('App/Models/User')

class UserService {
  async createUser(userData) {
    try {
      const { email, password } = userData

      const existingUser = await User.findBy('email', email)
      if (existingUser) {
        throw new Error('User already exists')
      }

      const hashedPassword = await Hash.make(password)

      const user = await User.create({
        email,
        password: hashedPassword
      })

      return user
    } catch (error) {
      throw error
    }
  }

  async getAllUsers() {
    try {
      const users = await User.all()
      return users
    } catch (error) {
      throw error
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.find(userId)
      return user
    } catch (error) {
      throw error
    }
  }

  async userExists(email) {
    try {
      const user = await User.findBy('email', email)
      return !!user
    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService
