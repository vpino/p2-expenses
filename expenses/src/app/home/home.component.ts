import { Component } from '@angular/core';
import { ClothesService } from '../services/clothes.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ClothesService]
})
export class HomeComponent{

	public title:string;
	public list_clothes:Array<string>;
	public garment_save:string;

	constructor(private _clothesService:ClothesService){
		this.title = 'Main page';
	}

	ngOnInit(){
		this.list_clothes = this._clothesService.getClothes();
	}

	saveGarment(){
		this._clothesService.addClothes(this.garment_save);
		this.garment_save = null;
	}

	deleteGarment(index:number){
		this._clothesService.deleteGarment(index);
	}
	
}