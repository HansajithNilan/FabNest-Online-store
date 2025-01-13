import TeddybareModel from "../models/AddTeddy.js"

export const createTeddy = (req,res)=>{
    TeddybareModel.create(req.body)
    .then(teddy => res.json(teddy) )
  .catch(err=> res.json(err))
  }
  

  export const getTeddy = (req,res)=>{
    TeddybareModel.find()
    .then((products)=> res.json(products)) 
    .catch((err)=>res.json(err))
  }


  export const deleteTeddy = (req,res)=>{
    const id = req.params.id;
    TeddybareModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=> res.json(err))
  }

  export const getbyIdTeddy =(req,res)=>{
    const id = req.params.id;
    TeddybareModel.findById({_id:id})
    .then(product => res.json(product))
    .catch(err => res.json(err))
  }

  export const putTeddy = (req,res)=>{
    const id = req.params.id;
    TeddybareModel.findByIdAndUpdate({_id:id},{
      name:req.body.name,
      price:req.body.price,
      color:req.body.color})
    .then(product => res.json(product))
    .catch(err => res.json(err))
  
  }