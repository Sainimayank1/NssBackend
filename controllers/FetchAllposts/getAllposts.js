import Post from "../../models/Post.js"


const  getAllposts = async(req,res) => {
    try {
        const data = await Post.find({}).sort({createdAt:-1});
        return res.status(200).json({data})
    } catch (error) {
        return res.status(500).json({error});
    }
  
}

export default getAllposts