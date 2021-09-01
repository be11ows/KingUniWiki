const Article = require("../models/Article");

module.exports = (req, res) => {

    const loggedIn = req.cookies.loggedIn;
    const username = req.cookies.username;

    
    Article.findById(req.params.id, function (err, article) {
        if (err) console.error(err);
        res.render('edit', { article, loggedIn, username });
    }).lean();
};