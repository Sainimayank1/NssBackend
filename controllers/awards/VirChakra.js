import Chakra from "../../models/gallantryModel/virChakra.js"

export const Vir = async (req , res) => {
  try {
    const response = await Chakra.find();
    if(response)
        return res.status(200).json({msg:"All Posts" , data:response});

  } catch (error) {
    return res.status(500).json({error});
  }
}

export const VirSingle = async (req , res) => {
  const {_id} = req.params
  try {
    const response = await Chakra.find({_id});
    if(response)
    return res.status(200).json({msg:"Post Find SuccesFully" , data:response});
    
  } catch (error) {
    return res.status(500).json({error});
  }
}

export const VirPost = async (req , res) => {
  console.log(req.body)
  const { img, userName, Rank, fatherName, resident, service, award } = req.body;
  try {
    const response = await Chakra.create({ img, userName, Rank, fatherName, resident, service, award });
    if (response)
      return res.status(200).json({ msg: "Post Create Succesfully" });

  } catch (error) {
    return res.status(500).json({ error });
  }
}

