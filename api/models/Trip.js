import mongoose from 'mongoose';


const TripSchema = new mongoose.Schema({
    arrivalTime: {
        type: Date,
        // required: true
    },
    departureTime: {
        type: Date,
        // required: true
    },
    tripTime: {
        type: Date,
        // required: true
    },
    tripDistance: {
        type: Number,
        // required: true
    },
    tripCost: {
        type: Number,
        // required: true
    },
    tripStatus: {
        type: String,
        // required: true
    },
    tripType: {
        type: String,
        // required: true
    },
    cityDepart: {
        type: String,
        // required: true
    },
    cityArrival: {
        type: String,
        // required: true
    },
    timeArrival: {
        type: Date,
        // required: true
    },
    timeDeparture: {
        type: Date,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    bus: {
        type:[String],
    }
   
}); 
export default mongoose.model('Trip', TripSchema);