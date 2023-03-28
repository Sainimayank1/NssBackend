import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        postId:{
            type:Schema.Types.ObjectId,
            ref:"post",
            required:true
        },
        url:{
            type:String
        },
        public_id:{
            type:String
        },
        comment:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("comment",commentSchema);

 export default schema;