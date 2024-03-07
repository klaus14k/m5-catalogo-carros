import { NextFunction, Request, Response } from "express"
import { ZodTypeAny } from "zod"

class EnsureMiddleware {
    public validBody = (schema: ZodTypeAny) => (req: Request, _: Response, next: NextFunction): void => {
        req.body = schema.parse(req.body)
        return next()
    }
}

export const ensure = new EnsureMiddleware()