let nonMeat = {
    apple: 'fruit',
    lettuce: 'vegetable'
}

//obj type declaration, can inherit other types to extend
interface dictionary {
    apple: string;
    lettuce: string;
}

//this function has parameters that take an obj with specific types declared, and a string
function doSearch(db:dictionary,key:string):string {
    let dictArr = Object.keys(db)
    let result = dictArr.filter(name => key === name).toString()
    let resultVal:string = db[result as keyof dictionary]
    console.log(result, resultVal)
    return result
}

//returns ['apple']
doSearch(nonMeat,'apple')

//array type declaration
let array:number[] = [1,2,3]

//type alias for later use
type AllTypes = {
    string: string;
    number: number;
    obj: {key: string, val: string};
    array: string[];
}

//auto infer literal type
const constant = "hi"
//declaring the number type with a specific value for checking
let literalNum: 12 = 12;

//obj type declaration with an optional key vegetables
interface optionalKey {
    fruit: string;
    //optional obj key declaration
    vegetables?: string;
}

//still ok, no need to have vegetables key
let optionalFoodKey = {
    fruit: 'banana'
}

//func with union type, param is either a string or null
function nullFunc(param: string | null): string | null {
    if (typeof param === null) {
        console.log('this function has null param')
        return null;
    } else {
        console.log('this func is NOT null!',param)
        //assert that this param is not null. Be sure to handle errors if it is null though
        return param!

    }
}

nullFunc(null);
nullFunc('hi');

//CLASSES
class Animal {
    //soft private
    private bear: string = 'bear';
    private tiger: string = 'tiger';
    //true private var
    #truePrivate:boolean = true;
    //readonly
    readonly isStriped: boolean = true ;
    //static. Can be read without instantiate
    static location: string = 'savanah';

    constructor() {
        
        
    }

   public setNumberofAnimals(number: number[]): number {
        let reducer = number.reduce((prev,curr)=>prev+curr)
        return reducer;
   }
}

console.log(Animal.location)
let myAnimals = new Animal()
console.log(myAnimals.isStriped)
//private is only for typescript checking, not applicable to runtime. You can still access it at runtime. Use #hashtag instead for hard private
// console.log(myAnimals.tiger) => tiger
// console.log(myAnimals.truePrivate) => undefined
console.log(myAnimals.setNumberofAnimals([2,2,2,2,2]))