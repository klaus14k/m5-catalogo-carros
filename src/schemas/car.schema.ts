import { z } from "zod"

export const carSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1),
    description: z.string().nullish(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().positive()
})

export const createCarSchema = carSchema.omit({id: true})
export const updateCarSchema = createCarSchema.partial()