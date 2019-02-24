import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';

@Injectable()
export class PageService {
  pages: Page[] = [
    new Page ('321', 'Post 1','890', 'Lorem'),
    new Page ('432', 'Post 2', '890', 'Lorem'),
    new Page ( '543', 'Post 3', '890', 'Lorem'),
    new Page ('678', 'Post 1','678', 'Lorem'),
    new Page ('7789', 'Post 2', '678', 'Lorem'),
    new Page ( '3456', 'Post 3', '678', 'Lorem')
  ];

  createWebsite(websiteId: String, page: Page) {

    const new_page = {
      _id: (new Date()).getTime() + '',
      name: page.name,
      websiteId: page.websiteId,
      description: page.description
    };

    this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId: String) {
    const resultSet = [];
    for ( const i in this.pages) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }

  findPageByWebsiteId2(websiteId: String) {
    return this.pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
  }

  findPageById(pageId: String) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }

  updatePage(pageId: String, page: Page) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].description = page.description;
      }
    }
  }

  deleteWebsite(pageId: String) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }
}
