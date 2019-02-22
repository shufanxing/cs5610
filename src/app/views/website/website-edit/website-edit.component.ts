import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../service/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: String;
  webId: String;
  curweb: Website;
  websites: Website[];
  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private link: Router) {
    // console.log(this.user.username);
    // console.log(this.user.password);
  }
  delete() {
    this.websiteService.deleteWebsite(this.webId);
    const url = '/user/' + this.userId + '/website';
    console.log(url);
    this.link.navigateByUrl(url);
  }
  update() {
    this.websiteService.updateWebsite(this.webId, this.curweb);
    const url = '/user/' + this.userId + '/website';
    this.link.navigateByUrl(url);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => { this.userId = params.uid;
                                                       this.webId = params.wid; });
    console.log('************');
    console.log('userId' + this.userId);
    console.log('webId' + this.webId);

    this.curweb = this.websiteService.findWebsiteById(this.webId);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

}


