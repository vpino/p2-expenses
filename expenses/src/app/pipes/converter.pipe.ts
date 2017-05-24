import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'converter'})
export class ConverterPipe implements PipeTransform {
	
	transform(value, value2){

		let value_one = parseInt(value);
		let value_two = parseInt(value2);

		let result = (value_one * value_two);

		return "The multiplication: " + value_one +" x "+value_two+ " = "+ result;

	}

}
