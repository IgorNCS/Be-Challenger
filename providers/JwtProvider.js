'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class JwtProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/Auth', () => {
      const AuthManager = require('@adonisjs/auth/src/AuthManager')
      const JwtSerializer = require('@adonisjs/auth/src/Schemes/Jwt')
      const Config = this.app.use('Adonis/Src/Config')

      return new AuthManager({
        guard: 'api',
        api: {
          driver: 'jwt',
          serializer: JwtSerializer,
          tokenOptions: {
            secret: Config.get('app.appKey'),
            expiresIn: '1h'
          }
        }
      })
    })
  }
}

module.exports = JwtProvider
