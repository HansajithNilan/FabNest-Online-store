import express, {Router} from "express"
import{createSlippers,getSlippers,getById,deleteById,updateById} from '../controllers/SlippersControllers.js'


const router = express.Router();

router.post('/', createSlippers);
  
  router.get('/',getSlippers);
  
  router.get('/:id',getById);
  
  router.delete('/:id',deleteById);
  
  router.put('/:id',updateById);

  export default router;