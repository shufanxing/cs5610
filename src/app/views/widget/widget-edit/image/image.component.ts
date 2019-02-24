import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../service/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  widget: Widget;
  userid: string;
  webid: string;
  pageid: string;
  widgetid: string;
  selectedfile: any;

  constructor(private imageService: WidgetService, private route: Router,
              private activeRoute: ActivatedRoute, private http: HttpClient) { }

  update() {
    this.imageService.updateWidget(this.widgetid, this.widget);
    const url = '/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid + '/widget';
    this.route.navigateByUrl(url);
    alert('header update success');
  }

  delete() {
    this.imageService.deleteWidget(this.widgetid);
    const url = '/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid + '/widget';
    this.route.navigateByUrl(url);
  }

  onFileChange(event) {
    this.selectedfile = <File> event.target.files[0];
    console.log(event);
  }

  upload() {
    const url = '/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid + '/widget';
    const fd = new FormData();
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.http.post(url, fd).subscribe(res => {console.log(res); });
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: any) => {
      this.userid = params.uid;
      this.webid = params.wid;
      this.pageid = params.pid;
      this.widgetid = params.wgid;
    });
    this.widget = this.imageService.findWidgetById(this.widgetid);
  }
}
