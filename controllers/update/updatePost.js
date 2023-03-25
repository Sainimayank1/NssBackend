import { body, validationResult } from 'express-validator';
import Post from "../../models/Post.js"



export const updaetValidation = [
    body("title").not().isEmpty().trim().withMessage("Title is required"),
    body('description').not().isEmpty().trim().withMessage("Description is required")
]

export const updatePost = async (req, res) => {
    
    const {title, description,id} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        res.status(400).json({errors})
    }
    else
    {
        try {
            const response = await Post.findByIdAndUpdate(id,{
                title,
                description
            })
            if(response)
                res.status(200).json({msg:"Sucessfully updated"})
            
        } catch (error) {
            return res.status(500).json({error});
        }
    }
}