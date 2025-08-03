import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://siddhartha:MongoDB3@cluster0.sgkqk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}