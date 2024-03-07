import { prisma } from "../database/prisma"
import { CreateCar, ReturnCar, UpdateCar } from "../interfaces/car.interface"
import { carSchema } from "../schemas/car.schema"

export class CarService {
    public create = async (payload: CreateCar): Promise<ReturnCar> => {
        const newCar = await prisma.car.create({ data: payload })
        return carSchema.parse(newCar)
    }
    public read = async (): Promise<Array<ReturnCar>> => {
        const allCars = await prisma.car.findMany()
        return carSchema.array().parse(allCars)
    }
    public retrieve = async (id: string): Promise<ReturnCar> => {
        const car = await prisma.car.findFirst({ where: { id: id } })
        return carSchema.parse(car)
    }
    public update = async (payload: UpdateCar, id: string): Promise<ReturnCar> => {
        const updatedCar = await prisma.car.update({ data: payload, where: { id: id } })
        return carSchema.parse(updatedCar)
    }
    public delete = async (id: string): Promise<void> => {
        await prisma.car.delete({ where: { id: id } })
    }
}