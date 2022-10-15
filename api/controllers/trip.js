import Trip from '../models/trip.js';


// CREATE
export const creatTrip = async (req, res) => {
    const newTrip = new Trip(req.body);
    try {
        const savedTrip = await newTrip.save();
        res.status(200).json(savedTrip);
    } catch (error)
    {
        res.status(500).json(error);
        
    }
};

// UPDATE
export const updateTrip = async (req, res) => {
    try {
        const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        });
        res.status(200).json(updatedTrip);
    } catch (error) {
         res.status(500).json(error);
    }
};

// DELETE
export const deleteTrip = async (req, res) => {
    try {
        await Trip.findByIdAndDelete(req.params.id);
        res.status(200).json("Trip has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
};

// GET
export const getTrip = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        res.status(200).json(trip);
    } catch (error) {
         res.status(500).json(error);
    }
};

// GET ALL
export const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (error) {
         res.status(500).json(error);
    }
};