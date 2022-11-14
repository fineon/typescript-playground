"use strict";
var _Animal_truePrivate;
let nonMeat = {
    apple: 'fruit',
    lettuce: 'vegetable'
};
//this function has parameters that take an obj with specific types declared, and a string
function doSearch(db, key) {
    let dictArr = Object.keys(db);
    let result = dictArr.filter(name => key === name).toString();
    let resultVal = db[result];
    console.log(result, resultVal);
    return result;
}
//returns ['apple']
doSearch(nonMeat, 'apple');
//array type declaration
let array = [1, 2, 3];
//auto infer literal type
const constant = "hi";
//declaring the number type with a specific value for checking
let literalNum = 12;
//still ok, no need to have vegetables key
let optionalFoodKey = {
    fruit: 'banana'
};
//func with union type, param is either a string or null
function nullFunc(param) {
    if (typeof param === null) {
        console.log('this function has null param');
        return null;
    }
    else {
        console.log('this func is NOT null!', param);
        //assert that this param is not null. Be sure to handle errors if it is null though
        return param;
    }
}
nullFunc(null);
nullFunc('hi');
//CLASSES
class Animal {
    constructor() {
        //soft private
        this.bear = 'bear';
        this.tiger = 'tiger';
        //true private var
        _Animal_truePrivate.set(this, true);
        //readonly
        this.isStriped = true;
    }
    setNumberofAnimals(number) {
        let reducer = number.reduce((prev, curr) => prev + curr);
        return reducer;
    }
}
_Animal_truePrivate = new WeakMap();
//static. Can be read without instantiate
Animal.location = 'savanah';
console.log(Animal.location);
let myAnimals = new Animal();
console.log(myAnimals.isStriped);
//private is only for typescript checking, not applicable to runtime. You can still access it at runtime. Use #hashtag instead for hard private
// console.log(myAnimals.tiger) => tiger
// console.log(myAnimals.truePrivate) => undefined
console.log(myAnimals.setNumberofAnimals([2, 2, 2, 2, 2]));
