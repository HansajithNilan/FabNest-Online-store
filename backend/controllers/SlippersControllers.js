import SlipperModel from "../models/AddSlipper.js";

export const createSlippers =(req,res) =>{
    SlipperModel.create(req.body)
    .then(slipper => res.json(slipper))
    .catch(err => res.json(err))
  }


  export const getSlippers = (req,res) => {
    SlipperModel.find()
    .then(slippers => res.json(slippers) )
    .catch(err => res.json(err))
  }


  export const getById = (req,res) => {
    const id = req.params.id;
    SlipperModel.findById({_id:id})
    .then(slipper => res.json(slipper))
    .catch(err => res.json(err))
  }

  export const deleteById= (req,res)=>{
    const id = req.params.id;
    SlipperModel.findByIdAndDelete({_id:id})
    .then(slipper => res.json(slipper))
    .catch(err => res.json(err))
  }

  export const updateById = (req,res) => {
    const id = req.params.id;
    SlipperModel.findByIdAndUpdate({_id:id},{
      category:req.body.category,
      price:req.body.price,
      size:req.body.size})
    .then(slipper => res.json(slipper))  
    .catch(err => res.json(err))
  }