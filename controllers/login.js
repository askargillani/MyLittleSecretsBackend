import { User } from "../models/signup.js";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
const secret_key = process.env.SECRET_KEY;

export const userExists = async (req,res,next) => {
    try {
        const {email,password} =  req.body;
        const existingUser =  await User.findOne({email,password});
        if(existingUser) {
            res.status(201).json({
                success: true,
                token: jwt.sign({ email: email}, secret_key, { expiresIn: '1h' })
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password. Please try again.",
              });
        }

    }
    catch(error) {
        next(error);
    }
}