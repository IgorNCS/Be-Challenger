'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('login', 'UserController.login')
Route.get('users', 'UserController.index').middleware(['auth'])

Route.group(() => {
  Route.get('clients', 'ClientController.index')
  Route.post('clients', 'ClientController.store')
  Route.get('clients/:id', 'ClientController.show')
  Route.put('clients/:id', 'ClientController.update')
  Route.delete('clients/:id', 'ClientController.delete')
}).middleware(['auth'])

Route.group(() => {
  Route.get('/', 'ProductController.index')
  Route.get('/:id', 'ProductController.show')
  Route.post('/', 'ProductController.store')
  Route.put('/:id', 'ProductController.update')
  Route.delete('/:id', 'ProductController.delete')
}).prefix('products').middleware(['auth'])

Route.group(() => {
  Route.post('/', 'SaleController.store')
}).prefix('sales').middleware(['auth'])
