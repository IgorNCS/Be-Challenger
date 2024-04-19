'use strict'

const ProductService = use('App/Services/ProductService')

class ProductController {
  async index({ response }) {
    try {
      const products = await ProductService.index()
      return response.status(200).send(products)
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }

  async show({ params, response }) {
    try {
      const { id } = params
      const product = await ProductService.show(id)
      return response.status(200).send(product)
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }

  async store({ request, response }) {
    try {
      const productData = request.only(['name', 'price', 'description'])
      const product = await ProductService.store(productData)
      return response.status(201).send(product)
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }

  async update({ params, request, response }) {
    try {
      const { id } = params
      const productData = request.only(['name', 'price', 'description'])
      const product = await ProductService.update(id, productData)
      return response.status(200).send(product)
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }

  async delete({ params, response }) {
    try {
      const { id } = params
      await ProductService.softDelete(id)
      return response.status(204).send()
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }
}

module.exports = ProductController
