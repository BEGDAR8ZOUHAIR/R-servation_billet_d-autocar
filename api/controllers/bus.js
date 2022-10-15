
// import Bus from '../models/Bus.js';
// import Trip from '../models/Trip.js';



// // CREATE
// export const createBus = async (req, res) => {
//   const hotelId = req.params.hotelid;
//   const newBus = new Bus(req.body);

//   try {
//     const savedBus = await newBus.save();
//     try {
//       await Hotel.findByIdAndUpdate(hotelId, {
//         $push: { buss: savedBus._id },
//       });
//     } catch (err) {
//       next(err);
//     }
//     res.status(200).json(savedBus);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// export const updateBus = async (req, res) => {
//   try {
//     const updatedBus = await Bus.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedBus);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
// export const updateBusAvailability = async (req, res) => {
//   try {
//     await Bus.updateOne(
//       { "BusNumbers._id": req.params.id },
//       {
//         $push: {
//           "BusNumbers.$.unavailableDates": req.body.dates
//         },
//       }
//     );
//     res.status(200).json("Bus status has been updated.");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
// export const deleteBus= async (req, res) => {
//   const TripId = req.params.tripid;
//   try {
//     await Bus.findByIdAndDelete(req.params.id);
//     try {
//       await Trip.findByIdAndUpdate(tripId, {
//         $pull: { buss: req.params.id },
//       });
//     } catch (err) {
//       next(err);
//     }
//     res.status(200).json("Bus has been deleted.");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
// export const getBus = async (req, res) => {
//   try {
//     const bus = await Bus.findById(req.params.id);
//     res.status(200).json(bus);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
// export const getBuss = async (req, res) => {
//   try {
//     const buss = await Bus.find();
//     res.status(200).json(buss);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };