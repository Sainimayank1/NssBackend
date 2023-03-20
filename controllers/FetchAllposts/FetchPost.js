import Post from "../../models/Post.js"
import Comment from "../../models/Comment.js"

const  FetchPosts = async(req,res) => {
    let PostId = req.params.PostId;
    PostId  = PostId.split(':')[1];
    try {
        const data = await Post.find({_id:PostId})
        const comment = await Comment.find({postId:PostId}).sort({createdAt:-1});
        return res.status(200).json({data , comment})
    } catch (error) {
        return res.status(500).json({error:[error]});
    }
  
}

export default FetchPosts