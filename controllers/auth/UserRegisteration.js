import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { createToken } from "../createToken.js";
import User from "../../models/User.js";
import crypto from "crypto";
import sendMail from "../../utils/sendEmail.js";
import Token from "../../models/Token.js";
import nodemailer from "nodemailer";

//              MIDDLE FOR VALIDATION
export const registerValidation = [
  body("name").not().isEmpty().withMessage("Invalid Name"),
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must contain atleast 8 alphabets"),
  body("cpassword")
    .isLength({ min: 8 })
    .withMessage("Confirm Password must contain atleast 8 alphabets"),
  body("phone")
    .isNumeric()
    .isLength({ min: 8 })
    .withMessage("Phone number must container 10 Digits and Numeric"),
];

                                      //              POST REGISTRATION ROUTE CONTROLLER
export const registeration = async (req, res) => {
  const {isTeacher,  name, email, password, rollno , cpassword, phone } = req.body;

                                      //          CHECK HERE IS , IT CRENDTIOL IS PROPER VALIDATE OR NOT ?
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
                                      //      FIND USER IS IT EXIST
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.status(400).json({ errors: [{ msg: "Email already exist" }] });
    try {
      const saltRounds = 10;          // GIVE ROUNDS OF SALT
      bcrypt.genSalt(saltRounds, function (err, salt) {
                                    // GENERATE SALT
        bcrypt.hash(password, salt, async (err, hash) => {
          bcrypt.hash(cpassword, salt, async (err, hashed) => {
            const user = await User.create({
              isTeacher,
              name,
              email,
              rollno,
              password: hash,
              cpassword: hashed,
              phone,
            });                             // CREATE USER AND STORE INTO DATABASE
            let TokenRes;
            try {
               TokenRes = await Token.create({   // CREATE TOKEN FOR VERIFY EMAIL USING NODEMAILLER
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
              });
            } catch (error) {
              res.status(200).json({ error });
            }
            // 
            const url =`${process.env.BASE_URL}users/${user.id}/verify/${TokenRes.token}`;
            sendMail(email, url);                 // INVOKE SENDMAIL FUNC
            res
              .status(201)
              .json({ message: "An Email sent to your account please verify" });

            //   const token = createToken(user)// CREATE TOKEN USING USER DATA AND SECRET KEY.
            //   res.status(200).json({ msg: "created succesfull", token  })
          });
        });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  } catch (error) {
    res.status(400).json({ errors: error });
  }
};