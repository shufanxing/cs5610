import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-maker';
  reorderItems(newIndexes) {
    console.log('start: ' + newIndexes.startIndex);
    console.log('stop: ' + newIndexes.endIndex);
    // call widget service function to update widget as per index
    /*this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data) => console.log(data)
      );*/
  }

}
