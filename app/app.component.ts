import { Component } from '@angular/core';
import { MyComponent } from './slider.component';
import { MainService } from './main.service.ts';

@Component({
  selector: 'my-app',
  template: `<h1>Poller</h1> 
              <SliderComponent></SliderComponent>`,
  directives: [MyComponent]
})

export class AppComponent { 

}