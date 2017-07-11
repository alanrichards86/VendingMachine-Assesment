const express         = require("express");
const bodyParser      = require("body-parser");
const mocha           = require("mocha");
const router         = require("./routes/customers.js");
const app             = express();

app.use(router);

if(require.main === module){
  app.listen(3000, function(){
    console.log("You are on port 3000 !");
  });
}

module.exports = app;
