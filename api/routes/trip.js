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
// UPDATE
router.put('/:id', async (req, res) =>
{
    try
    {
        const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedTrip);
    }
    catch (error)
    {
        res.status(409).json({ message: error.message });
    }
});
// DELETE
router.delete('/:id', async (req, res) =>
{
    try
    {
        await Trip.findByIdAndDelete(req.params.id);
        res.status(200).json("Trip has been deleted...");
    }
    catch (error)
    {
        res.status(409).json({ message: error.message });
    }
});
// GET
router.get('/:id', async (req, res) =>
{
    try
    {
        const trip = await Trip.findById(req.params.id);
        res.status(200).json(trip);
    }
    catch (error)
    {
        res.status(409).json({ message: error.message });
    }
});
// GET ALL
router.get('/', async (req, res) =>
{
    try
    {
        const trips = await Trip.find();
        res.status(200).json(trips);
    }
    catch (error)
    {
        res.status(409).json({ message: error.message });
    }
});




export default router;