const express = require("express");
const router = express.Router();
const models = require("../models/vendingMachine.js");

router.get("/",function (req,res) {
  res.send("Hello");
});


router.get('/api/customer/items', function(req, res){

});

router.post('/api/customer/items/:itemId/purchases', function(req, res){

});

router.get('/api/vendor/purchases', function(req, res){

});

router.get('/api/vendor/money', function(req, res){

});

router.post('/api/vendor/items', function(req, res){

});

router.get('/api/vendor/items/:itemId', function(req, res){

});


module.exports = router
