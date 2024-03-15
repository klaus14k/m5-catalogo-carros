import supertest from "supertest"
import { app } from "../app"
import { prisma } from "../database/prisma"

export const request = supertest(app)

export const baseUrl = "/cars"
export const carTb = prisma.car