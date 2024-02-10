import express from "express";
import { newSecret } from "../controllers/secrets.js";
import { newUser } from "../controllers/signup.js";
const loginRouter = express.Router();

loginRouter.post("/addSecret", newSecret);

const router = express.Router();

router.post("/addSecret", newSecret);
router.post("/signup", newUser);
export default router;
export default loginRouter;
