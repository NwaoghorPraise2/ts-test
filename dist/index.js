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
        //every protected field can be accesiced in a class that inherits from the parent.
        this._courseCounter = 1;
        this.city = 'Delhi';
    }
    //private method
    deleteToken() {
        console.log('Token deleted');
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
class SubUser extends User3 {
    constructor() {
        super(...arguments);
        this.isUser = true;
    }
    changeCourseCount() {
        this._courseCounter = 4;
    }
}
