import { Router } from 'express'

import UserController from './app/controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.get('/users/:id', UserController.show)

export default routes
