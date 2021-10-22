import { Time } from "./time.model";

export class Restaurant {
	public id: number;
	public name: string;
	public address: string;
	public openFrom: Time;
	public openTo: Time;
  
	constructor(id: number, name: string, address:string, openFrom: Time, openTo: Time) {
	  this.id = id;
	  this.name = name;
	  this.address = address;
	  this.openFrom = openFrom;
	  this.openTo = openTo;
	}
  }