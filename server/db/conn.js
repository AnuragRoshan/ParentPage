// import mongoose from "mongoose";
const mongoose = require("mongoose")


// mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@parentpage.a0malg8.mongodb.net/?retryWrites=true&w=majority`, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log(`Connected To Database Successfully`);
// }).catch((e) => {
//     console.log(e);
// })

const Connection = (USERMAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERMAME}:${PASSWORD}@parentpage.a0malg8.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.connect(URL, {
            useNewUrlParser: true
        });
        console.log("Connected To Database");
    } catch (error) {
        console.log("error while loadind the data base", error);
    }
}

module.exports=Connection ;