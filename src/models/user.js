import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
})

const User = mongoose.model('User', UserSchema, 'users');

export default User;