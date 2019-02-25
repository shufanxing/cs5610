
import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()


export  class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', width = '100%',url = 'url')
  widgets: Widget[] = [
    new Widget(
      '123',
      'name',
      'HEADER',
      '321',
      '2',
      'London terror attack: Police fired \'unprecedented\' number of rounds' ),
    new Widget(
      '234',
      'name',
      'HEADER',
      '321',
      '4',
      'Counter terrorism officers patrol near the scene of the attack on London Bridge.' ),
    new Widget(
      '345',
      'name',
      'IMAGE',
      '321',
      '2',
      'text',
      '100%',
      'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
    new Widget(
      '456',
      'name',
      'HEADER',
      '321',
      '5',
      'Armed officers responding to the London ' +
      'Bridge terror attack fired an "unprecedented" number of rounds at the three attackers because they ' +
      'were wearing what appeared to be suicide belts, police said.'),
    new Widget(
      '678',
      'name',
      'YOUTUBE',
      '321',
      '2',
      'text',
      '100%',
      'https://www.youtube.com/embed/APexI9Zb6iE' ),
    new Widget(
      '789',
      'name',
      'HEADER',
      '321',
      '5',
      'There is a report of an incident ' +
      'has occurred at London Bridge. From CNN London.')
  ];


  createWidget(pageId, widget) {
    const new_widget = {
      _id: (new Date()).getTime() + '',
      name: widget.name,
      pageId: pageId,
      widgetType: widget.widgetType,
      text: widget.text,
      url: widget.url,
      size: widget.size,
      width: widget.width
    };
    this.widgets.push(new_widget);
  }

  findWidgetByPageId(pageId) {
    return this.widgets.filter(function (widget) {
      return widget.pageId === pageId;
    });
  }

  findWidgetById(widgetId) {
    for ( let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId, widget) {
    for ( const i in this.widgets ) {
      if ( this.widgets[i]._id === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }

      }
    }
    return false;
  }

  deleteWidget(widgetId) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }

  }


}
