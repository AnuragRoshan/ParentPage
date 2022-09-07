import User from "../Model/user.js"


export const submitForm = async (request, response) => {
    try {
        const form = request.body;
        const newSugges = new User(user)
        await newSugges.save();
        return response.status(200).json({ msg: "form submitted succesfully " })
    } catch (error) {
        return response.status(500).json({ msg: "Error while submitting the form" })
    }

}