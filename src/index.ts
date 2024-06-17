class User {
    name: string;
    age: number;
    city: string = 'Delhi';
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const user = new User('Rahul', 25);

user.city = 'Mumbai';


//Praive and public

class User2 {
    private name: string;
    public age: number;
    city: string = 'Delhi';
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// production grade level code
class User3 {

    private _courseCounter = 1;

    readonly city: string = 'Delhi';
    constructor(private name: string, public age: number) {
    }

    //get and setters
    get getName():string {
        return this.name;
    }
    set setName(name:string) {
        this.name = name;
    }

    get courseCounter(): number {
        return this._courseCounter;
    }

    set courseCounter(courseCounter: number) {
        this._courseCounter = courseCounter;
    }
}