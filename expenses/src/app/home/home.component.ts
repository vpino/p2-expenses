import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent{

	public title:string;

	constructor(){
		this.title = 'Webapp to My expenses';
	}

	ngOnInit(){
		console.log("Cargado el componenete");
	}
}