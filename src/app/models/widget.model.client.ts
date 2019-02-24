export class Widget {
  _id: String;
  name: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;

  constructor(_id, name = 'name', type, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
    this._id = _id;
    this.name = name;
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
  }
}
