const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Link = new Schema({
    linkname:{
        type: 'string',
        required: true
    } ,
    linkurl:{
        type: 'string',
        required: true
    },
    
}, { collection: 'Link' });

module.exports = mongoose.model('Link', Link);