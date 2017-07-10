const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes/router.js");

//Express App Initialization
const app = express();

//Body Parser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


//Port setup
app.set('port', (process.env.PORT || 3000));

app.use(router);


  app.listen(app.get('port'), function() {
    console.log("server running on localhost:" + app.get('port'));
  });
