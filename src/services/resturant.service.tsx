import { Burger } from "../models/burger.model";
import { Position } from "../models/position.model";
import { Restaurant } from "../models/resturant.model";
import { Time } from "../models/time.model";

export function getResturantsByName(searchedName:string):Array<Restaurant>{
	return [
		new Restaurant(1,'Best Burgers','Earth',new Time('14','00'),new Time('21','00')),
		new Restaurant(2,"Cheap Burgers","The Moon",new Time('04','00'),new Time('13','00')),
		new Restaurant(3,"Bad Burgers","The Sun",new Time('02','00'),new Time('03','00'))
	]
}

export function getResturantsByPotition(searchedPosition:Position):Array<Restaurant>{
	return [
		new Restaurant(1,'Best Burger','Earth',new Time('14','00'),new Time('21','00')),
		new Restaurant(2,"Cheap Burger","The Moon",new Time('04','00'),new Time('13','00')),
		new Restaurant(3,"Bad Burger","The Sun",new Time('02','00'),new Time('03','00'))
	]
}

export function getBurgersByResturant(resturantName:string):Array<Burger>{
	return [
		new Burger(1,'Hamburger'),
		new Burger(2,"Cheese burger"),
		new Burger(3,"Royal Burger")
	]
}
