import mongoose from 'mongoose'

const TeddaybareSchema= new mongoose.Schema({
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

const TeddybareModel = mongoose.model("AddTeddyBares",TeddaybareSchema)
export default TeddybareModel;