import { Router } from "express"
import { provaController } from "../controllers/prova.controller.js"

export const provaRouter = Router()

provaRouter.post("/", provaController.create)