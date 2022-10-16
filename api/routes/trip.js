import express from 'express';
import Trip from '../models/trip.js';
import { creatTrip, getAllTrips, getTrip, updateTrip, deleteTrip } from '../controllers/trip.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, creatTrip);
// UPDATE
router.put('/:id', updateTrip);
router.put('/:id',verifyAdmin, updateTrip);
// DELETE
router.delete('/:id', verifyAdmin, deleteTrip);
// GET
router.get('/:id', getTrip);
// GET ALL
router.get('/', getAllTrips);

export default router;