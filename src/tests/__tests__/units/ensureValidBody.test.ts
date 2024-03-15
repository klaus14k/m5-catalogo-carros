import { NextFunction, Request, Response } from "express"
import { ensure } from "../../../middlewares/ensure.middleware"
import { invalidBodyMock, validBodyMock, validSchemaMock } from "../../mocks/validBody.mock"

describe("Unit tests: Ensure Valid Body Middleware", () => {
    const validBodyMiddleware = ensure.validBody(validSchemaMock)
    let req: Partial<Request> = {}
    let res: Partial<Response> = {}
    let next: NextFunction = jest.fn()

    beforeEach(async () => {
        next = jest.fn()
    })

    test("Should be able to validate a request body", async () => {
        req.body = validBodyMock.bodyData

        validBodyMiddleware(req as Request, res as Response, next)

        expect(req.body).toStrictEqual(validBodyMock.expectedValue)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledTimes(1)
    })

    test("Should throw error when request body is invalid", async () => {
        req.body = invalidBodyMock.bodyData

        expect(() => {
            validBodyMiddleware(req as Request, res as Response, next)
        }).toThrow(invalidBodyMock.expectedValue)

        expect(next).not.toHaveBeenCalled()
    })
})