import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../service/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userid: string;
  webid: string;
  pages: Page[];
  constructor(private pageService: PageService, private pageRouter: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((params: any) => {this.userid = params.uid; this.webid = params.wid; });
    this.pages = this.pageService.findPageByWebsiteId2(this.webid);
    console.log(this.userid);
    console.log(this.webid);
  }

}
