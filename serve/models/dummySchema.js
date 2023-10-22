import mongoose from "mongoose"
const DB_link= "mongodb+srv://raman29406:Raman29406@cluster0.m2jskiw.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB_link)
.then(()=>{
    console.log("DB connected")
})
const cropSchema = mongoose.Schema({
    CropName:{
        type:String,
        required:true
    },
    MSP:{
        type:Number,
        required:true
    },
    Unit:{
        type:String,
        required:true
    }
})
const CropModel = mongoose.model("CropModel",cropSchema);
export default CropModel