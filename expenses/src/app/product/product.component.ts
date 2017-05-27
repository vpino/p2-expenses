import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';


@Component({
	selector: 'product',
	templateUrl: './product.component.html',
	providers: [ProductService]
})
export class ProductComponent {

	public title:string;
	public products:Product[];


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService){

		this.title = 'List Products';

	}

	ngOnInit(){
		this._productService.getProducts().subscribe(
			response => {

				if (response.code == 200){
				    this.products = response.data;
				} else {
					console.log(response);
				}

			},

			error => {
				console.log(<any>error);
			}
		);
	}

}