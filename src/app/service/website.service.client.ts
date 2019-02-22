import { Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';


@Injectable()
export class WebsiteService {
  websites: Website[] = [
    new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Tweeter', '456', 'Lorem'),
    new Website('456', 'Gizmodo', '456', 'Lorem'),
    new Website('890', 'Go', '123', 'Lorem'),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem')
  ];


  createWebsite(userId: String, website: Website) {

    const new_website: Website = {
      _id: (new Date()).getTime() + '',
      name: website.name,
      developerId: userId,
      description: website.description
    };

    this.websites.push(new_website);
  }

  findWebsitesByUser(userId: String) {
    return this.websites.filter(function (website) {
      return website.developerId === userId;
    });
  }

  findWebsiteById(websiteId: String) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        return this.websites[i];
      }
    }
  }

  updateWebsite(websiteId: String, website: Website) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i].name = website.name;
        this.websites[i].description = website.description;
      }
    }
  }

  deleteWebsite(websiteId: String) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        const j = +i;
        this.websites.splice(j, 1);
      }
    }
  }
}
