import mongoose from 'mongoose'

const RegisterSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        default:"user"
    }
},
{
    timestamps:true,
})

const RegisterModel= mongoose.model("Users",RegisterSchema)
export default RegisterModel;