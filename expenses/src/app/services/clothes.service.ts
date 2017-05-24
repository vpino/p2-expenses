import { Injectable } from '@angular/core';

@Injectable()
export class ClothesService{

	public garment:string;
	public collection =['Jeans White', 'Shirt red'];

	test(garment){
		return garment;
	}

	addClothes(garment:string):Array<string>{

		this.collection.push(garment);

		return this.getClothes();
	}	

	deleteGarment(index:number){
		
		this.collection.splice(index, 1);

		return this.getClothes();
	}

	getClothes():Array<string>{
		return this.collection;
	}

}