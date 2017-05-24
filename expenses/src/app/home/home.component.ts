import { Component } from '@angular/core';
import { ClothesService } from '../services/clothes.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ClothesService]
})
export class HomeComponent{

	public title:string;

	constructor(private _clothesService:ClothesService){
		this.title = 'Main page';
	}

	ngOnInit(){
		console.log(this._clothesService.test('Cowboy pants'));
	}
	
}