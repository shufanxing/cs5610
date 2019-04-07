import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../service/website.service.client';
import {SharedService} from '../../../service/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: String;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private sharedService: SharedService) {
    // console.log(this.user.username);
    // console.log(this.user.password);
  }

  ngOnInit() {
   // this.route.params.subscribe((params: any) => {this.userId = params.uid; });
    this.userId = this.sharedService.user['_id'];
    this.websiteService.findWebsitesByUser(this.userId).subscribe((data: any) => {
      this.websites = data;
    });
  }
}
