import { Request, Response } from "express";
import { createUser } from "../../usecases/user/createUser";
import { UserInterface } from "../../entities/user";


export const userSignup = async(req:Request,res:Response) => {
    try {
        const userData = req.body;
        const partialUserData: Partial<UserInterface> = userData;

         if (partialUserData.username && partialUserData.email && partialUserData.phone && partialUserData.password){
             const user = await createUser(userData);
             res.status(201).json({ message: "User created successfully", user });
         }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred" });
        
    }
}