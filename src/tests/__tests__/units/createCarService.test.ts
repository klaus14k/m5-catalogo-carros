import { CarService } from "../../../services/carService"
import { createCarServiceMock } from "../../mocks/carService.mock"
import { carTb } from "../../utils"

describe("Unit tests: Create Car Service", () => {
    const { bodyData: payload, expectedValue } = createCarServiceMock
    const createCarService = new CarService().create

    beforeEach(async () => {
        await carTb.deleteMany()
    })

    test("Should be able to create a car", async () => {
        const received = await createCarService(payload)
        expect(received).toStrictEqual(expectedValue)
    })

    afterAll(async () => {
        await carTb.deleteMany()
    })
})