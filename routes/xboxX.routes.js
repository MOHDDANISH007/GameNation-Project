import exprss from "express";

import xboxXModel from "../models/xbox_x/xbox_x.model.js";
import xboxXModelDetails from "../models/xbox_x/xbox_x_details.model.js";

const router = exprss.Router();

router.get("/", async(req, res)=>{
    try{
        console.log("Xbox X accessed");

        const xboxXData = await xboxXModel.find();
        if(!xboxXData || xboxXData.length === 0) {
            return res.status(404).json({ error: "No Xbox X data found" });
        }
        res.json({
            message: "Xbox X page working!",
            xboxXs: xboxXData
        });
    }
    catch(error){
        console.error("Error fetching Xbox X data:", error);
        res.status(500).json({ error: "Server error while fetching data" });
    }
});


router.get("/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(`Fetching details for Xbox X ID: ${id}`);
        const xboxXDetails = await xboxXModelDetails.findOne({ id: id });

        if(!xboxXDetails) {
            return res.status(404).json({ error: "Xbox X details not found" });
        }

        res.json({
            message: `Xbox X details for ID ${id} fetched successfully!`,
            xboxXDetails: xboxXDetails
        });
    }
    catch(error){
        console.error("Error fetching Xbox X details:", error);
        res.status(500).json({ error: "Server error while fetching Xbox X details" });
    }
})

export default router;