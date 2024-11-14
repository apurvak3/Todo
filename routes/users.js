import express from 'express';
import { getAllUser, register,login } from '../controllers/users.js';
const router =  express.Router();
router.get("/all" , getAllUser);
router.post("/new" , register);
router.post("/login" , login);
export default router;