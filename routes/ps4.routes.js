import express from 'express';

const router =  express.Router();
import ps4Model from "../models/ps4/ps4.model.js";
import ps4DetailsModel from "../models/ps4/ps4_details.model.js";

console.log("PS4 Data is :", ps4Model);
console.log("PS4 Details Data is :", ps4DetailsModel);

router.get('/', async(req, res)=>{
    try{
        console.log('PS4 accessed');

        const ps4Data = await ps4Model.find();
        // const ps4DetailsData = await ps4DetailsModel.find();

        res.json({
            message: 'PS4 page working!',
            ps4s: ps4Data,
            // ps4Details: ps4DetailsData
        });
    }
    catch(error){
        console.error('Error fetching ps4 data:', error);
        res.status(500).json({ error: 'Server error while fetching data' }); 
    }
})


router.get("/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(`Fetching details for PS4 ID: ${id}`);
        const ps4Details = await ps4DetailsModel.findOne({ id: id });
        if (!ps4Details) {
            return res.status(404).json({ error: 'PS4 details not found' });
        }
        res.json({
            message: `PS4 details for ID ${id} fetched successfully!`,
            ps4Details: ps4Details
        });
    }
    catch(error){
        console.error('Error fetching ps4 details:', error);
        res.status(500).json({ error: 'Server error while fetching ps4 details' });
    }
})

export default router;