const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Article = require('../models/Article');

module.exports = createControlPOST = (req, res) => {

    const loggedIn = req.cookies.loggedIn;
    const token = req.cookies.jwt;
    //console.log('loggedIn cookie is ', loggedIn);
    //console.log('jwt cookie is ', token);

    const userInfo = jwt.verify(token, process.env.secret);
    //console.log(userInfo);

    const userID = userInfo.userId;
    //console.log('USER ID ====>  ', userID);

    //req.body.creatorID = userID;

    //console.log(req.body);
    const newArt = new Article(req.body);
    console.log('newArt is ', newArt);

    newArt.save(function (err, newArt) {
        if (err) return console.error(err);
    });

    res.redirect(301, '/create');

};

// Article.findOneAndUpdate({_id: req.params.id}, { $addToSet: { articleAuthor: [req.user._id]}}, function(err, res) {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(res);
//     }
//   } );

// const newAcc = new Accessory({
//     name: req.body.name,
//     description: req.body.description,
//     imageUrl: req.body.imageUrl
//   });

// const newCube = new Cube({
//     name: req.body.name,
//     description: req.body.description,
//     image_url: req.body.image_url,
//     level: req.body.difficultyLevel,
//     accessories: [],
//     creatorID: req.user._id
//     });