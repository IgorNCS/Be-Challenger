'use strict'

const Product = use('App/Models/Product')

class ProductService {
  async index() {
    try {
      const products = await Product.query().orderBy('name').fetch()
      return products
    } catch (error) {
      throw error
    }
  }

  async show(productId) {
    try {
      const product = await Product.findOrFail(productId)
      return product
    } catch (error) {
      throw error
    }
  }

  async store(productData) {
    try {
      const product = await Product.create(productData)
      return product
    } catch (error) {
      throw error
    }
  }

  async update(productId, newData) {
    try {
      const product = await Product.findOrFail(productId)
      product.merge(newData)
      await product.save()
      return product
    } catch (error) {
      throw error
    }
  }

  async softDelete(productId) {
    try {
      const product = await Product.findOrFail(productId)
      product.merge({ deleted_at: new Date() })
      await product.save()
      return product
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductService
