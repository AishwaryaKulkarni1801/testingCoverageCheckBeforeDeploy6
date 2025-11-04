import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  message: string = '';

  showMessage() {
    this.message = 'Hello! This is a demo message.';
  }
}
