const mongoose = require('mongoose')


// Schema for User model
const UserSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        default: 'regular'
    },
    token: {
        type: String,
    },

    status:{
        type: String,
        default: 'pending'
    },

    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
}, { timestamps: true })

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);