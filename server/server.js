
const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");

const port = process.env.PORT || 5000;
const Connection = require("./db/conn.js")



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors());


const dotenv = require("dotenv")

const Router = require("./Routes/routes")


dotenv.config();


app.get("/", (req, res) => {
    res.send("HelloWorld")
})

app.use("/", Router);


const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
Connection(USERNAME, PASSWORD);



app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
});

