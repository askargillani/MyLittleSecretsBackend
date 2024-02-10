import express from "express";
import { newSecret } from "../controllers/secrets.js";
import { newUser } from "../controllers/signup.js";
import { userExists } from "../controllers/login.js";
const router = express.Router();

router.post("/addSecret", newSecret);
router.post("/signup", newUser);
router.post("/login",userExists);
export default router;