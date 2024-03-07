import { Request, Response } from "express"
import { CarService } from "../services/carService"

export class CarController {
    private carService: CarService = new CarService()

    public create = async (req: Request, res: Response): Promise<Response> => {
        const newCar = await this.carService.create(req.body)
        return res.status(201).json(newCar)
    }
    public read = async (_: Request, res: Response): Promise<Response> => {
        const allCars = await this.carService.read()
        return res.status(200).json(allCars)
    }
    public retrieve = async (req: Request, res: Response): Promise<Response> => {
        const car = await this.carService.retrieve(req.params.id)
        return res.status(200).json(car)
    }
    public update = async (req: Request, res: Response): Promise<Response> => {
        const updatedCar = await this.carService.update(req.body, req.params.id)
        return res.status(200).json(updatedCar)
    }
    public delete = async (req: Request, res: Response): Promise<Response> => {
        await this.carService.delete(req.params.id)
        return res.status(204).json()
    }
}