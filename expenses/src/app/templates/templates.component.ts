import { Component } from '@angular/core';

@Component({
	selector: 'templates',
	templateUrl: 'templates.component.html'

})
export class TemplatesComponent{

	public title:string;
	public administrator;

	constructor(){
		this.title = "Templates ngTemplate on Angular";
		this.administrator = true;
	}


	changeAdmin(value){
		this.administrator = value;
	}


}