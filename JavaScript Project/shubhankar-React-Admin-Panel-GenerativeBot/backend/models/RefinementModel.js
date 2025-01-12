const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Refinement = new Schema({ 
    query: {
        type: String,
        required: true,
    },
    response: {
        type: String,
        required: true
    }
}, { collection: 'Testing' });

module.exports = mongoose.model('Testing', Refinement);