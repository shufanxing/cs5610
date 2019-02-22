import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  website: Website;
  constructor(private websiteService: WebsiteService, private route: ActivatedRoute) {
    // console.log(this.user.username);
    // console.log(this.user.password);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {this.webId = params.wid;
                                                        this.userId = params.uid; });
    this.website = this.websiteService.findWebsiteById(this.webId);
  }
}


