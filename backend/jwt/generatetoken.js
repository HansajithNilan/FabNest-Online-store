import jwt from 'jsonwebtoken';

export const generateToken = (payload)=>{
    const token = jwt.sign(payload,'nilan')
    return token;
}

export const decodeToken = (token)=>{
    const decode  = jwt.decode(token)

    return decode;
}