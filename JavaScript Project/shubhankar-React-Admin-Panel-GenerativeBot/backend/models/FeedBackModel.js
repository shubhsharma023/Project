const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedBack = new Schema({ 
    query: {
        type: String,
        required: true,
    },
    response: {
        type: String,
        required: true
    }
}, { collection: 'Feedback' });

module.exports = mongoose.model('Feedback', FeedBack);