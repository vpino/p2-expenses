import { Injectable } from '@angular/core';

@Injectable()
export class ClothesService{

	public name_garment:string;
	
	test(name_garment){
		return name_garment;
	}
	
}