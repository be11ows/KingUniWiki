const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Article = require('../models/Article');

const userSchema = new schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
