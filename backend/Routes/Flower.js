import express, { Router }  from "express"
import mongoose from "mongoose"

import TeddybareModel from "../models/AddTeddy.js"
import getFlowerFilter from '../controllers/Flower.js'

const router = express.Router();

  router.get('/',getFlowerFilter)
 

  export default router;