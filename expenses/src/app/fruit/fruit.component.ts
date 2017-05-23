import { Component } from '@angular/core';

@Component({
  selector: 'fruit',
  templateUrl: './fruit.component.html'
})

export class FruitComponent{
  
  public name_component = 'Componente de fruit';
  public list_fruit = 'Naranja, Manzana, Pera y Patilla';

   	public name:string;
    public age:number;
    public email:string;
    public adult:boolean;
    public works:Array<any>;
    public any:any;

    constructor(){
    	this.name = 'Victor Hugo';
    	this.age = 55;
    	this.email = "victopin0@gmail.com";
    	this.adult = false;
    	this.works = ['Músico', 1, 'Compositor'];
    	this.any = "any";
    }

    /* After the constructor */
    ngOnInit(){

    	this.checkAdult(this.age);

    	/* var and let */
    	var one = 8;
    	var two = 15;

    	if (one == 8) {
    		let one = 3;
    		var two = 10;

    		console.log("Inside of IF: " + one + " " + two);
    	}

    	console.log("Outside of IF: " + one + " " + two);
    }
    

    checkAdult(age){
    	if (age >= 18){
    		return true;
    	} else {
    		return false;
    	}
    }

}