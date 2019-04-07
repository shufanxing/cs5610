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
  curweb = {};
  websites = [];
  noName: boolean;
  errorMsg = 'Please enter a name for this website!';
  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private link: Router) {
    // console.log(this.user.username);
    // console.log(this.user.password);
  }
  delete() {
    this.websiteService.deleteWebsite(this.webId).subscribe(
      (data: any) => {
        this.websites = data;
        const url = '/user/website';
        console.log(url);
        this.link.navigateByUrl(url);
      }
    );
  }
  update() {
    this.noName = false;
    if (this.curweb['name'] === '' || this.curweb['name'] === null ){
      this.noName = true;
      return;
    }
    this.websiteService.updateWebsite(this.webId, this.curweb).subscribe(
      (data: any) => {
        const url = '/user/website';
        this.link.navigateByUrl(url);
      }
    );
  }
  findWebByWebId(curwebId: String) {
    console.log('curwebId is :' + curwebId);
    this.websiteService.findWebsiteById(curwebId).subscribe(
      (data: any) => {
        this.curweb = data;
        const  url = '/user/' + this.userId + '/website/' + this.curweb['_id'];
        this.link.navigateByUrl(url);
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => { this.userId = params.uid;
                                                       this.webId = params.wid; });
    console.log('************');
    console.log('userId' + this.userId);
    console.log('webId' + this.webId);

    this.websiteService.findWebsiteById(this.webId).subscribe((data: any) => {
      this.curweb = data;
      console.log(this.curweb);
    });
    this.websiteService.findWebsitesByUser(this.userId).subscribe((data: any) => {
      this.websites = data;
    });
  }

}


