import { Component } from '@angular/core';

@Component({
  selector: 'slider',
  template: `<ng2-slider 
			    min="6"
			    max="23"
			    startValue="9"
			    endValue="21"
			    stepValue="2"
			    [normalHandlerStyle]="{ 'background-color': 'green'}"
			    [slidingHandlerStyle]="{
			          'border-radius': '9px',
			          'background-color': 'red'
			    }">
			</ng2-slider>`
})


export class SliderComponent {
  constructor() { 
    
  }
  onRangeChange(){
  	console.log('valueChanged')
  }
  name = 'Max';
  sayMyName() {
    console.log('My name is', this.name)
  }
}
