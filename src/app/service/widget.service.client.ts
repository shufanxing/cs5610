
import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {environment} from '../../environments/environment';
//import {environment} from '../../environments/environment.prod';


@Injectable()


export  class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', width = '100%',url = 'url')
  // widgets: Widget[] = [
  //   new Widget(
  //     '123',
  //     'name',
  //     'HEADER',
  //     '321',
  //     '2',
  //     'London terror attack: Police fired \'unprecedented\' number of rounds' ),
  //   new Widget(
  //     '234',
  //     'name',
  //     'HEADER',
  //     '321',
  //     '4',
  //     'Counter terrorism officers patrol near the scene of the attack on London Bridge.' ),
  //   new Widget(
  //     '345',
  //     'name',
  //     'IMAGE',
  //     '321',
  //     '2',
  //     'text',
  //     '100%',
  //     'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
  //   new Widget(
  //     '456',
  //     'name',
  //     'HEADER',
  //     '321',
  //     '5',
  //     'Armed officers responding to the London ' +
  //     'Bridge terror attack fired an "unprecedented" number of rounds at the three attackers because they ' +
  //     'were wearing what appeared to be suicide belts, police said.'),
  //   new Widget(
  //     '678',
  //     'name',
  //     'YOUTUBE',
  //     '321',
  //     '2',
  //     'text',
  //     '100%',
  //     'https://www.youtube.com/embed/APexI9Zb6iE' ),
  //   new Widget(
  //     '789',
  //     'name',
  //     'HEADER',
  //     '321',
  //     '5',
  //     'There is a report of an incident ' +
  //     'has occurred at London Bridge. From CNN London.')
  // ];

  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createWidget(pageId: String, widget: any) {
    const curWidget = { name: widget.name,
      widgetType: widget.widgetType, pageId: widget.pageId, size: widget.size,
      text: widget.text, width: widget.width, url: widget.url, position: widget.position }
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', curWidget);
  }

  findWidgetByPageId(pageId: String) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
  }

  findWidgetById(widgetId: String) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId);
  }

  updateWidget(widgetId: String, widget: any) {
    const curwidget = {_id: widget['_id'], name: widget['name'], widgetType: widget['widgetType'],
      pageId: widget['pageId'], size: widget['size'],
      text: widget['text'], width: widget['width'], url: widget['url'], placeholder: widget['placeholder'],
      formatted: widget['formatted'], rows: widget['rows']
       };
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, curwidget);
  }

  deleteWidget(widgetId: String) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId);
  }

  reorderWidgets(startIndex, endIndex, pageId) {

    const url = 'http://localhost:3200/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    //const url = 'https://webdev-shufanxing-cs5610.herokuapp.com' + '/api/page/' + pageId + '/widget?start='
      //+ startIndex + '&end=' + endIndex;
    console.log('I will send request in this function');
    console.log('start index is: ' + startIndex);
    console.log('end index is: ' + endIndex);

    return this.http.put(url, '');
  }


}
