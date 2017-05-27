import { Component } from '@angular/core';

@Component({
	selector: 'error',
	templateUrl: './error.component.html'
})
export class ErrorComponent{

	public title:string;

	constructor(){
		this.title = 'Error!! Page not found.'
	}

	ngOnInit(){
		console.log('Error Component Loaded');
	}
}