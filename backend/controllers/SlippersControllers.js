import SlipperModel from "../models/AddSlipper.js";

export const createSlippers =async(req,res) =>{
   try{
     const slippers = await SlipperModel.create(req.body);
     res.status(200).json(slippers);
   }catch{
     res.status(500).json({Message:error.Message});
   }
  };


  export const getSlippers = async(req,res) => {
    try{
      const slippers = await SlipperModel.find();
      if(!slippers){
        res.status(404).json({Message:"Sliipers not found"})
      }
      res.status(200).json(slippers)
    }catch{
      res.status(500).json({Message:error.Message});
    }
  }


  export const getById = async(req,res) => {
    try{
     const {id} = req.params;
     const slipper = await SlipperModel.findById(id);
     if(!slipper){
      return res.status(404).json({Message:"Slipper is not founded."})
     }
     res.status(200).json(slipper);
    }catch{
      res.status(500).json({message: error.message});
    }
  }

  export const deleteById= async(req,res)=>{
    try{
     const {id} = req.params;
     const slipper = await SlipperModel.findByIdAndDelete(id);
     res.status(200).json({message:"slipper is deleted."})
    }catch{
      res.status(500).json({message:error.message});
    }
  }

  export const updateById = async(req,res) => {
    try{
      const {id} = req.params;
      const slipper = await SlipperModel.findByIdAndUpdate(id,req.body);

      if(!slipper){
        res.status(404).json({message:"Slipper not updated"});
      } 
      const updateSlipper = await SlipperModel.findById(id);
      res.status(200).json(updateSlipper);    
    }catch{
      res.status(500).json({message:error.message});
    }
  }