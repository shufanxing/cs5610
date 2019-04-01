var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');

var websiteModel = mongoose.model("Website",websiteSchema);
var userModel = require('../user/user.model.server');

websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById= findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;


/*function createUser(user) {
  return userModel.create(user, function (err, userSchema) {
    if(err){return handleError(err);}
  });
}*/
function createWebsiteForUser(userId,website) {
  console.log("model"+website);
  return websiteModel.create(website).then(
    function(newWebsite){
      userModel.findUserById(userId).then(
        function(user){
          user.websites.push(newWebsite);
          userModel.updateUser(userId,user);
        }
      );
      return newWebsite;
    }
  );
}

function findAllWebsitesForUser(userId) {
  return websiteModel.find({developerId:userId});
}

function findWebsiteById(id) {
  console.log('I am searching for website with Id :'+id);
  return websiteModel.findById(id);
}

function updateWebsite(webId,website) {
  return websiteModel.findByIdAndUpdate(webId,website);
}

function deleteWebsite(webId){
  return websiteModel.findByIdAndRemove(webId);
}
