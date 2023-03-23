import Feedback from "../../models/Feedback.js"
import sendMail from "../../utils/sendEmailFeddBack.js"


const SubmitFeedback = async (req, res) => {
    const {_id,name,message} = req.body;
     try {
            sendMail(name,_id,message.message);
            const response = await Feedback.create({userId:_id,userName:name,message:message.message})
          if(response)
          {
               res.status(200).json({msg:"Sent Succesfully"})
          }
     } catch (error) {
               res.status(400).json({error})
     }
}

export default SubmitFeedback