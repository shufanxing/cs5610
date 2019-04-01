module.exports= function(app) {
  app.get("/api/hello/user", newhello);
  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/username", findUserByUserName);
  app.get("/api/user", findUserByCredentials);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  var userModel = require('../model/user/user.model.server');

  function newhello(req, res) {
    console.log("hello from root context handler");
    res.send({message: "Hello from handler UserServer"});
  }

  // var users = [
  //   {_id: '123', username: 'alice', password: 'qq', firstname: 'Alice', lastname: 'Alliast', email: 'alice@gmail.com'},
  //   {_id: '234', username: 'bob', password: 'qq'},
  //   {_id: '345', username: 'charlie', password: 'qq'}
  // ];

  function createUser(req, res){
    var newuser = req.body;
    userModel.createUser(newuser).
    then(function(user){
      res.send(user);

    }, function(error){
      console.log("create user error:" + error);
      res.status(400);

    });
  }


  function findUserById(req, res) {
    var userId = req.params.userId;
    userModel.findById(userId).then(function(user){

       res.send(user);
    }, function(error){
      console.log("create user error:" + error);
      res.status(400);

    });
  }

  function findUserByCredentials(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    console.log(username);
    console.log(password);
    userModel.findByCredential(username, password).then(function(user){
      res.send(user);
    }, function(error){
      console.log("create user error:" + error);
      res.status(400);
    });
  }

  function findUserByUserName(req, res) {
    console.log("&&&&&&&&& I am in finduser server service&&&&&&&&&");
    var myusername = req.query["username"];
    userModel.findUserByUserName(myusername).then(function(user){
      res.send(user);
      console.log('I am searching user');
    }, function(error){
      console.log("find user by username error:" + error);
      res.status(400).send(error);
    });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = req.body;
    console.log("update user: " + userId + " " + user.username);
    userModel.updateUser(userId,user).then(
      function(user) {
        res.send(user);
      }, function (error) {
        console.log("update user error:" + error);
        res.status(400).send("update is not successful!");
      }
    );
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];
    userModel.deleteUser(userId).then(
      function(user) {
        res.send(user);
      }, function (error) {
        console.log("delete user error:" + error);
        res.status(400).send("use not found");
      }
    );
  }
}
