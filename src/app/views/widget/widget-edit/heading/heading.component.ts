import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../service/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  widget = {};
  userid: string;
  webid: string;
  pageid: string;
  widgetid: string;
  allwidgets = [] ;

  constructor(private headingService: WidgetService, private route: Router,
              private activeRoute: ActivatedRoute) { }

  update() {
    this.headingService.updateWidget(this.widgetid, this.widget).subscribe(
      (data: any) => {
        this.widget = data;
        const url = '/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid + '/widget';
        this.route.navigateByUrl(url);
        alert('header update success');
      }
    );
  }

  delete() {
    this.headingService.deleteWidget(this.widgetid).subscribe(
      (data: any) => {
        this.allwidgets = data;
        const url = '/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid + '/widget';
        this.route.navigateByUrl(url);
      }
    );
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: any) => {
      this.userid = params.uid;
      this.webid = params.wid;
      this.pageid = params.pid;
      this.widgetid = params.wgid;
    });
    this.headingService.findWidgetById(this.widgetid).subscribe((data: any) => {
      this.widget = data;
    });
  }

}
