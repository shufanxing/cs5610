import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../service/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  webid: string;
  userid: string;
  pageid: string;
  curpage: Page;
  constructor(private pageservice: PageService,
              private pagerouter: Router,
              private activatedRouter: ActivatedRoute) { }
  delete() {
    this.pageservice.deleteWebsite(this.pageid);
    const url = '/user/' + this.userid + '/website/' + this.webid + '/page';
    this.pagerouter.navigateByUrl(url);
  }
  update() {
    this.pageservice.updatePage(this.pageid, this.curpage);
    const url = '/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid;
    this.pagerouter.navigateByUrl(url);
    alert('update success!');
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (params: any) => {this.userid = params.uid; this.webid = params.wid, this.pageid = params.pid; });
    this.curpage = this.pageservice.findPageById(this.pageid);
  }

}
