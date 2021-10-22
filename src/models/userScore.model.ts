import { User } from "./user.model";

export class UserScore{
	public taste:number;
	public texture:number;
	public visual:number;
	public user:User;

	constructor(taste:number,texture:number, visual:number, user:User){
		this.taste = taste;
		this.texture = texture;
		this.visual = visual;
		this.user = user;
	}
}