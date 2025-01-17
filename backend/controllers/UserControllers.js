import RegisterModel from "../models/UserRegister.js";

export const createUser = async(req, res) => {
    try{
      const user = await RegisterModel.create(req.body);
      res.status(200).json(user);
    }catch{
      res.status(500).json({message:error.message})
    } 
  }

export const getUser = async(req, res) => {
    try{
      const users = await RegisterModel.find();
      if(!users){
        return res.status(404).json({message:"User not found"});
      }
      res.status(200).json(users);
    }catch{
      res.status(500).json({message:error.message});
    }
  }
  
export const deleteUser = async(req, res) => {
    try{
       const {id} = req.params;
       const user = await RegisterModel.findByIdAndDelete(id);
       res.status(200).json({message:"user is deleted."})
    }catch{
      res.status(500).json({message:error.message})
    }
  }  

export const getById = async(req, res) => {
    try{
    const {id} = req.params;
    const user = await RegisterModel.findById(id);

    if(!user){
      return res.status(404).json({message:"user not found"});
    }
    res.status(200).json(user);
    }catch{
      res.status(500).json({message:error.message})
    }
  }
  
export const updateUser = async(req, res) => {
    try{
      const {id} = req.params;
      const user = await RegisterModel.findByIdAndUpdate(id,req.body);
      if(!user){
        res.status(404).json({message:"user not found"});
      }
      const updateUser = await RegisterModel.findById(id);
      res.status(200).json(updateUser);
    }catch{
      res.status(500).json({message:error.message})
    }
  }  