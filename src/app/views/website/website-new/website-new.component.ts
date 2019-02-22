import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../service/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  curweb: Website;
  userId: string;
  websites: Website[];
  constructor(private webservice: WebsiteService, private route: Router,
              private activeroute: ActivatedRoute) { }
  create() {
    this.webservice.createWebsite(this.userId, this.curweb);
    console.log('cur developerid' + this.curweb.developerId);
    const url = '/user/' + this.userId + '/website';
    this.route.navigateByUrl(url);
  }
  ngOnInit() {
    this.activeroute.params.subscribe((params: any) => {this.userId = params.uid; });
    this.websites = this.webservice.findWebsitesByUser(this.userId);
    this.curweb = new Website('id', 'name', this.userId, 'des');
    console.log(this.curweb.developerId);
  }

}
