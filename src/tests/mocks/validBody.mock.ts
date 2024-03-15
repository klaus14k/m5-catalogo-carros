import { ZodError, z } from "zod"

export const validSchemaMock = z.object({
    name: z.string().min(1),
    description: z.string().nullish(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().positive()
})

export const validBodyMock = {
    bodyData: {
        name: "Murciélago",
        description: null,
        brand: "Lamborghini",
        year: 2012,
        km: 14000,
        extraKey: true
    },
    expectedValue: {
        name: "Murciélago",
        description: null,
        brand: "Lamborghini",
        year: 2012,
        km: 14000
    }
}

export const invalidBodyMock = {
    bodyData: {},
    expectedValue: ZodError
}