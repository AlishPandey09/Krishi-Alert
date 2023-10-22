import express from "express";
import { createDummyData,changeDummyData, getAllCrops } from "../controller/cropController.js";
const cropRoute = express.Router();
cropRoute.route("")
.post(createDummyData)

export default cropRoute;