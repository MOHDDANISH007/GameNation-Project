import express from 'express';

import xboxOneModel from "../models/xbox_one/xbox_one.model.js";
import xboxOneModelDetails from "../models/xbox_one/xbox.one_detail.model.js"


const router = express.Router();

router.get("/", async(req, res)=>{
    try{
        console.log("Xbox One accessed");

        const xboxOnedData = await xboxOneModel.find();

        if(!xboxOnedData || xboxOnedData.length === 0) {
            return res.status(404).json({ error: "No Xbox One data found" });
        }
        res.json({
            message: "Xbox One page working!",
            xboxOnes: xboxOnedData
        });
    }
    catch(error){
        console.error("Error fetching Xbox One data:", error);
        res.status(500).json({ error: "Server error while fetching data" });
    }
})

router.get("/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(`Fetching details for Xbox One ID: ${id}`);
        const xboxOneDetails = await xboxOneModelDetails.findOne({ id: id });

        if(!xboxOneDetails) {
            return res.status(404).json({ error: "Xbox One details not found" });
        }

        res.json({
            message: `Xbox One details for ID ${id} fetched successfully!`,
            xboxOneDetails: xboxOneDetails
        });
    }
    catch(error){
        console.error("Error fetching Xbox One details:", error);
        res.status(500).json({ error: "Server error while fetching Xbox One details" });
    }
})



export default router;