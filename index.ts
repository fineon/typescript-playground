let dictionary = {
    apple: 'fruit',
    lettuce: 'vegetable'
}

interface dictionary {
    apple: string;
    lettuce: string;
}

function doSearch(db:dictionary,key:string):string[] {
    let dictArr:string[] = Object.keys(dictionary)
    let result:string[] = dictArr.filter(name => key === name)
    console.log(result)
    return result
}

doSearch(dictionary,'apple')

let array:number[] = [1,2,3]