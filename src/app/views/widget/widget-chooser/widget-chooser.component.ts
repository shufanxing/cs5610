import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../service/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userid: string;
  webid: string;
  pageid: string;
  position: Number;
  widgets: Widget[] = [
    new Widget('id', 'name', 'HEADER', 'pageid', 1),
    new Widget('id', 'name', 'IMAGE', 'pageid', 2),
    new Widget('id', 'name', 'YOUTUBE', 'pageid', 3),
    new Widget('id', 'name', 'HTML', 'pageid', 4),
    new Widget('id', 'name', 'TEXT', 'pageid', 5)
  ];

  constructor(private service: WidgetService, private route: Router, private activeroute: ActivatedRoute ) { }
  creat(widget) {

    const newWidget = {
      name: widget.name,
      pageId: this.pageid,
      widgetType: widget.widgetType,
      position: this.position,
      text: widget.text,
      url: widget.url,
      size: widget.size,
      width: widget.width,
    };
    console.log('the positon in the widget is:' + newWidget['position']);
      this.service.createWidget(this.pageid, newWidget).subscribe(
        (newWidget: any) => {
          console.log(newWidget);
          const url = '/user/' + this.userid + '/website/' + this.webid
            + '/page/' + this.pageid + '/widget/' + newWidget._id;
          this.route.navigateByUrl(url);
        }
      );
    }

  ngOnInit() {
    this.activeroute.params.subscribe((params: any) => {
      this.userid = params.uid;
      this.webid = params.wid;
      this.pageid = params.pid;
    });

    this.service.findWidgetByPageId(this.pageid).subscribe(
      (data: any) => {
        this.position = Object.keys(data).length + 1;
        console.log('current position is :' + this.position);
      }
    );

  }

}
