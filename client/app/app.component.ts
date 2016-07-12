import { Component } from '@angular/core';
import { SliderComponent } from './slider.component';
import { MainService } from './main.service.ts';

@Component({
  selector: 'my-app',
  template: `<h1>Poller</h1> 
              <slider></slider>`,
  directives: [SliderComponent]
})

export class AppComponent { 

}