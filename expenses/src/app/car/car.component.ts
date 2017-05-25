import { Component } from '@angular/core';
import { Car } from './car';
import { RequestService } from '../services/request.service';

@Component({
    selector: 'car',
    templateUrl: './car.component.html',
    providers: [RequestService]
})
export class CarComponent {
	
	public car:Car;
	public cars:Array<Car>;

	constructor(private _requestService:RequestService){

		this.car = new Car("", "", "");

		this.cars = [
			new Car("Chevete", "130", "Black"),
			new Car("Malibu", "150", "gray")
		];

	}

	ngOnInit(){
		console.log(this._requestService.getTest());
	}

	onSubmit(){
		this.cars.push(this.car);
		this.car = new Car("", "", "");
	}

}