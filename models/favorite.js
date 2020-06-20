const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    campsites: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Campsite"
    }
}, {
    timestamps: true 
});
//const Partner = mongoose.model('Partner', partnerSchema);
module.exports = mongoose.model('Favorite', favoriteSchema);