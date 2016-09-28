import { Component } from '@angular/core';
import { SliderService } from './slider.service';


@Component({
  selector: 'slider',
  template: `<h1>Direct Data-Bound Input</h1>
  			<h1>{{sliderInput}}</h1>
  			<h3>Server Data</h3>
  			<h3>{{dataChange}}</h3>
  			<input [(ngModel)]="sliderInput" (change)=onChange() type="range">`,
  providers: [SliderService] 
})


export class SliderComponent {

  allData;
  nativeInput = 0;
  dataChange = 0;
  constructor(public sliderService: SliderService) { 
	 
  }

  onChange(){
  	this.nativeInput = this.sliderInput;
  	this.sliderService.postInput({username: 'user1', input: this.sliderInput})
  	.subscribe(response => {
  		console.log('Angular2 Post response: ', response);
  	})
  this.sliderService.getInput()
  .subscribe(allData => {
	this.dataChange = allData[0].input;
	console.log('Angular2 Get Response :', allData) }
  }

}
	