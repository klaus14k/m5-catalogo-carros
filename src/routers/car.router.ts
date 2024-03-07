import { Router } from "express"
import { CarController } from "../controllers/carController"
import { ensure } from "../middlewares/ensure.middleware"
import { createCarSchema, updateCarSchema } from "../schemas/car.schema"

export const carRouter = Router()
const controller = new CarController()

carRouter.post("", ensure.validBody(createCarSchema), controller.create)
carRouter.get("", controller.read)
carRouter.get("/:id", controller.retrieve)
carRouter.patch("/:id", ensure.validBody(updateCarSchema), controller.update)
carRouter.delete("/:id", controller.delete)