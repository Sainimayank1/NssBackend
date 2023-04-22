import Chakra from "../../models/gallantryModel/kirtiChakra.js"

export const KirtiChakra = async (req, res) => {
  try {
    const response = await Chakra.find();
    if (response)
      return res.status(200).json({ msg: "All Posts", data: response });

  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const KirtiChakraSingle = async (req, res) => {
  const {_id} = req.params
  try {
    const response = await Chakra.find({_id});
    if(response)
    return res.status(200).json({msg:"Post Find SuccesFully" , data:response});
    
  } catch (error) {
    return res.status(500).json({error});
  }
}

export const KirtiChakraPost = async (req, res) => {
  const { img, userName, Rank, fatherName, resident, service, award } = req.body;
  try {
    const response = await Chakra.create({ img, userName, Rank, fatherName, resident, service, award });
    if (response)
      return res.status(200).json({ msg: "Post Create Succesfully" });

  } catch (error) {
    return res.status(500).json({ error });
  }
}
