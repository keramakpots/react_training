//import Person from './Person.js'
var s = 2;
let g;
var list = [1,2,5,67,89]

for (var variable in list) {
    if (list.hasOwnProperty(variable)) {
        g = list[variable];
        console.log(g);
    }
}
//var personGenerator = require["Person"];
//var person = new Person("Janek");
console.log(s);

var $ = require('jquery');
//$('h1').html('KOŃ');
