
import 'dotenv/config'

import jwt  from "jsonwebtoken"



  const createtoken =(id)=>{
    return jwt.sign ({id},process.env.SECRET_KEY,{expiresIn: 3 * 24 * 60 * 60,} )

}

export default createtoken