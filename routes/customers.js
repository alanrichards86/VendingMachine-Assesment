const express = require("express");
const router = express.Router();
const models = require("../models/vendingMachine.js");



router.get('/api/customers/items', function(req, res){
  res.json({hello: 'world'});
});

module.exports = router
