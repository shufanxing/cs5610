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
  pages = [];
  noName: boolean;
  errorMsg = 'Please enter a name for this Page';
  constructor(private route: Router, private activatedroute: ActivatedRoute, private pageservice: PageService) {
  }
  creat() {
    if (this.curpage.name !== '') {
      this.noName = false;
    } else {
      this.noName = true;
    }
    if (!this.noName) {
    this.pageservice.createPage(this.webid, this.curpage).subscribe(
      (data: any) => {
        this.pages = data;
        console.log(this.pages);
        console.log('page name' + this.curpage.name);
        console.log('description' + this.curpage.description);
        const url = '/user/' + this.userid + '/website/' + this.webid + '/page';
        this.route.navigateByUrl(url);
      }
    );
    }
  }

  ngOnInit() {
    this.activatedroute.params.subscribe((params: any) => {this.userid = params.uid; this.webid = params.wid; });
    this.curpage = new Page('', '', this.webid, '');
  }

}
