import { Request, Response, NextFunction } from "express";
import { listUserReceivedComplimentsService } from "../services/listUserReceivedComplimentsService";



class ListUserReceivedComplimentsController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req
    const ListUserReceivedComplimentsService = new listUserReceivedComplimentsService()

    const compliments = await ListUserReceivedComplimentsService.execute(user_id)

    return res.json(compliments)
  }

}


export { ListUserReceivedComplimentsController }