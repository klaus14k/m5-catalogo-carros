import { Car } from "@prisma/client"
import { CarService } from "../../../services/carService"
import { createCarServiceMock } from "../../mocks/carService.mock"
import { carTb } from "../../utils"

describe("Unit tests: Retrieve Car Service", () => {
    const retrieveCarService = new CarService().retrieve

    let createdCar: Car

    beforeEach(async () => {
        await carTb.deleteMany()
        createdCar = await carTb.create({ data: createCarServiceMock.bodyData })
    })

    test("Should be able to retrieve a car", async () => {
        const response = await retrieveCarService(createdCar.id)
        expect(response).toStrictEqual(createdCar)
    })

    afterAll(async () => {
        await carTb.deleteMany()
    })
})