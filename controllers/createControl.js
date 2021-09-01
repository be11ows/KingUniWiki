
module.exports = createControl = (req, res) => {

    const loggedIn = req.cookies.loggedIn;
    const username = req.cookies.username;

    res.render('create', { loggedIn, username });
};