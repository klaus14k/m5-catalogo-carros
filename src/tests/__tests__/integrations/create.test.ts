import { car, invalidCar } from "../../mocks/car.mock"
import { baseUrl, carTb, request } from "../../utils"

describe("Integration tests: Create Car Route", () => {
    beforeEach(async () => await carTb.deleteMany())

    test("Should be able to create a car successfully", async () => {
        const response = await request.post(baseUrl).send(car)

        const expectedValue = {
            id: expect.any(String),
            name: car.name,
            description: car.description,
            brand: car.brand,
            year: car.year,
            km: car.km
        }

        expect(response.body).toStrictEqual(expectedValue)
        expect(response.status).toBe(201)
    })

    test("Should throw error when trying to create a car with invalid data types", async () => {
        const response = await request.post(baseUrl).send(invalidCar)

        const expectedValue = {
            "message": [
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": `Expected string, received ${typeof invalidCar.name}`,
                    "path": [
                        "name",
                    ],
                    "received": typeof invalidCar.name,
                },
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": `Expected string, received ${typeof invalidCar.brand}`,
                    "path": [
                        "brand",
                    ],
                    "received": typeof invalidCar.brand,
                },
                {
                    "code": "invalid_type",
                    "expected": "number",
                    "message": `Expected number, received ${typeof invalidCar.year}`,
                    "path": [
                        "year",
                    ],
                    "received": typeof invalidCar.year,
                },
                {
                    "code": "invalid_type",
                    "expected": "number",
                    "message": `Expected number, received ${typeof invalidCar.km}`,
                    "path": [
                        "km",
                    ],
                    "received": typeof invalidCar.km,
                },
            ],
        }

        expect(response.body).toStrictEqual(expectedValue)
        expect(response.status).toBe(400)
    })

    test("Should throw error when trying to create a car with a missing body parameter", async () => {
        await request.post(baseUrl).expect(400)
    })

    afterAll(async () => {
        await carTb.deleteMany()
    })
})