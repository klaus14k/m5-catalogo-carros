import express, { Application, json } from "express"

export const app: Application = express()

app.use(json())