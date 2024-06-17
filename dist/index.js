"use strict";
class User {
    constructor(name, age) {
        this.city = 'Delhi';
        this.name = name;
        this.age = age;
    }
}
const user = new User('Rahul', 25);
user.city = 'Mumbai';
//Praive and public
class User2 {
    constructor(name, age) {
        this.city = 'Delhi';
        this.name = name;
        this.age = age;
    }
}
// production grade level code
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._courseCounter = 1;
        this.city = 'Delhi';
    }
    //get and setters
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get courseCounter() {
        return this._courseCounter;
    }
    set courseCounter(courseCounter) {
        this._courseCounter = courseCounter;
    }
}
