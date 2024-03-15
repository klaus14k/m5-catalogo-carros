import { Car } from "@prisma/client"
import { baseUrl, carTb, request } from "../../utils"
import { car } from "../../mocks/car.mock"

describe("Integration Tests: Delete Car Route", () => {
    let createdCar: Car

    beforeAll(async () => {
        await carTb.deleteMany()
        createdCar = await carTb.create({ data: car })
    })

    test("Should be able to delete a car successfully", async () => {
        const response = await request.delete(`${baseUrl}/${createdCar.id}`)
        const expectedValue = {}

        expect(response.body).toStrictEqual(expectedValue)
        expect(response.status).toBe(204)
    })

    test("Should throw error when trying to delete a car with invalid id", async () => {
        const response = await request.delete(`${baseUrl}/${createdCar.id + 1}`)

        expect(response.body).toStrictEqual({ "message": "Car not found." })
        expect(response.status).toBe(404)
    })
})