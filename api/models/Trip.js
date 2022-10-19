import mongoose from 'mongoose';

const TripSchema = new mongoose.Schema({
    arrivalTime: {
        type: [Date],
       
    },
    departureTime: {
        type: [Date],
       
    },
    tripDistance: {
        type: String,
        required: true
    },
    tripCost: {
        type: Number,
        required: true
    },
    tripStatus: {
        type: String,
        required: true
    },
    tripType: {
        type: String,
        required: true
    },
    cityDepart: {
        type: String,
        required: true
    },
    cityArrival: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    buss: {
        type:[String],
    }
   
}); 

export default mongoose.model('Trip', TripSchema);