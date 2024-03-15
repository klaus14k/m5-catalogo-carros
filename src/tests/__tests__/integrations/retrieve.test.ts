import { Car } from "@prisma/client"
import { baseUrl, carTb, request } from "../../utils"
import { car } from "../../mocks/car.mock"

describe("Integration Tests: Retrieve Car Route", () => {
    let createdCar: Car

    beforeAll(async () => {
        await carTb.deleteMany()
        createdCar = await carTb.create({ data: car })
    })

    test("Should be able to retrieve a car successfully", async () => {
        const response = await request.get(`${baseUrl}/${createdCar.id}`)
        const expectedValue = createdCar

        expect(response.body).toStrictEqual(expectedValue)
        expect(response.status).toBe(200)
    })

    test("Should throw error when trying to retrieve a car with invalid id", async () => {
        const response = await request.get(`${baseUrl}/${createdCar.id + 1}`)

        expect(response.body).toStrictEqual({ "message": "Car not found." })
        expect(response.status).toBe(404)
    })

    afterAll(async () => {
        await carTb.deleteMany()
    })
})