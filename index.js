var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.json');
var profiles = require('./controllers/profileCtrl');
var users = require('./controllers/userCtrl');

var corsOptions = {
  origin: 'http://localhost:9000'
};

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', users.login);
app.get('/api/profiles', profiles.getFriends);

var port = 9000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
