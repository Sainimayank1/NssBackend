import express from "express";
import auth from "../utils/auth.js";
import {AshokaVir , AshokaSingleVir , AshokaVirPost} from "../controllers/awards/AshokaChakra.js"
import {KirtiChakra,KirtiChakraSingle , KirtiChakraPost} from "../controllers/awards/KirtiChakra.js"
import {MahaVir,MahaVirSingle,MahaVirPost} from "../controllers/awards/MahaVirChakra.js"
import {paramVir,paramVirSingle,paramVirPost} from "../controllers/awards/ParamVirChakra.js"
import {Vir,VirSingle,VirPost} from "../controllers/awards/VirChakra.js"
import {ShauryaChakra,ShauryaChakraSingle,ShauryaChakraPost} from "../controllers/awards/ShauryaChakra.js"

const router = express.Router();




router.get("/ashoka" , AshokaVir);
router.get("/kirti",KirtiChakra);
router.get("/mahavir" , MahaVir)
router.get("/paramvir" ,paramVir);
router.get("/virchakra" ,Vir);
router.get("/shaurya" ,ShauryaChakra);


router.get("/ashokaSingle/:_id",AshokaSingleVir);
router.get("/kirtiSingle/:_id",KirtiChakraSingle);
router.get("/mahavirSingle/:_id",MahaVirSingle)
router.get("/paramvirSingle/:_id",paramVirSingle)
router.get("/virchakraSingle/:_id",VirSingle)
router.get("/shauryaSingle/:_id",ShauryaChakraSingle)


router.post("/ashoka",AshokaVirPost)
router.post("/kirti",KirtiChakraPost)
router.post("/mahavir",MahaVirPost)
router.post("/paramvir",paramVirPost)
router.post("/virchakra",VirPost)
router.post("/shaurya",ShauryaChakraPost)


export default router