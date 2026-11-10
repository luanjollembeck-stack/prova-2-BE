import "dotenv/config"
import knex from "knex"

export const knex = Knex({
    client: 'pg',
    connection: {},
    debug: true
})