import express, { Application, json } from "express"
import helmet from "helmet"
import { carRouter } from "./routers/car.router"
import { handleErrors } from "./middlewares/handleErrors.middleware"

export const app: Application = express()

app.use(helmet())
app.use(json())

app.use("/cars", carRouter)

app.use(handleErrors)