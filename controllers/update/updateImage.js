import User from "../../models/User.js"
import cloudinary from "cloudinary";
import { createToken } from "../createToken.js";

const updateImage = async(req ,res) =>
{
       const id = req.body.id;
       const url = req.body.imgData.url;
        const public_id = req.body.imgData.public_id;
       cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_KEY, 
        api_secret: process.env.CLOUD_KEY_SECRET 
        }); 
         try {
            const user = await User.find({_id:id});
            const response = await User.findOneAndUpdate({_id:id},{url:url},{new:true})
            const response2 = await User.findOneAndUpdate({_id:id},{public_id:public_id},{new:true});
            if(response)
            {
                const token = createToken(response2);
                res.status(200).json({token,msg:"Your Image has been Change"}); 
            }
         } catch (error) {
            res.status(500).json({error})
         }
       
}

export default updateImage