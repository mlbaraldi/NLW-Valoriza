import { Router } from "express"
import { CreateUserController as CreateUC } from "./controllers/CreateUserController"
import { CreateTagController as CreatTag } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController as AUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController as CreateCC } from "./controllers/CreateComplimentController"

const router = Router()
const CreateUserController = new CreateUC()
const CreateTagController = new CreatTag()
const AuthenticateUserController = new AUserController()
const CreateComplimentController = new CreateCC()

router.post("/users", CreateUserController.handle)
router.post("/tags", ensureAdmin, CreateTagController.handle)
router.post("/login", AuthenticateUserController.handle)
router.post("/compliments", CreateComplimentController.handle)

export { router }