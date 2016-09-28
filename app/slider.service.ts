import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class SliderService {
	constructor(private _http: Http){

	}
	postInput(data){
		console.log('Posting from sliderService: ', data);
		return this._http.post('/sessionInput', data)
		.map(res => res.json());
	}
	getInput(){
		return this._http.get('/sessionInput')
		.map(res => res.json());
	}
}