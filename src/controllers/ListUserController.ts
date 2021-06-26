import { Request, Response } from "express"
import { listUserService } from "../services/ListUsersService"


class ListUserController {
  async handle(req: Request, res: Response) {
    const ListUserService = new listUserService()
    const users = await ListUserService.execute()

    return res.json(users)
  }
}

export { ListUserController }