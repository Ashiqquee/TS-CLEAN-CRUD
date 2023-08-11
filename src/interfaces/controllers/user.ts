import { Request, Response } from "express";
import { createUser } from "../../usecases/user/createUser";


export const userSignup = async(req:Request,res:Response) => {
    try {
        
        const userData = req.body;

        if (!userData.username || !userData.email || !userData.phone || !userData.password) {
            return res.status(401).json({ message: "Enter all details" });
        }

        
        const user = await createUser(userData);
        console.log(user);
        
        res.status(201).json({ user });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred" });
        
    }
}