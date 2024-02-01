import express from "express";
import router from "./routes/secret.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

mongoose
    .connect("mongodb://127.0.0.1:27017", {
    dbName: "myLittleSecrets",
    })
    .then((c) => console.log('Database Connected'))
    .catch((e) => console.log(e));

export const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use("/",router);

app.get("/", (req, res) => {
    res.send("Nice working");
  });

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})