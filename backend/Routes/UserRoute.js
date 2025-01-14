import express,{ Router } from "express"

import {createUser,getUser,deleteUser,getById,updateUser} from '../controllers/UserControllers.js'
const router = express.Router();

router.post('/',createUser)
  
  router.get('/',getUser)
  
  router.delete('/:id',deleteUser)

  router.get('/:id',getById)
  
  router.put('/:id',updateUser)


export default router;