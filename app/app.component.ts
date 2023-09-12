import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-uploader-app';
  responseText = '';

  onResponse(event: Event): void {
    this.responseText = (event.target as any).response;
  }
}





