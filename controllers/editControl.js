const Article = require('../models/Article')

module.exports = (req, res) => {

    const loggedIn = req.cookies.loggedIn;
    const username = req.cookies.username;
    console.log(username);

    Article.findById(req.params.id, function (err, article) {
        //console.log('article is ', article);
        if (err) return console.error(err);
        res.render('edit', { article, loggedIn, username });
    }).lean();
};