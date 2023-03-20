import Post from "../../models/Post.js"
import Comment from "../../models/Comment.js"
import cloudinary from "cloudinary";

const fetchPost = async (req , res) => {
  try {
    const _id = req.params.id;
    const post = await Post.findById({_id});
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_KEY, 
        api_secret: process.env.CLOUD_KEY_SECRET 
    });  
    const pulic_id = post.image.public_id; 
    const image  = await cloudinary.uploader.destroy(pulic_id);
    await Post.findByIdAndRemove({_id});
    const comment  =  await Comment.deleteMany({postId:_id});
    return res.status(200).json({post ,msg:"Your post has been deleted."});

  } catch (error) {
    return res.status(500).json({error});
  }
}

export default fetchPost