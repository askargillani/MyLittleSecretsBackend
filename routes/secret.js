import express from "express";
import { newSecret } from "../controllers/secrets.js";
const loginRouter = express.Router();

loginRouter.post("/addSecret", newSecret);

export default loginRouter;