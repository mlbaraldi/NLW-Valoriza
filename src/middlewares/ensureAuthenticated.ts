import { Request, Response, NextFunction, request } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub:string
}

export function ensureAuthenticated(
  req: Request, 
  res: Response, 
  next: NextFunction
  ){
    //receber token
    const authToken = req.headers.authorization

    //Validar token preenchido
      if(!authToken) {
        return res.status(401).end()
      }

      const [, token] = authToken.split(" ")
      
      try {
        //Validar token válido
        const { sub } = verify(token ,"dac9630aec642a428cd73f4be0a03569") as IPayload
        req.user_id = sub
        //recuperar info de usuario
        return next()
      } catch (error) {
        return res.status(401).end()
      }
      
      
  }