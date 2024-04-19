
'use strict'

const SaleService = use('App/Services/SaleService')

class SaleController {
  constructor() {
    this.saleService = new SaleService()
  }

  async store({ request, response }) {
    try {
      const saleData = request.only(['client_id', 'product_id', 'quantity', 'unit_price', 'total_price'])
      const sale = await this.saleService.store(saleData)
      return response.status(201).json(sale)
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }
}

module.exports = SaleController
