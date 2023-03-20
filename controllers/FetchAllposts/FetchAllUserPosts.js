import Post from "../../models/Post.js"


const  FetchAllUserPosts = async(req,res) => {
    const page = req.params.page.split(':');
    const _id = req.params._id.split(':');
    const perPage = 5;
    const id = _id[1];
    const skip = (page[1] -1) * perPage;
    try {
        const count = await Post.find({_userId:id}).countDocuments();
        const data = await Post.find({_userId:id}).skip(skip).limit(perPage).sort({createdAt:-1});
        return res.status(200).json({data  , count , perPage})
    } catch (error) {
        return res.status(500).json({error});
    }
  
}

export default FetchAllUserPosts