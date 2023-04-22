import mongoose, { Schema } from "mongoose";

const chakraSchema = new mongoose.Schema(
    {
        img:{
            type:String
        },
        userName:{
            type:String,
            required:true
        },
        Rank:{
            type:String,
        },
        fatherName:{
            type:String
        },
        resident:{
            type:String
        },
        service:{
            type:String
        },
        award:{
            type:String
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("Ashoka Chakra",chakraSchema);

 export default schema;