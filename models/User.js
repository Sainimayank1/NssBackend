import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        isTeacher:{
            type:Boolean
        },
        name:{
            type:String,
            required:true
        },
        url:{
            type:String
        },
        public_id:{
            type:String
        },
        rollno:{
            type:String
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        cpassword:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        verified:{
            type:Boolean,
            default:false
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("user",userSchema);

 export default schema;
//  