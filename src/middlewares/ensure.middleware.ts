import { NextFunction, Request, Response } from "express"
import { ZodTypeAny } from "zod"
import { prisma } from "../database/prisma"
import { AppError } from "../errors/AppError"

class EnsureMiddleware {
    public validBody = (schema: ZodTypeAny) => (req: Request, _: Response, next: NextFunction): void => {
        req.body = schema.parse(req.body)
        return next()
    }
    public carIdExists = async (req: Request, _: Response, next: NextFunction): Promise<void> => {
        const carId = await prisma.car.findFirst({ where: { id: req.params.id } })
        if (!carId) {
            const error = new AppError("Car not found.", 404)
            return next(error)
        }
        return next()
    }
}

export const ensure = new EnsureMiddleware()