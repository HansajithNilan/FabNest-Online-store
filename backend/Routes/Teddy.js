import express, { Router }  from "express"
import mongoose from "mongoose"

import TeddybareModel from "../models/AddTeddy.js"
import getTeddyFilter from '../controllers/Teddy.js'

const router = express.Router();

  router.get('/',getTeddyFilter)
 

  export default router;