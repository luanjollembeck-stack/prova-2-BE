import { provaRepository } from "../repository/prova.repository.js";
import type { CreateProva } from "../types/prova.js";

class ProvaService{
    async create(prova: CreateProva) {
        return await provaRepository.create(prova)
    }
}

export const provaService = new ProvaService