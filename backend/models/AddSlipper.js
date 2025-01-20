import mongoose from "mongoose";

const SlipperSchema = new mongoose.Schema({
    category:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    size:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    }
},
{
    timestamps:true,
})

const SlipperModel = mongoose.model("AddSlippers",SlipperSchema)
export default SlipperModel;