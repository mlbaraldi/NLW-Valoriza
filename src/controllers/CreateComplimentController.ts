import { Request, Response } from "express"
import { CreateComplimentService as CComplimentService} from "../services/CreateComplimentService"


class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body
    const { user_id } = request
    const CreateComplimentService = new CComplimentService()
    const compliment = await CreateComplimentService.execute({
      tag_id, 
      user_sender: user_id, 
      user_receiver,
      message
    })

    return response.json(compliment)
  }
}

export { CreateComplimentController }