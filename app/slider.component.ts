import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: '<input type="range">'
})


export class SliderComponent {
  constructor() { 
    
  }
  name = 'Max';
  sayMyName() {
    console.log('My name is', this.name)
  }
}
