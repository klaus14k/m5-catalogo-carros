import { CarService } from "../../../services/carService"
import { createCarServiceMock } from "../../mocks/carService.mock"
import { carTb } from "../../utils"

describe("Unit tests: Read Cars Service", () => {
    const { bodyData: payload, expectedValue } = createCarServiceMock
    const readCarsService = new CarService().read

    beforeEach(async () => {
        await carTb.deleteMany()
        await carTb.create({ data: payload })
    })

    test("Should be able to read all cars", async () => {
        const response = await readCarsService()
        expect(response).toStrictEqual([expectedValue])
    })

    afterAll(async () => {
        await carTb.deleteMany()
    })
})