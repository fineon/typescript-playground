var nonMeat = {
    apple: 'fruit',
    lettuce: 'vegetable'
};
//this function has parameters that take an obj with specific types declared, and a string
function doSearch(db, key) {
    var dictArr = Object.keys(db);
    var result = dictArr.filter(function (name) { return key === name; });
    console.log(result, db[result.toString()]);
    return result;
}
//returns ['apple']
doSearch(nonMeat, 'apple');
//array type declaration
var array = [1, 2, 3];
//auto infer literal type
var constant = "hi";
//declaring the number type with a specific value for checking
var literalNum = 12;
//still ok, no need to have vegetables key
var optionalKey = {
    fruit: 'banana'
};
//func with union type, param is either a string or null
function nullFunc(param) {
    if (typeof param === null) {
        console.log('this function has null param');
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
var Animal = /** @class */ (function () {
    function Animal() {
        this.isStriped = true;
    }
    Animal.prototype.setNumberofAnimals = function (number) {
        var reducer = number.reduce(function (prev, curr) {
            return prev + curr;
        });
        return reducer;
    };
    Animal.location = 'savanah';
    return Animal;
}());
console.log(Animal.location);
var myAnimals = new Animal();
console.log(myAnimals.isStriped);
console.log(myAnimals.setNumberofAnimals([2, 2, 2, 2, 2]));
