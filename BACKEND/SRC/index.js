import express from 'express'
import cors from 'cors'
import { PORT } from './config/serverConfig.js'
import { ConnectToMongoDb } from './config/DbConfig.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        message:"hello world"
    })
})


app.listen(PORT, () => {
    console.log("server is listening on port", PORT);
    ConnectToMongoDb()
    
})