import { Secret } from "../models/secret.js";

export const newSecret = async (req,res,next) => {
    try {
        const {intensity, secret, peopleAware} =  req.body;
        await Secret.create({
            intensity, 
            secret, 
            peopleAware
        })
        res.status(201).json({
            success: true,
            message: "Secret added Successfully"
        })
    }
    catch(error) {
        next(error);
    }
}