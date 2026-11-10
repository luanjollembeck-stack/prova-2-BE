import knex from "knex";
import type { CreateProva } from "../types/prova.js";

class ProvaRepository{
    async create(dados: CreateProva) {
        const [provaCriado] = await knex('prova').insert(dados).returning("*")

    }
}

export const provaRepository = new ProvaRepository