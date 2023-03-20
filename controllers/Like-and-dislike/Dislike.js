import Post from "../../models/Post.js"


const LikePost = async (req, res) => {
     try {
          let response  = await Post.findByIdAndUpdate(req.body.props ,{ $pull : {likes:req.body._id}} , {new:true})
          console.log(response)
          if(response)
          {
               res.status(200).json({msg:"Like succesfully"})
          }
     } catch (error) {
               res.status(400).json({msg:error})
     }
}

export default LikePost