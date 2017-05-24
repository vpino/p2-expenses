import { Component } from '@angular/core';
import { Car } from './car';

@Component({
    selector: 'car',
    templateUrl: './car.component.html'
})
export class CarComponent {
	
	public car:Car;
	public cars:Array<Car>;

	constructor(){

		this.car = new Car("", "", "");

		this.cars = [
			new Car("Chevete", "130", "Black"),
			new Car("Malibu", "150", "gray")
		];

	}

	onSubmit(){
		this.cars.push(this.car);
		this.car = new Car("", "", "");
	}

}