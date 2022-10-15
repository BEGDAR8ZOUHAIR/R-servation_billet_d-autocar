import express from 'express';
// import Trip from '../models/trip.js';
import { creatTrip, getAllTrips, getTrip, updateTrip, deleteTrip } from '../controllers/trip.js';

const router = express.Router();

// CREATE
router.post('/', creatTrip);
// UPDATE
router.put('/:id', updateTrip);
// DELETE
router.delete('/:id', deleteTrip);
// GET
router.get('/:id', getTrip);
// GET ALL
router.get('/', getAllTrips);

export default router;