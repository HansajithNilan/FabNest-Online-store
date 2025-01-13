import express,{ Router } from "express"

import {createFlowers,getFlowers,deleteFlowers,getbyIdfFlowers,putFlowers} from '../controllers/FlowersControllers.js'
const router = express.Router();

router.post('/',createFlowers)
  
  router.get('/',getFlowers)
  
  router.delete('/:id',deleteFlowers)

  router.get('/:id',getbyIdfFlowers)
  
  router.put('/:id',putFlowers)


export default router;