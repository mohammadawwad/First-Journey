// bcrypt hashes passwords
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

export const signIn = async (req, res) => {
    const {email, password} = req.body;
    
    try{
        //checks if user exists
        const existingUser = await UserModel.findOne({email});

        if(!existingUser){ 
            return res.status(404).json({message: "User doesn't exist"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        //incorrect password
        if(!isPasswordCorrect){
            return res.status(404).json({message: "Invalid credentials"});
        }

        //All is correct and now create a jwt token
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "test", {expiresIn: "1h"});

        //return
        res.status(200).json({result: existingUser, token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

export const signUp = async (req, res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body;

    try{
        //checks if user exists
        const existingUser = await UserModel.findOne({email});

        if(existingUser){ 
            return res.status(404).json({message: "User already exist"});
        }

        //password confirmation
        if(password != confirmPassword){
            return res.status(404).json({message: "Passwords don't match"});
        }

        //hashing passwords
        const hashedPassword = await bcrypt.hash(password, 12);
        
        //creating user
        const result = await UserModel.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});

        //All is correct and now create a jwt token
        const token = jwt.sign({email: result.email, id: result._id}, "test", {expiresIn: "1h"});

        //return
        res.status(200).json({result: result, token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}
