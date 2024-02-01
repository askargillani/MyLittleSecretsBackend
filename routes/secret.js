import express from "express";
import { newSecret } from "../controllers/secrets.js";
const router = express.Router();

router.post("/addSecret", newSecret);

export default router;