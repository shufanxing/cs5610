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
  noName: boolean;
  errorMsg = 'Please give your new website a name!';
  constructor(private webservice: WebsiteService, private route: Router,
              private activeroute: ActivatedRoute) { }
  create() {
    if (this.curweb.name !== '') {
      this.noName = false;
    } else {
      this.noName = true;
    }
    this.curweb = new Website(this.curweb._id, this.curweb.name, this.userId, this.curweb.description);
    if ( !this.noName) {
    this.webservice.createWebsite(this.userId, this.curweb).subscribe(
      (data: any) => {
        console.log('cur developerid' + this.curweb.developerId);
        const url = '/user/' + this.userId + '/website';
        this.route.navigateByUrl(url);
        this.webservice.findWebsitesByUser(this.userId).subscribe((webs: any) => {
          this.websites = webs;
        });
      }
    );
    }

  }
  ngOnInit() {
    this.activeroute.params.subscribe((params: any) => {this.userId = params.uid; });
    this.webservice.findWebsitesByUser(this.userId).subscribe((data: any) => {
      this.websites = data;
    });
    this.curweb = new Website('', '', this.userId, '');
    console.log(this.curweb.developerId);
  }

}
