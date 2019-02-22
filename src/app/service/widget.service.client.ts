
import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export  class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', width = '100%',url = 'url')
  widgets: Widget[] = [
    new Widget('123', 'HEADER', '321', '2', 'GIZMODO' ),
    new Widget('123', 'HEADER', '321', '2', 'GIZMODO' ),
    new Widget('123', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('123', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token' ),
  ];

  createWidget(pageId, widget) {
    this.widgets.push(widget);
  }

  findWidgetByPageId(pageId) {
    for ( let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        return this.widgets[x];
      }
    }
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
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
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
