const express = require("express")
const app = express()

app.use(express.json())

const Home = require('./routes/home')
app.use('/xyz',Home)
app.listen(8000,()=>console.log("Server has started on port 8000"))