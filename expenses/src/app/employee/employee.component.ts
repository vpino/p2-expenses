import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent{

	public employee:Employee;
	public employees:Array<Employee>;
	public work_external:boolean;
	public colour:string;

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

		this.work_external = false;
		this.colour = 'blue';
	}

	ngOnInit(){
		console.log(this.employees);

	}

	changeExternal(value){
		this.work_external = value;
	}



}