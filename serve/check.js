import express from "express";
import mongoose from 'mongoose';
import CropModel from "./models/dummySchema";
const DB_link = "mongodb+srv://raman29406:Raman29406@cluster0.m2jskiw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB_link)
.then(()=>{
    console.log("DB connected");
})

const changeStream = CropModel.watch();
changeStream.on("change",(change)=>{
    console.log("value Change", change);
})