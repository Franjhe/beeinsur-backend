import mongoose from 'mongoose';

const GoalsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    canchas: {
        type: String,
        required: true
    },
    parques: {
        type: String,
        required: true
    },
    c_integral: {
        type: String,
        required: true
    },
    c_educativos: {
        type: String,
        required: true
    },

})

const Goals = mongoose.model('Goals', GoalsSchema, 'spaces');

export default Goals;