import mongoose from 'mongoose';

const BusSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
     arrivalTime: {
         type: Date,
        required: true,
         
       
    },
    departureTime: {
        type: Date,
        required: true,

       
    },
    maxPlace: {
        type: Number,
        required: true,
    },
    busCost: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    busNumber: [{ number: Number, unavailableDate: { type: [Date] }} ],
},
    { timestamps: true }
); 
 
export default mongoose.model("Bus", BusSchema);