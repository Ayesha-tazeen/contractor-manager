import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title:String,
  description:String,
  image:String,
  status:String,
  progress:Number,
  workers:Number,
  expenditure:Number,
  contractorName:String,
  clientId:String
},{timestamps:true});

export default mongoose.model("Project", projectSchema);