import express from 'express';
import {getAllUser , login ,register} from './routers/users.js';

export const getAllUser = async(req, res) => {
    const users = await User.find({});
    const keyword = req.query.keyword;
    console.log(keyword);
    res.json({
        success:true,
        users
    }) 
};

export const login = async(req, res ,next) => {};
export const register = async(req,res) => {

};
const {name , email,password} = req.body;
let user = await user.findOne({email});
if(user){
    return res.status(404).json({
        success : false ,
        message : "user already found"
    });
}
const hashedPassword = await bcrypt.hash(password , 10);
user = await user.create({name, email , password:hashedPassword});
const token = jwt.sign({
    _id:user._id
}, process.env.JWT_SECRET);

res.status(201).cookie("token", token{
    httpOnly:true,
    maxAge:15*60*1000,
}).json({
    success:true ,
    message:"Registerd successfully",
})
