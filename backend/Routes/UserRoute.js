import express,{ Router } from "express"
import RegisterModel from "../models/UserRegister.js";
import authMiddleware from "../middleware/authMiddleware.js";

import {createUser,getUser,deleteUser,getById,updateUser} from '../controllers/UserControllers.js'
const router = express.Router();

router.post('/',createUser)
  
  router.get('/',getUser)
  
  router.delete('/:id',deleteUser)

  router.get('/:id',getById)
  
  router.put('/:id',updateUser)


  router.get("/me", authMiddleware, async (req, res) => {
    try {
        const user = await RegisterModel.findById(req.user.userId).select("-password"); // Exclude password
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});



export default router;