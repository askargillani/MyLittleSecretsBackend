import { User } from "../models/signup.js";

export const newUser = async (req,res,next) => {
    try {
        const {email,password} =  req.body;

        const existingUser =  await User.findOne({email});
        if(!existingUser) {
            await User.create({
                email,
                password
            })
            res.status(201).json({
                success: true,
                message: "User added successfully"
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Email already exists. Choose a different email.",
              });
        }

    }
    catch(error) {
        next(error);
    }
}