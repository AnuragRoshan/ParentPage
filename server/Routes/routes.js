
const express = require("express");
const { reset } = require("nodemon");
const User = require("../Model/user")



const router = express.Router();



router.use('/submitForm', async (req, res, next) => {
    try {
        const form = req.body;
        const email = form.email;
        const name = form.name
        const suggestions = form.suggestions



        user=await User.findOne({email:email});

            if (user) {
                await User.updateOne(
                    { email: email },
                    { $push: { suggestions: suggestions } }
                )
                //  res.status(500).json({ msg: "Same Email Already Exist " })
            } else {
                const newSugges = new User(form)
                newSugges.save();
                return res.status(200).json({ msg: "form submitted succesfully " })
            }

    } catch (error) {
        res.status(500).json({ msg: "Error while submitting the form" })
    }
})

module.exports = router;