import express from "express";
import userRouter from "./routes/userRoute.js";
import updates from "./controller/messageController.js";
import cors from "cors";
import CropModel from "./models/dummySchema.js";
import cropRoute from "./routes/cropRoute.js";
import {allCropRoutes, changeRoute} from "./routes/AllCropsRoutes.js"
//import {Vonage} from "@vonage/server-sdk" 
const path = "client/Farmer_Project"

const app = express();
const port = 3000;
const userRoute = express.Router();

app.listen(port,()=>{
    console.log(`Server is connected at port ${port}`);
});
app.use(cors({
    origin: " http://localhost:4200"
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",allCropRoutes);
app.use("/",changeRoute)
app.use("",cropRoute)
app.use(express.static(path +"/src"))
app.use("/user",userRouter);

const changeStream = CropModel.watch();
changeStream.on("change",updates)