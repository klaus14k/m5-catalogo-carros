import { Car } from "@prisma/client"
import { CarService } from "../../../services/carService"
import { createCarServiceMock } from "../../mocks/carService.mock"
import { carTb } from "../../utils"

describe("Unit tests: Delete Car Service", () => {
    const deleteCarService = new CarService().delete

    let createdCar: Car

    beforeEach(async () => {
        await carTb.deleteMany()
        createdCar = await carTb.create({ data: createCarServiceMock.bodyData })
    })

    test("Should be able to delete a car", async () => {
        const response = await deleteCarService(createdCar.id)
        expect(response).toBeUndefined()
    })
})