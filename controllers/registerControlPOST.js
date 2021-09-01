const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = registerControlPost = async (req, res) => {

    const body = req.body;
    const password = body.password;
    const username = body.username;
    console.log('password is ', password);
    console.log('username is ', username);

    const saltRounds = +process.env.saltRounds;
    console.log('salty be ', saltRounds);

    await bcrypt.genSalt(saltRounds, async function(err, salt) {
        console.log('salt is ', salt);
        await bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            console.log('hashed pw is ', hash);

            console.log('body with hashed pw ', body);

            let newUser = new User({username, password: hash});
            
            newUser.save(function (err, newUser) {
                if (err) return console.error(err);
                console.log(newUser);
            });
        });
    });

    res.redirect("/");
};