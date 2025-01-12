import mongoose from "mongoose";

const SlipperSchema = new mongoose.Schema({
    category:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    size:{
        type:String,
        require:true,
    }
})

const SlipperModel = mongoose.model("AddSlippers",SlipperSchema)
export default SlipperModel;