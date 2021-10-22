export class Time{
	public hours:string;
	public min:string;

	constructor(hours:string, min: string){
		this.hours = hours;
		this.min = min;
	}

	public getTime() {
		return this.hours + ':' + this.min;
	}
}