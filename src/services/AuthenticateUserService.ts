import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories as UsersRepository } from "../repositories/UsersRepositories"


interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {

  async execute({email, password}: IAuthenticateRequest) {

    const UsersRepositories = getCustomRepository(UsersRepository)

    //verificar se email existe
    const user = await UsersRepositories.findOne({
      email
    })

    if(!user) {
      throw new Error("Email/Password incorrect")
    }
    
    //verificar se senha está correta
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    //gerar token
    const token = sign({
      email: user.email,
    }, "dac9630aec642a428cd73f4be0a03569", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token

  }

}

export { AuthenticateUserService }