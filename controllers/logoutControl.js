module.exports = logoutControl = (req, res) => {

    res.clearCookie("loggedIn");

    res.clearCookie("jwt");

    res.clearCookie('username');


    res.redirect("/");
};