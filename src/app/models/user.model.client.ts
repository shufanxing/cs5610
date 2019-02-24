export class User {
  _id: String;
  username: string;
  password: string;

  firstname: string;
  lastname: string;

  email: string;

  constructor(_id, username, password, firstname = 'alice' , lastname = 'chase', email = 'alice@gmail') {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
