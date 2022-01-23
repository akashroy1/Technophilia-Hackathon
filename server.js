const express = require("express")
const app = express()

app.get("/", (req, res)=> {
    console.log("Server is running on port"+3000)
    
    res.status(200).send("Welcome to the Hostel Management Portal\nBasic Built")
})

app.listen(3000)