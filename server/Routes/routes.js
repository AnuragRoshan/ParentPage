
const express = require("express");
const { reset } = require("nodemon");
const User = require("../Model/user")
var validator = require("email-validator");


const router = express.Router();



router.use('/submitForm', async (req, res, next) => {
    try {
        const form = req.body;
        const email = form.email;
        const name = form.name
        const suggestions = form.suggestions

        const emailCheck = validator.validate(email);
        // console.log(emailCheck);

        if(emailCheck==false){
            return res.status(202).json({ msg: "Invalid Email" })
        }

        user=await User.findOne({email:email});

            if (user) {
                await User.updateOne(
                    { email: email },
                    { $push: { suggestions: suggestions } }
                )
                 res.status(200).json({ msg: "Suggestion Added To Your Stack" })
            } else {
                const newSugges = new User(form)
                newSugges.save();
                return res.status(200).json({ msg: "Added Succesfully " })
            }

    } catch (error) {
        res.status(500).json({ msg: "Error while submitting the form" })
    }
})

module.exports = router;