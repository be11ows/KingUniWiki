const Article = require("../models/Article");

module.exports = (req, res) => {
    
    // do some deletey stuff
    let artId = req.params.id;

    Article.deleteOne( {_id: artId} );
    
    res.redirect('/');
};