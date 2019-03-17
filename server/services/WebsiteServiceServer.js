module.exports= function(app){
  app.get("/api/hello/website", newhello);
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websitesId", deleteWebsite);
  function newhello(req,res){
    console.log("hello from root context handler");
    res.send({message: "Hello from handler in WebsiteServer"});
  }

  var websites = [
    {"_id": "321", "name": "Facebook", developerId: "123"},
    {"_id": "432", "name": "Twitter", developerId: "234"},
    {"_id": "234", "name": "Amazon", developerId: "345"},
    {"_id": "333", "name": "MyWebSite", developerId: "123"}
  ];

   function createWebsite(req, res){
     var userId = req.params['userId'];
     var website = req.body;
     website._id = (new Date()).getTime() + "";
     website.developerId = userId;
     websites.push(website);
     var allWebsitesForUser = getAllWebsitesForUser(userId);
     res.json(allWebsitesForUser);
   }
   function getAllWebsitesForUser(userId){
     var webs=[];
     for(var i = 0; i < websites.length; i++) {
       if (websites[i].developerId === userId) {
         webs.push(websites[i]);
       }
     }
     return webs;
   }
   function findAllWebsitesForUser(req, res){
     var userId = req.params['userId'];
     var webs=[];
     for(var i = 0; i < websites.length; i++) {
       if (websites[i].developerId === userId) {
         webs.push(websites[i]);
       }
     }
     res.json(webs);
     return;
   }

    function findWebsiteById(req,res){
      var webId = req.params.websiteId;
      for(var i in websites){
        if(websites[i]._id === webId){
          res.send(websites[i]);
          return;
        }
      }
      res.send();
    }

  function updateWebsite(req, res){
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    for(var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites[i] = newWebSite;
        newWebSite = websites[i];
        break;
      }
    }
    res.json(newWebSite);
    return;
  }
  function getWebByWebId(webId){
     for(var i in websites) {
       if(websites[i]._id === webId) {
         return websites[i];
       }
     }
  }

  function deleteWebsite(req, res){
     console.log("I am in delete website");
    var websiteId = req.params['websitesId'];
    console.log('webId to be deleted:' + websiteId);
    var web = getWebByWebId(websiteId);
    console.log(web);
    for(var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        const j = +i;
        websites.splice(j, 1);
        var webs = getAllWebsitesForUser(web.developerId);
        console.log('left webs:'+ webs);
        res.json(webs);
        return;
      }
    }
    res.send();

  }




}
