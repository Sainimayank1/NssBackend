import Post from "../../models/Post.js"
import cloudinary from "cloudinary";

const createPost = async (req, res) => {
    const errors = [];
    const { title, description, slug, _id, name ,url , public_id, image_url , image_public , vedio_public , vedio_url , vedio_thumbnail} = req.fields;
    // Validation

    if (title === "") {
        errors.push({ msg: "Tittle is required" });
    }
    if (description === "") {
        errors.push({ msg: "Description is required" });
    }
    if (slug === "") {
        errors.push({ msg: "Slug is required" });
    }

    const slugCheck = await Post.findOne({ slug });
    if (slugCheck) {
        errors.push({ msg: "Please choose a unique Slug/URL" })
    }



    if (errors.length != 0) {
        return res.status(400).json({ errors, files })
    }
    else {
        try {
            const response = await Post.create({
                title,
                url,
                public_id,
                image: {
                    public_id: image_public,
                    url: image_url
                },
                vedio:{
                    public_id: vedio_public,
                    url: vedio_url,
                    thumbnail_url:vedio_thumbnail
                },
                description,
                slug,
                userName: name,
                userId: _id
            });
            if (response)
                return res.status(200).json([{ msg: "Your post has been created Succesfully" }]);
        }
        catch (error) {
            return res.status(500).json([{ msg: error }])
        }
    }
}

export default createPost