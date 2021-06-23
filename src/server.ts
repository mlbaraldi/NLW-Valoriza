import "reflect-metadata"
import express from "express"
import { router } from "./routes"

import "./database"

const app = express();

app.use(router)

app.use(express.json())

app.listen(3000, () => console.log("server running"))
