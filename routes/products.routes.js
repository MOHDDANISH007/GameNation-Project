import express from 'express';

import ConsoleModel from "../models/console/console.model.js";
import ConsoleDetailsModel from "../models/console/console_detail.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        console.log("Console accessed");
        const consolesData = await ConsoleModel.find();

        if(!consolesData || consolesData.length === 0) {
            return res.status(404).json({ error: "No console data found" });
        }

        res.json({
            message: "Console page working!",
            consoles: consolesData
        });
    }
    catch(error){
        console.error("Error fetching console data:", error);
        res.status(500).json({ error: "Server error while fetching data" });
    }
})


router.get("/:id", async (req, res) => {
    try{
        const product_id = req.params.id;
        console.log(`Fetching details for console ID: ${product_id}`);
        const consoleDetails = await ConsoleDetailsModel.findOne({ product_id: product_id });
        if(!consoleDetails) {
            return res.status(404).json({ error: "Console details not found" });
        }
        res.json({
            message: `Console details for ID ${product_id} fetched successfully!`,
            consoleDetails: consoleDetails
        });
    }
    catch(error){
        console.error("Error fetching console details:", error);
        res.status(500).json({ error: "Server error while fetching console details" });
    }
})


export default router;
