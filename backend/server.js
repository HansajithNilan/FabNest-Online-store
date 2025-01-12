import express from 'express';
import { connectDB } from './config/db.js';
import mongoose from 'mongoose';
import cors from "cors"
import RegisterModel from "./models/UserRegister.js"

import TeddybareModel from "./models/AddTeddy.js"
import FlowerModel from "./models/AddFlower.js"
import SlipperModel from "./models/AddSlipper.js"



const app = express()
app.use(express.json())
app.use(cors()) 

app.get('/fabnest',(req,res)=>{
    
})


console.log(process.env.MONGO_URL)

app.listen(5000,()=>{
  connectDB();
    console.log("Server Started at http://localhost:5000");
});

//post method
app.post("/login",(req,res)=>{
  const {email,password} = req.body;
  RegisterModel.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }
      else{
        res.json('the password is incorrect')
      }

    }
    else{
      res.json("No record existed")
    }
})
})

app.post('/register',(req,res)=>{
  RegisterModel.create(req.body)
.then(users=> res.json(users))
.catch(err=>res.json(err))

})

app.get('/getUsers',(req,res)=>{
  RegisterModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
})
app.get('/getUsers/:id',(req,res)=>{
  const id = req.params.id;
  RegisterModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.put('/updateuser/:id',(req,res)=>{
  const id = req.params.id;
  RegisterModel.findByIdAndUpdate({_id:id},{
    name:req.body.name,
    email:req.body.email})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.delete('/deleteUser/:id',(req,res)=>{

  const id = req.params.id;

  RegisterModel.findByIdAndDelete({_id:id})
  .then(res=>res.json(res))
  .catch(err => res.json(err))


})

//Addd Teddybares field

app.post('/addteddy',(req,res)=>{
  TeddybareModel.create(req.body)
  .then(teddy => res.json(teddy) )
.catch(err=> res.json(err))
})

app.get('/getteddy',(req,res)=>{
  TeddybareModel.find()
  .then((products)=> res.json(products))
  .catch((err)=>res.json(err))
})

app.delete('/deleteteddybares/:id',(req,res)=>{
  const id = req.params.id;
  TeddybareModel.findByIdAndDelete({_id:id})
  .then(res=>res.json(res))
  .catch(err=> res.json(err))
})
app.get('/getteddy/:id',(req,res)=>{
  const id = req.params.id;
  TeddybareModel.findById({_id:id})
  .then(product => res.json(product))
  .catch(err => res.json(err))
})

app.put('/updateteddybares/:id',(req,res)=>{
  const id = req.params.id;
  TeddybareModel.findByIdAndUpdate({_id:id},{
    name:req.body.name,
    price:req.body.price,
    color:req.body.color})
  .then(product => res.json(product))
  .catch(err => res.json(err))

})

//Add Flowers field

app.post('/addflower',(req,res)=>{
  FlowerModel.create(req.body)
  .then(teddy => res.json(teddy) )
.catch(err=> res.json(err))
})

app.get('/getflowers',(req,res)=>{
  FlowerModel.find()
  .then((products)=> res.json(products))
  .catch((err)=>res.json(err))
})

app.delete('/deleteflower/:id',(req,res)=>{
  const id = req.params.id;
  FlowerModel.findByIdAndDelete({_id:id})
  .then(res=>res.json(res))
  .catch(err=> res.json(err))
})
app.get('/getflower/:id',(req,res)=>{
  const id = req.params.id;
  FlowerModel.findById({_id:id})
  .then(product => res.json(product))
  .catch(err => res.json(err))
})

app.put('/updateflower/:id',(req,res)=>{
  const id = req.params.id;
  FlowerModel.findByIdAndUpdate({_id:id},{
    name:req.body.name,
    price:req.body.price,
    color:req.body.color})
  .then(product => res.json(product))
  .catch(err => res.json(err))

})

//Add Slippers feild

app.post('/addslipper', (req,res) =>{
  SlipperModel.create(req.body)
  .then(slipper => res.json(slipper))
  .catch(err => res.json(err))
})

app.get('/getslippers',(req,res) => {
  SlipperModel.find()
  .then(slippers => res.json(slippers) )
  .catch(err => res.json(err))
})

app.get('/getslipper/:id',(req,res) => {
  const id = req.params.id;
  SlipperModel.findById({_id:id})
  .then(slipper => res.json(slipper))
  .catch(err => res.json(err))
})

app.delete('/deleteslipper/:id',(req,res)=>{
  const id = req.params.id;
  SlipperModel.findByIdAndDelete({_id:id})
  .then(slipper => res.json(slipper))
  .catch(err => res.json(err))
})

app.put('/updateslipper/:id',(req,res) => {
  const id = req.params.id;
  SlipperModel.findByIdAndUpdate({_id:id},{
    category:req.body.category,
    price:req.body.price,
    size:req.body.size})
  .then(slipper => res.json(slipper))  
  .catch(err => res.json(err))
})