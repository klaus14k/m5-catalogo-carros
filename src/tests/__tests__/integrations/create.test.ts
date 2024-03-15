import { car } from "../../mocks"
import { baseUrl, carTb, request } from "../../utils"

describe("Integration tests: Create Car route.", () => {

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
        const response = await request.post(baseUrl).send({})

        const expectedValue = {
            "message": [
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": "Required",
                    "path": [
                        "name",
                    ],
                    "received": "undefined",
                },
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": "Required",
                    "path": [
                        "brand",
                    ],
                    "received": "undefined",
                },
                {
                    "code": "invalid_type",
                    "expected": "number",
                    "message": "Required",
                    "path": [
                        "year",
                    ],
                    "received": "undefined",
                },
                {
                    "code": "invalid_type",
                    "expected": "number",
                    "message": "Required",
                    "path": [
                        "km",
                    ],
                    "received": "undefined",
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