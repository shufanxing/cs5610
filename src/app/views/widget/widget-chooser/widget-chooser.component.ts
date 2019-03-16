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
  widgets: Widget[] = [
    new Widget('id', 'name', 'HEADER', 'pageid'),
    new Widget('id', 'name', 'IMAGE', 'pageid'),
    new Widget('id', 'name', 'YOUTUBE', 'pageid')
  ];

  constructor(private service: WidgetService, private route: Router, private activeroute: ActivatedRoute ) { }
  creat(widget) {
      const new_widget = {
        _id: (new Date()).getTime() + '',
        name: widget.name,
        pageId: this.pageid,
        widgetType: widget.widgetType,
        text: widget.text,
        url: widget.url,
        size: widget.size,
        width: widget.width};
      this.service.createWidget(this.pageid, new_widget).subscribe(
        (newWidget: Widget) => {
          console.log(newWidget);
          const url = '/user/' + this.userid + '/website/' + this.webid
            + '/page/' + this.pageid + '/widget/' + new_widget._id;
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

  }

}
