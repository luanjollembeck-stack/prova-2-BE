import { type Request, type Response } from "express"
import type { CreateProva } from "../types/prova.js"
import { provaService } from "../services/prova.service.js"

class ProvaController {
    async create(req: Request<CreateProva>, res: Response) {
        try {
            const prova = await provaService.create(req.body)
            return res.json(prova)
        } catch (error) {
            console.log(error)
            res.json(error)
            return res.json ({ message: "Erro interno"})
        }
    }
}

export const provaController = new ProvaController