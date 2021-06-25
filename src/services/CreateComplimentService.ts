import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories as CRepository} from "../repositories/ComplimentsRepositories"
import { UsersRepositories as URepositories} from "../repositories/UsersRepositories"

interface IComplimentRequest {
  tag_id: string,
  user_sender: string,
  user_receiver: string,
  message: string
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message}: IComplimentRequest) {
    const ComplimentsRepositories = getCustomRepository(CRepository)

    const UsersRepositories = getCustomRepository(URepositories)

    if(user_sender == user_receiver) {
      throw new Error ("Incorrect User Receiver")
    }

    const userReceiverExists = await UsersRepositories.findOne(user_receiver)

    if(!userReceiverExists) {
      throw new Error("User not found")
    }

    const compliment = ComplimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await ComplimentsRepositories.save(compliment)

    return compliment

  }
}

export { CreateComplimentService }