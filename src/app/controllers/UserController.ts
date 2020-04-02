import { Request, Response } from 'express'

import User from '../models/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)
    return res.json(user)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    const user = await User.findById(id)
    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    return res.json([])
  }
}

export default new UserController()
