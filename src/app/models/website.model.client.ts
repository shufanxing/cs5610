export class Website {
  _id: string;
  name: string;

  developerId: string;
  description: string;

  constructor(_id= '9899999', name= 'name', developerId, description= 'description') {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.developerId = developerId;
  }

}
