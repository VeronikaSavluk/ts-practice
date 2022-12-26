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
	protected door = false;
	private tenants: Person[] = [];

	constructor(protected key: Key){}
	
	comeln (person: Person):void {
	if(!this.door){
		throw new Error('Door is closed');
	}
	
	this.tenants.push(person);
	console.log('Person is inside')
	}

	abstract openDoor (key: Key): boolean;
};

class MyHouse extends House {
 openDoor(key:Key) {
	if(key.getSignature() !== this.key.getSignature()){
		throw new Error('Key to another door');
	};

	return this.door = true;
 }
}