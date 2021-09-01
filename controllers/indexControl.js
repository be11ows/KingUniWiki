const Article = require('../models/Article');

module.exports = (req, res) => {
    
    const loggedIn = req.cookies.loggedIn;
    const username = req.cookies.username;

    Article.find(function (err, articles) {
        //console.log('arts ', articles);
        if (err) return console.error(err);
        res.render('index', { articles, loggedIn, username });
    }).lean();

};