

module.exports= function(app){
  app.get("/api/hello/widget", newhello);
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidgets);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.put("/api/page/:pageId/widget", changeOrderOfWidgets);
  var multer = require('multer');
  //var path = require('path');
  //var ejs = require('ejs');
  //app.set('view engine', 'ejs');
  var storage = multer.diskStorage({destination: __dirname+'/../../dist/web-maker/assets/uploads/',
    filename: function (req, file, cb) {
       cb(null, file.originalname);
    }
  }

);

  var upload = multer({storage: storage}).single('myFile');



  app.post("/api/upload",uploadImage);
  function newhello(req,res){
    console.log("hello from root context handler");
    res.send({message: "Hello from handler in WidgetServer"});
  }

  var widgets = [
      {
        _id: '123',
        name: 'name',
        widgetType:'HEADER',
        pageId: '321',
        size: '2',
        text: 'London terror attack: Police fired \'unprecedented\' number of rounds'} ,

      {
        _id: '234',
        name: 'name',
        widgetType: 'HEADER',
        pageId: '321',
        size: '4',
        text:'Counter terrorism officers patrol near the scene of the attack on London Bridge.' },

      {
        _id: '345',
        name: 'name',
        widgetType: 'IMAGE',
        pageId: '321',
        size: '2',
        text: 'text',
        width: '100%',
        url: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'},

      {
        _id: '456',
        name: 'name',
        widgetType: 'HEADER',
        pageId: '321',
        size: '5',
        text: 'Armed officers responding to the London ' +
        'Bridge terror attack fired an "unprecedented" number of rounds at the three attackers because they ' +
        'were wearing what appeared to be suicide belts, police said.'},

      {
        _id: '678',
        name: 'name',
        widgetType: 'YOUTUBE',
        pageId: '321',
        size: '2',
        text: 'text',
        width: '100%',
        url: 'https://www.youtube.com/embed/APexI9Zb6iE'} ,

      {
        _id: '789',
        name: 'name',
        widgetType: 'HEADER',
        pageId: '321',
        size: '5',
        text: 'There is a report of an incident ' +
          'has occurred at London Bridge. From CNN London.'}

        ];

  function createWidget (req, res) {
    var pageId = req.params['pageId'];
    var widget = req.body;
    //widget['_id'] = (new Date()).getTime() + "";
    widgets.push(widget);
    console.log(widget);
    var allWidgetsForPage = getAllWidgetsForPage(pageId);
    res.json(allWidgetsForPage);
  }

  function getAllWidgetsForPage(pageId){
    var widgetsForPage = [];
    for(var i in widgets){
      if(widgets[i].pageId === pageId){
        widgetsForPage.push(widgets[i]);
      }
    }
    return widgetsForPage;
  }

  function findAllWidgetsForPage (req, res) {
    var pageId = req.params['pageId'];
    var allWidgets = getAllWidgetsForPage(pageId);
    res.json(allWidgets);
  }

  function findWidgetById (req, res) {
    var widId = req.params['widgetId'];
    for(var i in widgets){
      if(widgets[i]._id === widId) {
        res.json(widgets[i]);
        return;
      }
    }
    res.send();
  }

  function updateWidgets(req, res){
    var widId = req.params['widgetId'];
    var widget = req.body;
    for ( const i in widgets ) {
      if ( widgets[i]._id === widId ) {
        switch (widget['widgetType']) {
          case 'HEADER':
            widgets[i].name = widget['name'];
            widgets[i].text = widget['text'];
            widgets[i].size = widget['size'];
            res.json(widgets[i]);
            return;

          case 'IMAGE':
            widgets[i].name = widget['name'];
            widgets[i].text = widget['text'];
            widgets[i].url = widget['url'];
            widgets[i].width = widget['width'];
            res.json(widgets[i]);
            return;

          case 'YOUTUBE':
            widgets[i].name = widget['name'];
            widgets[i].text = widget['text'];
            widgets[i].url = widget['url'];
            widgets[i].width = widget['width'];
            res.json(widgets[i]);
            return;
        }
        res.send();
      }
    }
  }
  function getWidgetById(widId){
    for(var i in widgets){
      if(widgets[i]._id === widId) {
        return widgets[i];
      }
    }
  }
  function deleteWidget(req, res) {
    console.log("I am deleting widget");
    var widId = req.params['widgetId'];
    var widget = getWidgetById(widId);
    console.log('to be deleted widget '+ widget);
    var pageId = widget['pageId'];
    for (const i in widgets) {
      if (widgets[i]._id === widId) {
        const j = +i;
        widgets.splice(j, 1);
        var allWids = getAllWidgetsForPage(pageId);
        res.json(allWids);
      }
    }
    res.json();

  }

  function uploadImage(req, res){
    upload(req,res,(err) => {
      if(err){
        res.render('index', {
          msg: err
        });
      }else{
        if(req.file === undefined){
          res.render('index',{
            msg: 'no file selected'
          });
        }else {
          var curwidget = req.body;
          var widgetId = req.body['widgetId'];
          console.log('I am uploading file');
          console.log('widgetId is :' + widgetId);
          var myFile = req.file;
          console.log(req.body);
          var userId = req.body.userId;
          var websiteId = req.body.websiteId;
          var pageid = req.body.pageId;
          var originalname = myFile.originalname; // file name on user's computer
          var filename = myFile.filename; // new file name in upload folder
          console.log('filename: '+filename)
          var path = myFile.path; // full path of uploaded file
          var destination = myFile.destination; // folder where file is saved to
          var mysize = myFile.size;
          var mimetype = myFile.mimetype;
          var myurl = '/assets/uploads/'+filename;
          for(var i in widgets){
            if(widgets[i]._id === widgetId){
              widgets[i].url = myurl;
              widgets[i].size = mysize;
              //res.redirect("http://localhost:3200/user/website/"+websiteId+"/page/"+pageid+"/widget/"+widgetId);
              return;
            }
          }
          res.render( {
            msg: 'file uploaded'
          });
          res.send("test");
        }
      }
    })

  }

  function changeOrderOfWidgets(req, res){
    console.log("I am changing the order of items");

    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);
    array_swap(widgets, startIndex, endIndex);
    res.json(widgets);
  }
  function array_swap(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  };

}

