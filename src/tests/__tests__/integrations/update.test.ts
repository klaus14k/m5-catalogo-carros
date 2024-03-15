import { Car } from "@prisma/client"
import { baseUrl, carTb, request } from "../../utils"
import { car, invalidUpdatedCar, updatedCar } from "../../mocks/car.mock"

describe("Integration Tests: Update Car Route", () => {
    let createdCar: Car

    beforeAll(async () => {
        await carTb.deleteMany()
        createdCar = await carTb.create({ data: car })
    })

    test("Should be able to update a car successfully", async () => {
        const response = await request.patch(`${baseUrl}/${createdCar.id}`).send(updatedCar)
        const expectedValue = {
            id: expect.any(String),
            name: createdCar.name,
            description: updatedCar.description,
            brand: createdCar.brand,
            year: updatedCar.year,
            km: createdCar.km
        }

        expect(response.body).toStrictEqual(expectedValue)
        expect(response.status).toBe(200)
    })

    test("Should throw error when trying to update a car with invalid data types", async () => {
        const response = await request.patch(`${baseUrl}/${createdCar.id}`).send(invalidUpdatedCar)

        const expectedValue = {
            "message": [
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": `Expected string, received ${typeof invalidUpdatedCar.name}`,
                    "path": [
                        "name",
                    ],
                    "received": typeof invalidUpdatedCar.name,
                },
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": `Expected string, received ${typeof invalidUpdatedCar.description}`,
                    "path": [
                        "description",
                    ],
                    "received": typeof invalidUpdatedCar.description,
                },
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": `Expected string, received ${typeof invalidUpdatedCar.brand}`,
                    "path": [
                        "brand",
                    ],
                    "received": typeof invalidUpdatedCar.brand,
                },
                {
                    "code": "invalid_type",
                    "expected": "number",
                    "message": `Expected number, received ${typeof invalidUpdatedCar.year}`,
                    "path": [
                        "year",
                    ],
                    "received": typeof invalidUpdatedCar.year,
                },
                {
                    "code": "invalid_type",
                    "expected": "number",
                    "message": `Expected number, received ${typeof invalidUpdatedCar.km}`,
                    "path": [
                        "km",
                    ],
                    "received": typeof invalidUpdatedCar.km,
                },
            ],
        }

        expect(response.body).toStrictEqual(expectedValue)
        expect(response.status).toBe(400)
    })

    test("Should throw error when trying to update a car with invalid id", async () => {
        const response = await request.patch(`${baseUrl}/${createdCar.id + 1}`)

        expect(response.body).toStrictEqual({ "message": "Car not found." })
        expect(response.status).toBe(404)
    })

    afterAll(async () => {
        await carTb.deleteMany()
    })
})