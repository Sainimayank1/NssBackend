import express from "express";
import Donated from "../models/Donated.js"
const router = express.Router();

router.post('/donated', async(req, res) => {
    const data = req.body;
    try {
          const response  = await Donated.create(data);
          if(response)
            res.status(200).json({msg:"Data submit Succesfully"});
    } catch (error) {
        res.status(400).json({error:error});
    }
  })
  
router.get('/TotalCount' , async(req,res) =>
  {
    try {
      const response  = await Donated.find().count();
      if(response)
        res.status(200).json({count:response});
  } catch (error) {
    res.status(400).json({error:error});
  }
  })
  
router.get('/TotalPeople' , async(req,res) =>
  {
    try {
      const response  = await Donated.find();
      if(response)
        res.status(200).json({people:response});
  } catch (error) {
    res.status(400).json({error:error});
  }
  })
  

  export default router