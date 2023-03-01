import Token from "../../models/Token.js";
import User from "../../models/User.js";

const verifyEmail = async (req,res) =>
{
    try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" }); 
		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		const response = await User.updateOne({ _id: user._id},{ verified: true });
		await token.remove();

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
	// 
}

export default verifyEmail