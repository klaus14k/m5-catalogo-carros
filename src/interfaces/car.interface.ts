import { z } from "zod"
import { carSchema, createCarSchema, updateCarSchema } from "../schemas/car.schema"

export type CreateCar = z.infer<typeof createCarSchema>
export type UpdateCar = z.infer<typeof updateCarSchema>
export type ReturnCar = z.infer<typeof carSchema>