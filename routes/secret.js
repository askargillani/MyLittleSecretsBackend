import express from "express";
import { newSecret } from "../controllers/secrets.js";
import { newUser } from "../controllers/signup.js";
const router = express.Router();

router.post("/addSecret", newSecret);
router.post("/signup", newUser);
export default router;