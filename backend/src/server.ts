import express from "express"   
import { provaRouter } from "./routes/prova.routes.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/prova", provaRouter)

app.listen(port, () => {
    console.log(`API funcionando em http://localhost:${port}`);
})