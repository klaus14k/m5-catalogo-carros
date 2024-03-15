import { Car } from "@prisma/client"
import { car } from "../../mocks/car.mock"
import { baseUrl, carTb, request } from "../../utils"

describe("Integration Tests: Read Cars Route", () => {
    let createdCar: Car

    beforeAll(async () => {
        await carTb.deleteMany()
        createdCar = await carTb.create({ data: car })
    })

    test("Should be able to read all cars successfully", async () => {
        const response = await request.get(baseUrl)

        const expectedValue = [
            {
                id: expect.any(String),
                name: car.name,
                description: car.description,
                brand: car.brand,
                year: car.year,
                km: car.km
            }
        ]
        expect(response.body).toHaveLength(1)
        expect(response.body).toStrictEqual(expectedValue)
        expect(response.status).toBe(200)
    })

    afterAll(async () => {
        await carTb.deleteMany()
    })
})