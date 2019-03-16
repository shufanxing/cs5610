import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../service/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widget = {};
  widgetid: string;
  userid: string;
  pageid: string;
  webid: string;
  constructor(private activeroute: ActivatedRoute, private service: WidgetService) { }

  ngOnInit() {
    this.activeroute.params.subscribe((params: any) => {
      this.userid = params.uid;
      this.pageid = params.pid;
      this.webid = params.wid;
      this.widgetid = params.wgid;
    });
    this.service.findWidgetById(this.widgetid).subscribe((data: any) => {
      this.widget = data;
      console.log(this.widget);
    });
  }
}
