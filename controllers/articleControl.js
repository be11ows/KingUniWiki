const mongosose = require('mongoose');
const Article = require('../models/Article');

module.exports = articleControl = (req, res) => {

    const loggedIn = req.cookies.loggedIn;
    const username = req.cookies.username;
    
    // console.log('req.cookies.loggedIn is ', req.cookies.loggedIn);
    // const articleId = req.params.id;
    //console.log('articleId is ', articleId);
    
    Article.findById(req.params.id, function (err, article) {

        //console.log('article is ', article);
        if (err) return console.error(err);
        res.render('article', { article, loggedIn, username });
           
    
    }).lean();
};


// 612db4089072e16ccea40d36
// 612db4089072e16ccea40d36