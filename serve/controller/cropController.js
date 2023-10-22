import CropModel from "../models/dummySchema.js";
async function getAllCrops(req,res){
        const data = await CropModel.find({})
        res.json({
            data: data
        })
}
async function createDummyData(req,res){
    try
    {const data = req.body;
    const user = await CropModel.create(data);
    console.log(req.body);
    res.json({
        data:user
    })
   // res.alert("User created Succesfully")
}
    catch(err){
        console.log(err)
        res.json({
            message: err.message
        })
    }
}
async function changeDummyData(req,res){
    try{
        let id = req.body._id;
        let user=await CropModel.findById(id);
        let dataToBeUpdated=req.body; 
        if(user){
            const keys=[];
            for(let key in dataToBeUpdated){
                keys.push(key);
            }
            for(let i=0;i<keys.length;i++){
                user[keys[i]]=dataToBeUpdated[keys[i]];
            }
            const updatedData=await user.save();
            res.json({ message:"data updated successfully" }) 
        }
        else{
            res.json({ message:"no user found" }) }
        }
    
    catch(e){
        res.json({
            message:e.message
        })
    }
}
export {changeDummyData,createDummyData,getAllCrops}