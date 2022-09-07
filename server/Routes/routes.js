
const express = require("express")
const User = require("../Model/user")


const router = express.Router();

function validateEmailAccessibility(email) {

    return User.findOne({ email: email }).then(function (result) {
        return result !== null;
    });
}

router.post('/submitForm', async (req, res, next) => {
    try {
        const form = req.body;
        const email = form.email
        const newSugges = new User(form)
        
        if(User.findOne({ email: email })){
            
            res.status(500).json({ msg: "Email Already Present" })
        }
        
        await newSugges.save();
        return res.status(200).json({ msg: "form submitted succesfully " })
    } catch (error) {
        res.status(500).json({ msg: "Error while submitting the form" })
    }
})

module.exports = router;