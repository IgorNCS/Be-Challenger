
'use strict'

const Address = use('App/Models/Address')

class AddressService {
  async store(addressData) {
    try {
      const address = await Address.create(addressData)
      return address
    } catch (error) {
      throw error
    }
  }

  async update(id, newData) {
    try {
      const address = await Address.findOrFail(id)
      address.merge(newData)
      await address.save()
      return address
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const address = await Address.findOrFail(id)
      await address.delete()
    } catch (error) {
      throw error
    }
  }
}

module.exports = AddressService
