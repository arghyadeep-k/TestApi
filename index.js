const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =process.env.PORT||3000;

// app.use(bodyParser.json());
// module.exports = app;

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log('We are live on ' + port);
  });

  /**
 * Serves the home page
 **/
app.get('/', function(request, response) {
    response.render('pages/index')
  })