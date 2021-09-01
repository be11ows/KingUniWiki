const mongoose = require('mongoose');
const schema = mongoose.Schema;
const User = require('../models/User');

const articleSchema = new schema({
    articleTitle: String,
    content: String,
    articleAuthor: [{ type: schema.Types.ObjectId, ref: 'User' }],
    creationDate: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;