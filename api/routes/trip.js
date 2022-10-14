import express from "express";
import Trip from '../models/Trip.js';
const router = express.Router();
 
// CREATE
router.post('/', async (req, res) =>
{
    const newTrip = new Trip(req.body);
    try
    {
        const savedTrip = await newTrip.save();
        res.status(200).json(savedTrip);
    }
    catch (error)
    {
        res.status(409).json({ message: error.message });
    }
});


export default router;