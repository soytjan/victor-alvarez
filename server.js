const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';

app.set('port', process.env.PORT || 5000);

app.locals.title = 'Victor Alvarez Studio';
app.use(bodyParser.json());

const requireHTTPS = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
    next();
};

app.enable('trust proxy');

if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS); }



app.use(express.static('public'));

app.get('/', (request, response) => {

});

app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is listening at ${app.get('port')}`);
});

module.exports = app;

