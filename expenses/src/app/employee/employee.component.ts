import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent{

	public employee:Employee;
	public employees:Array<Employee>;

	constructor(){
		this.employee = new Employee(
			'Victor Hugo',
			22,
			'Programador',
			true);
		this.employees = [
			new Employee('Nikola Tesla', 60, 'Genius', false),
			new Employee('Allan Poe', 47, 'Genius', false),
			new Employee('Mileva', 75, 'Genius', true)
		];
	}

	ngOnInit(){
		console.log(this.employees);

	}



}