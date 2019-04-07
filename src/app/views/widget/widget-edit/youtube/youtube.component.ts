import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../service/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  noName: boolean;
  errorMsg = 'Please enter a widget name!';
  widget = {};
  allwidgets = [];
  userid: string;
  webid: string;
  pageid: string;
  widgetid: string;

  constructor(private youtubeService: WidgetService, private route: Router,
              private activeRoute: ActivatedRoute) { }

  update() {
    this.noName = false;
    if (this.widget['name'] === null || this.widget['name'] === null) {
      this.noName = true;
      return;
    }
    this.youtubeService.updateWidget(this.widgetid, this.widget).subscribe(
      (data: any) => {
        this.widget = data;
        const url = '/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid + '/widget';
        this.route.navigateByUrl(url);
        alert('youtube update success');
      }
    );
  }

  delete() {
    this.youtubeService.deleteWidget(this.widgetid).subscribe(
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
    this.youtubeService.findWidgetById(this.widgetid).subscribe(data => {
      this.widget = data;
      console.log(this.widget);
    });
  }
}
