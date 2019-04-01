var mongoose = require('mongoose');
//var userSchema = require('../user/user.schema.server');
var pageSchema = require('../page/page.schema.server');
var websiteSchema = mongoose.Schema({
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    description: String,
    pages: [pageSchema],
    dateCreate:{type: Date, default: Date.now()}
  },{collection: "Websites"}
);

module.exports = websiteSchema;
