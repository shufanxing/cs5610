import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../service/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

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
  file: any;
  input: string;
  selectedfile: ImageSnippet;

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
    this.file = <File> event.target.files[0];
    this.input = event.target.result;
    console.log(event);
  }

  upload() {
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedfile = new ImageSnippet(event.target.result, this.file);
      this.uploadImage(this.selectedfile.file).subscribe(
        (res) => {
        },
        (err) => {
        });
      });
    reader.readAsDataURL(this.file);
  }
  public uploadImage(image: File) {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid + '/widget', formData);
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
