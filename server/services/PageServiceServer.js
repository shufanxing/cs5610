module.exports= function(app){
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  var pageModel = require('../model/page/page.model.server');

  // var pages = [
  //  {_id: '321', name: 'Post 1', websiteId: '321', description: 'Lorem'},
  //   {_id: '432', name: 'Post 2', websiteId: '321', description: 'Lorem'},
  //   {_id: '543', name: 'Post 3', websiteId: '321', description: 'Lorem'},
  //   {_id: '678', name: 'Post 1',websiteId: '333', description: 'Lorem'},
  //   {_id: '7789', name: 'Post 2', websiteId: '333', description: 'Lorem'},
  //   {_id: '3456', name: 'Post 3', websiteId: '333', description: 'Lorem'}
  // ];


  function createPage(req, res){
    console.log('I am creating new page');
    var webId = req.params['websiteId'];
    console.log(webId);
    var newpage = req.body;
    pageModel.createPage(webId, newpage).then(
      function(page){
        res.send(page);
      },
      function(error){
        res.status(400).send(error);
      }
    );

    // console.log('new page:' + newpage);
    // var pageId = (new Date()).getTime() + '';
    // newpage['_id'] = pageId;
    // newpage['websiteId'] = webId;
    // pages.push(newpage);
    // var allpages = findAllPagesForWeb(webId);
    // console.log('all related pages:'+ allpages);
    // res.json(allpages);
  }


  function findAllPagesForWebsite(req, res){
    //console.log("I am in find all pages for webId");
    var webId = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(webId).then(
      function(pages){
        res.send(pages);
      },
      function(error){
        res.status(400).send(error);
      }
    );
  }

  function findPageById(req, res){
    var pageId = req.params.pageId;
    pageModel.findPageById(pageId).then(
      function(page){
        res.send(page);
      },
      function(error){
        res.status(400).send(error);
      }
    );
  }


  function updatePage(req, res) {
    var page = req.body;
    var pageId = req.params.pageId;
    pageModel.updatePage(pageId,page).then(
      function(page){
        res.send(page);
      },
      function(error){
        res.status(400).send(error);
      }
    )
  }
  function deletePage(req, res) {
    console.log("I am in delete Page");
    var pageId = req.params.pageId;
    pageModel.deletePage(pageId).then(
      function(page){
        res.send(page);
      },
      function(error){
        res.status(400).send(error);
      }
    );
  }
}
