const Article = require('../models/Article');

module.exports = (req, res) => {

    const loggedIn = req.cookies.loggedIn;
    
    Article.find(function (err, articles) {
        if (err) console.error(err);
        res.render('allArticles', { articles, loggedIn });
    }).lean();
};