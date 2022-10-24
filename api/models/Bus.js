import mongoose from 'mongoose';

const BusSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    maxPlace: {
        type: Number,
        max: 50,
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
    busNumber: {
        type: Number,
        require: true,
     },
},
); 
export default mongoose.model("Bus", BusSchema);