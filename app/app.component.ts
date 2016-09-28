import { Component } from '@angular/core';
import { SliderComponent } from './slider.component';

@Component({
  selector: 'my-app',
  template: `<h1>Poller</h1> 
              <slider></slider>`,
  directives: [SliderComponent]
})

export class AppComponent { 

}