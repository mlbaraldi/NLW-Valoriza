import { Request, Response, NextFunction } from "express";
import { listTagService } from "../services/ListTagService";


class ListTagController {
  async handle(req: Request, res: Response) {
    const { user_id } = req
    const ListTagService = new listTagService()

    const tags = await ListTagService.execute(user_id)

    return res.json(tags)
  }

}


export { ListTagController }