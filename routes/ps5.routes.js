import express from "express"

import ps5Model from "../models/ps5/ps5.model.js";
import ps5DetailsModel from "../models/ps5/ps5_detail.model.js"

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        console.log("PS5 accessed");

        const ps5Data = await ps5Model.find();
        // const ps5DetailsData = await ps5DetailsModel.find();

        res.json({
            message: "PS5 page working!",
            ps5s: ps5Data,
            // ps5Details: ps5DetailsData
        });
    }
    catch(error){
        console.error("Error fetching ps5 data:", error);
        res.status(500).json({ error: "Server error while fetching data" });
    }
})


router.get("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        console.log(`Fetching details for PS5 ID: ${id}`);
        const ps5Details = await ps5DetailsModel.findOne({ id: id });
        if(!ps5Details) {
            return res.status(404).json({ error: "PS5 details not found" });
        }
        res.json({
            message: `PS5 details for ID ${id} fetched successfully!`,
            ps5Details: ps5Details
        })
    }
    catch(error){
        console.error("Error fetching ps5 details:", error);
        res.status(500).json({ error: "Server error while fetching ps5 details" });
    }
})



export default router;