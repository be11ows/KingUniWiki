const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = loginControlPOST = async (req, res) => {
    
    let loggedInUser = await User.findOne({username: req.body.username});
    console.log('user to log in is ===> ', loggedInUser);

    // isolating the userId, username & hashedPW through the loggedInUser object
    const userId = loggedInUser._id;
    const username = loggedInUser.username;
    const hashedPW = loggedInUser.password;

    bcrypt.compare(req.body.password, hashedPW).then(function(response) {

        if(response == true) {
            console.log('we in!');

            // if they are the same then we need to do some things to create a jwt
            // isolating the the payload ( an obj ) + our secret in the .env file + the option ( obj ) to determine an exp
            const payload = { userId, username };
            const secret = process.env.secret;
            const options = { expiresIn: '1h' };

            // passing those 3 things in to generate the signature of the jwt and storing it in a var 'token'
            const token = jwt.sign(payload, secret, options);

            // setting our tokens to kick things off.  FIRST, jwt as key and actual signed jwt as value
            res.cookie('jwt', token, { httpOnly: true, maxAge: 3600 * 1000 });
            // followed buy loggedIn (key) with value of true
            res.cookie('loggedIn', true);

            res.cookie('username', username);

            res.redirect('/');

        } else {

            console.log('PASSWURRRD DO NO MATCHURRR');
            res.redirect('/login');
        }
    });
};