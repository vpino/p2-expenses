import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {

	public title:string;
	public param:Params;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router
	) {}

	ngOnInit(){

		this.title = 'Ah vaina';

		this._route.params.forEach( (params: Params) => {

			this.param = params['page'];

		});

	}

	redirect(){
		this._router.navigate(['/contact', 'nosabe']);
	}

	redirectHome(){
		this._router.navigate(['/home']);
	}

}