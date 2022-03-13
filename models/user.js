const mongoose = require('mongoose');


//gebruikers schema wat naar de database gestuurt wordt.
const userSchema = new mongoose.Schema({
    name: {
        type: String

    },
    mail: {
        type: String

    },
    password: {
        type: String

    },
    game: {
        type: String
    },
});
console.log(userSchema);
module.exports = mongoose.model('User', userSchema);
