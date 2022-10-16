
import Bus from '../models/Bus.js';
import Trip from '../models/Trip.js';
import { createError } from "../utils/error.js";




// CREATE
export const createBus = async (req, res ,next) => {
  const tripId = req.params.tripid;
  const newBus = new Bus(req.body);

  try {
    const savedBus = await newBus.save();
    try {
      await Trip.findByIdAndUpdate(tripId, {
        $push: { buss: savedBus._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedBus);
  } catch (err) {
    next(err);
  }
};

export const updateBus = async (req, res,next) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBus);
  } catch (err) {
    next(err);
  }
};

export const deleteBus= async (req, res ,next) => {
  const tripId = req.params.tripid;
  try {
    await Bus.findByIdAndDelete(req.params.id);
    try {
      await Trip.findByIdAndUpdate(tripId, {
        $pull: { buss: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Bus has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getBus = async (req, res, next) => {
  try {
    const bus = await Bus.findById(req.params.id);
    res.status(200).json(bus);
  } catch (err) {
    next(err);
  }
};
export const getBuss = async (req, res ,next) => {
  try {
    const buss = await Bus.find();
    res.status(200).json(buss);
  } catch (err) {
    next(err);
  }
};