'use strict'

const Sale = use('App/Models/Sale')

class SaleService {
  async store(saleData) {
    try {
      const sale = await Sale.create(saleData)
      return sale
    } catch (error) {
      throw error
    }
  }
}

module.exports = SaleService
