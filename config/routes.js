// require controllers
const allArticlesControl = require('../controllers/allArticlesControl');
const articleControl = require('../controllers/articleControl');
const createControl = require('../controllers/createControl');
const editControl = require('../controllers/editControl');
const indexControl = require('../controllers/indexControl');
const loginControl = require('../controllers/loginControl');
const registerControl = require('../controllers/registerControl');
const searchControl = require('../controllers/searchControl');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('/ ==> we are not biological threats to each other!');
      });
      app.get('/login', (req, res) => {
        res.send('login  ==> stand against tyranny!');
      });
      app.get('/register', (req, res) => {
        res.send('register  ==> be the Light in the darkness!');
      });
      app.get('/view', (req, res) => {
        res.send('view ==> i see potential and movement toward THE GREAT AWAKENING!');
      });
      app.get('/create', (req, res) => {
        res.send('create  ==> be creative, be fruitful and multiply!');
      });
      app.get('/edit', (req, res) => {
        res.send('edit  ==> question the official narrative!');
      });
      app.get('/delete', (req, res) => {
        res.send('delete  ==> remove death cult influence from your life!');
      });
      app.get('/logout', (req, res) => {
        res.send('logout ==> logout of transhumanist agendas.  no graphene oxide for me thank you!');
      });
      app.get("/*", (req, res) => {
          res.send('* wha, wha ==> 404 PAGE NOT FOUND');
      });
};