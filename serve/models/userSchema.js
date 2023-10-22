import mongoose from "mongoose";
const db_link = 'mongodb+srv://raman29406:Raman29406@cluster0.m2jskiw.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_link)
.then(()=>{
    console.log("DB Connected");
})
.catch(function(e){
    console.log(e.message);
})
const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        Length:10
    },
    cropPreference:{
        type:Array,
        required:true
    }
})

 const userModel = mongoose.model("userModel",userSchema);
 export default userModel;