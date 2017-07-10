const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1:27017/vendingMachine');




// const costomerSchema = new Schema({
//   _id: {type: Number, required: true, default: 1}
//   account: Number,
//
//
// })
