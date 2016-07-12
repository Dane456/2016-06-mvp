import { Component } from '@angular/core';
import { MyComponent } from './slider.component';

@Component({
  selector: 'my-app',
  template: `<h1>Poller</h1> 
              <my-component></my-component>`,
  directives: [MyComponent]
})
export class AppComponent { 

}