import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        userId:{
            type:Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        message:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("feedback",commentSchema);

 export default schema;