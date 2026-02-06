const express = require("express")
const validationSignUp = require("./src/config/Utils/validation")
const connectDB = require()

app.post("/signup", async (req, res) => {
    try {
        validationSignUp(req);
        const { name, email, password } = req.body;
    } catch (error) {
        
    }
})