import { Component } from '@angular/core';
import { Car } from './car';

@Component({
    selector: 'car',
    templateUrl: './car.component.html'
})
export class CarComponent {
	
	public car:Car;

	constructor(){
		this.car = new Car("", "", "");
	}

	onSubmit(){
		console.log(this.car);
	}
	
}