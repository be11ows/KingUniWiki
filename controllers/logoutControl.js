module.exports = logoutControl = (req, res) => {

    res.clearCookie("loggedIn");

    res.clearCookie("jwt");

    res.redirect("/");
};