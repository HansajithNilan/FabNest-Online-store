import express, { Router }  from "express"
import mongoose from "mongoose"

import TeddybareModel from "../models/AddTeddy.js"
import getSlipperFilter from '../controllers/Slipper.js'

const router = express.Router();

  router.get('/',getSlipperFilter)
 

  export default router;