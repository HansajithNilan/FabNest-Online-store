import FlowerModel from '../models/AddFlower.js'

export const createFlowers = (req,res)=>{
    FlowerModel.create(req.body)
    .then(teddy => res.json(teddy) )
  .catch(err=> res.json(err))
  }
  
  export const getFlowers = (req,res)=>{
    FlowerModel.find()
    .then((products)=> res.json(products))
    .catch((err)=>res.json(err))
  }
  
  export const deleteFlowers = (req,res)=>{
    const id = req.params.id;
    FlowerModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=> res.json(err))
  }
  export const getbyIdfFlowers = (req,res)=>{
    const id = req.params.id;
    FlowerModel.findById({_id:id})
    .then(product => res.json(product))
    .catch(err => res.json(err))
  }
  
  export const putFlowers = (req,res)=>{
    const id = req.params.id;
    FlowerModel.findByIdAndUpdate({_id:id},{
      name:req.body.name,
      price:req.body.price,
      color:req.body.color})
    .then(product => res.json(product))
    .catch(err => res.json(err))
  
  }