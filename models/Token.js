import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		unique: true,
		ref:"user"
	},
	token: { type: String, required: true },
},
{timestamps:true});

export default mongoose.model("token", tokenSchema);

// 
