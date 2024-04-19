'use strict'

const Hash = use('Hash')
const Client = use('App/Models/Client')
import AddressService from "./AddressService"
import PhoneService from "./PhoneService"

class ClientService {

async index() {
  try {
    const clients = await Client.query()
      .with('phones', (builder) => {
        builder.select('number')
      })
      .select('name', 'cpf') 
      .orderBy('id')
      .fetch()

    return clients
  } catch (error) {
    throw error
  }
}


  async show(clientId, month, year) {
    try {
      const client = await Client.query()
        .where('id', clientId)
        .with('sales', (builder) => {
          if (month && year) {
            builder.whereRaw(`MONTH(created_at) = ? AND YEAR(created_at) = ?`, [month, year])
          }
          builder.orderBy('created_at', 'desc')
        })
        .fetch()

        await this.clientExist(client)


      return client
    } catch (error) {
      throw error
    }
  }

  static async store(clientData) {
    try {
     
      const existingClient = await Client.findBy('cpf', clientData.cpf)
  
      if (existingClient) {
        throw new Error('Client already exists')
      }
  
 
      const client = await Client.create({
        name: clientData.name,
        cpf: clientData.cpf
      })

      if (clientData.addresses && clientData.addresses.length > 0) {

        await Promise.all(clientData.addresses.map(async (addressData) => {
          await Address.create({
            client_id: client.id, 
            cep: addressData.cep,
            street: addressData.street,
            number: addressData.number,
            complement: addressData.complement,
            city: addressData.city,
            state: addressData.state
          })
        }))
      }
  
      if (clientData.phones && clientData.phones.length > 0) {
        await Promise.all(clientData.phones.map(async (phoneData) => {
          await Phone.create({
            client_id: client.id, 
            number: phoneData.number
          })
        }))
      }
  
      return client
    } catch (error) {
      throw error
    }
  }


static async update(id, newData) {
  try {
    const client = await Client.find(id)
    await this.clientExist(client)

    client.merge(newData)

    if (newData.address) {
      await AddressService.updateOrCreate(client, newData.address)
    }


    if (newData.phones && newData.phones.length > 0) {
      await PhoneService.updateOrCreate(client, newData.phones)
    }

    await client.save()

    return client
  } catch (error) {
    throw error
  }
}


  static async delete(clientId) {
    try {
      const client = await Client.findOrFail(clientId)

      await this.clientExist(client)

      await client.delete()
    } catch (error) {
      throw error
    }
  }

  async clientExist(client){
    if (!client) {
      throw new Error('Client not found')
    }
    return client
  }

}

module.exports = UserService
