import { Router } from "express"
import { CreateUserController as CreateUC } from "./controllers/CreateUserController"
import { CreateTagController as CreatTag } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController as AUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController as CreateCC } from "./controllers/CreateComplimentController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { ListUserReceivedComplimentsController as ListURC } from "./controllers/ListUserReceivedComplimentController"
import { ListUserSentComplimentsController as ListUSC} from "./controllers/ListUserSentComplimentsController"
import { ListTagController as ListTC } from "./controllers/ListTagController"
import { ListUserController as ListUC} from "./controllers/ListUserController"

const router = Router()
const CreateUserController = new CreateUC()
const CreateTagController = new CreatTag()
const AuthenticateUserController = new AUserController()
const CreateComplimentController = new CreateCC()
const ListUserSentComplimentsController = new ListUSC()
const ListUserReceivedComplimentsController = new ListURC()
const ListTagController = new ListTC() 
const ListUserController = new ListUC()

router.post("/users", CreateUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, CreateTagController.handle)
router.post("/login", AuthenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, CreateComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated, ListUserSentComplimentsController.handle )
router.get("/users/compliments/received", ensureAuthenticated, ListUserReceivedComplimentsController.handle)
router.get("/tags", ensureAuthenticated, ListTagController.handle )
router.get("/users", ensureAuthenticated, ListUserController.handle)

export { router }