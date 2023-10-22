import { getAllCrops,changeDummyData } from "../controller/cropController.js";
import express from "express";
const allCropRoutes= express.Router();
const changeRoute = express.Router();
allCropRoutes.route("/getcrop")
.get(getAllCrops)
changeRoute.route("/updatecrop")
.patch(changeDummyData)
 export  {allCropRoutes, changeRoute};