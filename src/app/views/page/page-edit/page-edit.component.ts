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
  curpage = {};
  pages = [];
  noName: boolean;
  errorMsg = 'Please enter a name for this page';
  constructor(private pageservice: PageService,
              private pagerouter: Router,
              private activatedRouter: ActivatedRoute) { }
  delete() {
    this.pageservice.deletePage(this.pageid).subscribe(
      (data: any) => {
        this.pages = data;
        console.log(this.pages);
        const url = '/user/' + this.userid + '/website/' + this.webid + '/page';
        this.pagerouter.navigateByUrl(url);
      }
    );
  }
  update() {
    if (this.curpage['name'] === '' || this.curpage['name'] === null){
      this.noName = true;
    } else {
      this.noName = false;
    }
    if (!this.noName) {
    this.pageservice.updatePage(this.pageid, this.curpage).subscribe(
      (data: any ) => {
        this.curpage = data;
        console.log('updated page' + this.curpage);
        const url = '/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid;
        this.pagerouter.navigateByUrl(url);
        alert('update success!');
      }, (error: any) => {
        alert ('update not successful');
      }
    );
    }
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (params: any) => {this.userid = params.uid; this.webid = params.wid, this.pageid = params.pid; });
    this.pageservice.findPageById(this.pageid)
      .subscribe((data: any) => {
        console.log('in login comp...');
        console.log(data);
        this.curpage = data;
      });
  }

}
