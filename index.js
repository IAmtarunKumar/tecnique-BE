const express = require("express")
const connection = require("./config/database")
const app = express()
app.use(express.json())
require("dotenv").config()



const PORT = process.env.PORT || 5000

app.get("/" , (req,res)=>{
    return res.send("Welcome to our backend")
})



app.listen(PORT , async()=>{
    try {
        await connection
        console.log("MongoDB is connected")
    } catch (error) {
        console.log("error:" , error)
    }
    console.log(`server is running on port ${PORT}`)
})