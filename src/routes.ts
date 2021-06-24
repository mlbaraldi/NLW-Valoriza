import { Router } from "express"
import { CreateUserController as CreateUC } from "./controllers/CreateUserController"
import { CreateTagController as CreatTag } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"

const router = Router()
const CreateUserController = new CreateUC()
const CreateTagController = new CreatTag()

router.post("/users", CreateUserController.handle)
router.post("/tags", ensureAdmin, CreateTagController.handle)

export { router }