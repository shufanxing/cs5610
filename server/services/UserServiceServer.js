module.exports= function(app) {
  app.get("/api/hello/user", newhello);
  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/username", findUserByUserName);
  app.get("/api/user", findUserByCredentials);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);


  function newhello(req, res) {
    console.log("hello from root context handler");
    res.send({message: "Hello from handler UserServer"});
  }

  var users = [
    {_id: '123', username: 'alice', password: 'qq', firstname: 'Alice', lastname: 'Alliast', email: 'alice@gmail.com'},
    {_id: '234', username: 'bob', password: 'qq'},
    {_id: '345', username: 'charlie', password: 'qq'}
  ];

  function createUser(req, res) {
    var user = req.body;
    console.log("The new user's information: ");
    console.log(req.body);
    user._id = Math.floor(Math.random() * 1000).toString();
    users.push(user);
    res.json(user);
    return;
  }

  function findUserById(req, res) {
    console.log("*********I am here*******");
    var userId = req.params.userId;
    for (var i in users) {
      if (users[i]._id === userId) {
        res.send(users[i]);

        return;
      }
    }
    res.send({});
  }

  function findUserByCredentials(req, res) {
    console.log("I am in find credentials function");
    var username = req.query["username"];
    var password = req.query["password"];

    var user = null;

    if (username && password){
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    }
    res.json(user);
  }

  function findUserByUserName(req, res) {
    console.log("&&&&&&&&& I am in finduser server service&&&&&&&&&");
    var myusername = req.query["username"];
    for (var i in users) {
      if (users[i].username === myusername) {
        res.status(200).json(users[i]);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = req.body;
    console.log("update user: " + userId + " " + user.username);
    for (var i in users) {
      if (users[i]._id === userId) {
        users[i].username = user['username'];
        users[i].firstname = user['firstname'];
        users[i].lastname = user['lastname'];
        users[i].email = user['email'];
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
        return;
      }
    }
    res.json(this.users);

  }


}
