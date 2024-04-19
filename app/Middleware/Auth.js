'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Auth {
  async handle ({ auth, response }, next) {
    try {
      await auth.check()
      await next()
    } catch (error) {
      return response.status(401).json({ message: 'Unauthorized' })
    }
  }
}

module.exports = Auth
