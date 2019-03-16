import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../service/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userid: string;
  pageid: string;
  webid: string;
  widgets: [];

  constructor(private widgetservice: WidgetService,
              private route: Router,
              private activeroute: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  getUrl(widget: Widget) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(widget.url + '');
  }
  onActivate() {
    window.scroll(0, 0);
  }
  ngOnInit() {
    this.activeroute.params.subscribe((params: any) => { this.userid = params.uid;
                                                               this.webid = params.wid;
                                                               this.pageid = params.pid; });
    this.widgetservice.findWidgetByPageId(this.pageid).subscribe((data: any) => {
      this.widgets = data;
      console.log(this.widgets);
    });
  }

}
