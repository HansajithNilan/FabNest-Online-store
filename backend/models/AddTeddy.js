import mongoose from 'mongoose'

const TeddaybareSchema= new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please Enter Product Name "],
    },
    price:{
        type:String,
        require:true,
    },
    color:{
        type:String,
        require:true,
    },
    image:{
        type:String,
    }
},
{
    timestamps:true,
})

const TeddybareModel = mongoose.model("AddTeddyBares",TeddaybareSchema)
export default TeddybareModel;