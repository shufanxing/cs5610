import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../service/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  userid: string;
  webid: string;
  curpage: Page;
  name: string;
  newdescription: string;
  constructor(private route: Router, private activatedroute: ActivatedRoute, private pageservice: PageService) {
  }
  creat() {
    this.pageservice.createWebsite(this.webid, this.curpage);
    console.log('page name' + this.curpage.name);
    console.log('description' + this.curpage.description);
    const url = '/user/' + this.userid + '/website/' + this.webid + '/page';
    this.route.navigateByUrl(url);
  }

  ngOnInit() {
    this.activatedroute.params.subscribe((params: any) => {this.userid = params.uid; this.webid = params.wid; });
    this.curpage = new Page('', 'name', this.webid, 'description');


  }

}
