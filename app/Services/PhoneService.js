'use strict'

const Phone = use('App/Models/Phone')

class PhoneService {
  async store(phoneData) {
    try {
      const phone = await Phone.create(phoneData)
      return phone
    } catch (error) {
      throw error
    }
  }

  async update(id, newData) {
    try {
      const phone = await Phone.findOrFail(id)
      phone.merge(newData)
      await phone.save()
      return phone
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const phone = await Phone.findOrFail(id)
      await phone.delete()
    } catch (error) {
      throw error
    }
  }
}

module.exports = PhoneService
