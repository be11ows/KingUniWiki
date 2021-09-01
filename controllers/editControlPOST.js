const Article = require("../models/Article");

module.exports = (req, res) => {
    
    console.log('hi');
    console.log(req.body);
    //const theArtToEdit = await Article.findById(req.params.id);

    // Article.findOneAndUpdate( {_id: artId} );
    
    // res.redirect('/');
};

// Article.findOneAndUpdate({_id: req.params.id}, { $addToSet: { articleAuthor: [req.user._id]}}, function(err, res) {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(res);
//     }
//   } );