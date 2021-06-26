import { Request, Response, NextFunction } from "express";
import { listUserSentComplimentsService } from "../services/listUserSentComplimentsService";



class ListUserSentComplimentsController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req
    const ListUserSendComplimentsService = new listUserSentComplimentsService()

    const compliments = await ListUserSendComplimentsService.execute(user_id)

    return res.json(compliments)
  }

}


export { ListUserSentComplimentsController }