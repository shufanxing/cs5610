module.exports= function(app){
  var websiteModel = require('../model/website/website.model.server');

  //app.get("/api/hello/website", newhello);
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websitesId", deleteWebsite);

   function createWebsite(req, res){
     var userId = req.params['userId'];
     var website = req.body;
     websiteModel.createWebsiteForUser(userId, website).then(
       function(website){
         res.json(website);
       },
       function(error){
         res.status(400).send("Error of create website:"+error);
       }
     );
   }
   // function getAllWebsitesForUser(userId){
   //   var webs=[];
   //   for(var i = 0; i < websites.length; i++) {
   //     if (websites[i].developerId === userId) {
   //       webs.push(websites[i]);
   //     }
   //   }
   //   return webs;
   // }
   function findAllWebsitesForUser(req, res){
     var userId = req.params['userId'];
     websiteModel.findAllWebsitesForUser(userId)
       .then(
         function (websites) {
           res.json(websites);
         },
         function (err) {
           res.statusCode(400).send(err);
         }
       );
   }

    function findWebsiteById(req,res){
      var webId = req.params.websiteId;
      console.log('I am in the right place to find a website');
      websiteModel.findWebsiteById(webId)
        .then(
          function(website){
            console.log('send website:' + website);
            res.send(website);
          },
          function (err) {
            res.statusCode(400).send(err);
          }
        )
    }

  function updateWebsite(req, res){
    var websiteId = req.params['websiteId'];
    var newWebsite = req.body;
    websiteModel.updateWebsite(websiteId,newWebsite)
      .then(
        function (website) {
          res.send(website);
        },
        function (err) {
          res.statusCode(400).send(err);
        }
      );
  }

  function deleteWebsite(req, res){
     console.log("I am in delete website");
    var websiteId = req.params['websitesId'];
    console.log('webId to be deleted:' + websiteId);
    websiteModel.deleteWebsite(websiteId)
      .then(
        function (data) {
          res.json(data);
        },
        function (err) {
          res.statusCode(400).send(err);
        }
      );
   }
}
