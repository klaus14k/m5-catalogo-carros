import express, { Application, json } from "express"
import helmet from "helmet"
import { handleErrors } from "./middlewares/handleErrors.middleware"
import { carRouter } from "./routers/car.router"

export const app: Application = express()

app.use(helmet())
app.use(json())

app.use("/cars", carRouter)

app.use(handleErrors)