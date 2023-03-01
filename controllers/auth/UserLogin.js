import { body, validationResult } from 'express-validator';
import bcrypt from "bcrypt";
import User from "../../models/User.js"
import { createToken } from '../createToken.js';
import Token from '../../models/Token.js';
import sendMail from '../../utils/sendEmail.js';


//              MIDDLE FOR VALIDATION
export const loginValidation = [
    body("email").not().isEmpty().withMessage("Please enter Email"),
    body("password").not().isEmpty().withMessage("Please enter Password"),
]

export const Login = async (req, res) => {
    const { email, password } = req.body;

    //          CHECK HERE IS , IT CRENDTIOL IS PROPER VALIDATE OR NOT ?
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    try {
        const user = await User.findOne({ email });             // FIND USER, IF EXIST
        if (user) {
            const matched = await bcrypt.compare(password, user.password);      // COMPARE PASSOWORD
            if (matched) {
                if (!user.verified) {                       // CHECK WHETHER USER VERIFIED OR NO , IF NOT THEN SEND LINK AGAIN
                    let token = await Token.findOne({ userId: user._id });
                    if (!token) {
                        token = await Token.create({
                            // 
                            userId: user._id,
                            token: crypto.randomBytes(32).toString("hex"),
                        });
                    }
                    const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
                    await sendMail(user.email, url);        // SEND MAIL
                    return res
                        .status(400)
                        .json({ errors: "An Email sent to your account please verify" });
                }
                const maintoken = createToken(user);        // SEND TOKEN IN RESPONSE 
                return res.status(200).json({ msg: "User login succesfully", maintoken});
            }
            else
                return res.status(401).json({ errors :[ "Password Does't match"] });
        }
        else
            return res.status(404).json({errors: [ "Email not found" ]});

    }
    catch (error) {
        return res.status(400).json({ errors: error.array() });
    }
}