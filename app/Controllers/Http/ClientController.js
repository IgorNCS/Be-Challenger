'use strict'

const ClientService = use('App/Services/ClientService')

class ClientController {


  async index({ request, response }) {
    try {
      const clients = await ClientService.index()
      return response.status(200).send({ clients });
    } catch (error) {
      return response.status(400).send({ error: error });
    }
  }
  
  async show({ params, request, response }) {
    try {
      const { clientId } = params;
      const { month, year } = request.all();
      const client = await ClientService.show(clientId, month, year);

      return client
    } catch (error) {
      return response.status(500).send({ error: 'Failed to fetch client details' });
    }
  }

  async store({ request, response }) {
    try {
      const clientData = request.only(['name', 'cpf', 'addresses', 'phones']) ; 
      const client = await ClientService.store(clientData) ;
  
      return response.status(201).send({ client });
    } catch (error) {
      return response.status(400).send({ error: 'Failed to create client' }) ;
    }
  }

  async update({ params, request, response }) {
    try {
      const { id } = params 
      const newData = request.only(['name', 'cpf', 'address', 'phones']) 
      
      const client = await ClientService.update(id, newData)

      return response.status(200).send({ client })
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }
 
  async delete({ params, response }) {
    try {
      const { id } = params
      await ClientService.delete(id)

      return response.status(204).send()
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }
}

module.exports = ClientController
