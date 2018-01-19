
var menuItems = ["poutine", "hotdog", "fries", "wine"];


const map = function (arr, transformer) {
  var temp = [];
  arr.forEach(function(el, i){
    temp.push(transformer(el));
  })
  return temp;
}


// TRANSFORMERS
const upperCaser = function(el) {
  return el.toUpperCase();
}
const lengther = function(el) {
  return el.length;
}
const firstChar = (el) => el[0];


//.
const upperCaseRes = map(menuItems, upperCaser);
const lengthRes    = map(menuItems, lengther);
const firstCharRes = map(menuItems, firstChar);

console.log(upperCaseRes, lengthRes, firstCharRes);



for(var t = 0; t < menuItems.length; t++){
  console.log(menuItems[t]);
}

console.log("===================== new way for printing");

menuItems.forEach(function(e){
  console.log(e);

});