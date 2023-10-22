import userModel from "../models/userSchema.js";
async function createUser(req,res){
    try
    {const data = req.body;
    const user = await userModel.create(data);
    console.log(user);
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

export default createUser;