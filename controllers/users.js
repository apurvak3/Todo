import express from 'express';
import { User } from '../models/users.js';
import bcrypt from 'bcrypt'; // Make sure you import bcrypt
import jwt from 'jsonwebtoken'; // Make sure you import jwt

// Get All Users
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        const keyword = req.query.keyword;
        console.log(keyword);
        res.json({
            success: true,
            users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

// User Login (Placeholder)
export const login = async (req, res, next) => {
    // Add your login logic here
};

// User Registration
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });

        if (user) {
            return res.status(404).json({
                success: false,
                message: "User already found",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        user = await User.create({ name, email, password: hashedPassword });

        // Generate JWT token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        // Send the response with a cookie
        res.status(201).cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000, // 15 minutes
        }).json({
            success: true,
            message: "Registered successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
