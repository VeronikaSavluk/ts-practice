class Key {
	private signature:number;
	constructor () {
		this.signature = Math.random();
	}

	getSignature(): number {
		return this.signature;
	}
};

class Person {
	constructor(private key: Key){}
	
	getKey(): Key {
		return this.key;
		}
};

abstract class House {
	private door = false;
	private tenants: Person[] = [];

	constructor(protected key: Key){}
	
	comeln(){
	if(!this.door){
		return this.tenants;
	}
	

	};
}


class House {
private door:string;

constructor(){

}
};