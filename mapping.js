var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(currentValue) {
  var a = Math.pow(currentValue.x, 2);
  var b = Math.pow(currentValue.y, 2);
  var c = Math.sqrt(a + b);
  return c;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
console.log(result [0]);

