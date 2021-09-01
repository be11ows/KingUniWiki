// require controllers
const indexControl = require('../controllers/indexControl');
const articleControl = require('../controllers/articleControl');
const allArticlesControl = require('../controllers/allArticlesControl');
const registerControl = require('../controllers/registerControl');
const loginControl = require('../controllers/loginControl');
const createControl = require('../controllers/createControl');
const editControl = require('../controllers/editControl');
const searchResultsControl = require('../controllers/searchResultsControl');
const logoutControl = require('../controllers/logoutControl');

// const allArticlesControlPOST = require('../controllers/allArticlesControlPOST');
// const articleControlPOST = require('../controllers/articleControlPOST');
const createControlPOST = require('../controllers/createControlPOST');
const editControlPOST = require('../controllers/editControlPOST');
const deleteControlPOST = require('../controllers/deleteControlPOST');
// const indexControlPOST = require('../controllers/indexControlPOST');
const loginControlPOST = require('../controllers/loginControlPOST');
const registerControlPOST = require('../controllers/registerControlPOST');
// const searchResultsControlPOST = require('../controllers/searchResultsControlPOST');

const four04Control = require('../controllers/four04Control');

module.exports = (app) => {

    // the app.gets
    app.get('/', indexControl);
    app.get('/login', loginControl);
    app.get('/register', registerControl);
    app.get('/article/:id', articleControl);
    app.get('/allArticles', allArticlesControl);
    app.get('/create', createControl);
    app.get('/edit/:id', editControl);
    app.get('/logout', logoutControl);
    
    // the app.posts
    app.post('/register', registerControlPOST);
    app.post('/login', loginControlPOST);
    app.post('/create', createControlPOST);
    app.post('/edit/:id', editControlPOST);
    app.post('/delete/:id', deleteControlPOST);

    // the catch-all for everything else
    app.get("/*", four04Control);

};