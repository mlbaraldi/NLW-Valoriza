import { Router } from "express"
import { CreateUserController as CreateUC } from "./controllers/CreateUserController"

const router = Router()
const CreateUserController = new CreateUC()

router.post("/users", CreateUserController.handle)

export { router }