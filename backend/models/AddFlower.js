import mongoose from 'mongoose'

const FlowerSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    color:{
        type:String,
        require:true,
    }
})

const FlowerModel = mongoose.model("AddFlower",FlowerSchema)
export default FlowerModel;