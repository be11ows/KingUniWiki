const Article = require("../models/Article");

module.exports = (req, res) => {
    
    // do some deletey stuff
    let artId = req.params.id;

    console.log(artId);

    Article.deleteOne( {_id: artId} );
    
    res.redirect('/');
};