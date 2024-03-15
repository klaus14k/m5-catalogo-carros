import { Car } from "@prisma/client"
import { CarService } from "../../../services/carService"
import { createCarServiceMock, updateCarServiceMock } from "../../mocks/carService.mock"
import { carTb } from "../../utils"

describe("Unit tests: Update Car Service", () => {
    const updateCarService = new CarService().update

    let createdCar: Car

    beforeEach(async () => {
        await carTb.deleteMany()
        createdCar = await carTb.create({ data: createCarServiceMock.bodyData })
    })

    test("Should be able to update a car", async () => {
        const received = await updateCarService(updateCarServiceMock.bodyData, createdCar.id)
        expect(received).toStrictEqual(updateCarServiceMock.expectedValue)
    })

    afterAll(async () => {
        await carTb.deleteMany()
    })
})