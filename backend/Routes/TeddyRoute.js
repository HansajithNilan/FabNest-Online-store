import express, { Router }  from "express"
import mongoose from "mongoose"

import TeddybareModel from "../models/AddTeddy.js"
import { createTeddy,getTeddy,deleteTeddy,getbyIdTeddy,putTeddy } from '../controllers/TeddyControllers.js'

const router = express.Router();

  router.post('/',createTeddy)
  
  router.get('/',getTeddy)
  
 // router.delete('/:id',deleteTeddy)

  router.get('/:id',getbyIdTeddy)
  
  router.put('/:id',putTeddy)

 
 

  export default router;