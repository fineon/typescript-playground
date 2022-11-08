var dictionary = {
    apple: 'fruit',
    lettuce: 'vegetable'
};
function doSearch(db, key) {
    var dictArr = Object.keys(dictionary);
    var result = dictArr.filter(function (name) { return key === name; });
    console.log(result);
    return result;
}
doSearch(dictionary, 'apple');
var array = [1, 2, 3];
