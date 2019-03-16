module.exports= function(app){
  app.get("/api/hello/page", newhello);
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  var pages = [
   {_id: '321', name: 'Post 1', websiteId: '321', description: 'Lorem'},
    {_id: '432', name: 'Post 2', websiteId: '321', description: 'Lorem'},
    {_id: '543', name: 'Post 3', websiteId: '321', description: 'Lorem'},
    {_id: '678', name: 'Post 1',websiteId: '333', description: 'Lorem'},
    {_id: '7789', name: 'Post 2', websiteId: '333', description: 'Lorem'},
    {_id: '3456', name: 'Post 3', websiteId: '333', description: 'Lorem'}
  ];
  function newhello(req,res){
    console.log("hello from root context handler");
    res.send({message: "Hello from handler in pageServer"});
  }


  function createPage(req, res){
    console.log('I am creating new page');
    var webId = req.params['websiteId'];
    console.log(webId);
    var newpage = req.body;
    console.log('new page:' + newpage);
    var pageId = (new Date()).getTime() + '';
    newpage['_id'] = pageId;
    newpage['websiteId'] = webId;
    pages.push(newpage);
    var allpages = findAllPagesForWeb(webId);
    console.log('all related pages:'+ allpages);
    res.json(allpages);

  }
  function findAllPagesForWeb(webId){
    var allPages=[];
    for(var i = 0; i<pages.length; i++){
      if(pages[i].websiteId === webId){
        allPages.push(pages[i]);
      }
    }
    return allPages;
  }

  function findAllPagesForWebsite(req, res){
    console.log("I am in find all pages for webId");
    var webId = req.params['websiteId'];
    var allPages=[];
    for(var i = 0; i<pages.length; i++){
      if(pages[i].websiteId === webId){
        allPages.push(pages[i]);
      }
    }
    console.log(allPages);
    res.json(allPages);
    return;
  }

  function findPageById(req, res){
    var pageId = req.params.pageId;
    for(var i in pages){
      if(pages[i]._id === pageId){
        res.json(pages[i]);
        return;
      }
    }
    res.send({});
  }


  function updatePage(req, res) {
    var page = req.body;
    var pageId = req.params.pageId;
    for (const i in pages) {
      if (pages[i]._id === pageId) {
        pages[i]= page;
        res.json(pages[i]);
        return;
      }
    }
    res.send({});
  }
   function getPageById(pageId){
    for(var i in pages){
      if(pages[i]._id === pageId) {
        return pages[i];
      }
    }
   }
  function deletePage(req, res) {
    console.log("I am in delete Page");
    var pageId = req.params.pageId;
    console.log('I will delete pageID :' + pageId);
    var page  =  getPageById(pageId);
    console.log(page);
    var webId = page['websiteId'];
    console.log(webId);
    for (const i in pages) {
      if (pages[i]._id === pageId) {
        const j = +i;
        pages.splice(j, 1);
        const pagesForWeb = findAllPagesForWeb(webId);
        console.log('left Pages:' + pagesForWeb);
        res.json(pagesForWeb);
        return;
      }
    }
    res.send({});

  }

}
