const validator = require("validator");

const validationSignUp = (req) => {
    const { name, email, password } = req.body;

    if (name || email || password) {
        throw new Error("All fields are required");
    }
}

module.exports = validationSignUp;