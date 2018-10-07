

var _ = require('lodash');

var people = [{
"id": 1,
"first_name": "Kaila",
"last_name": "Stronach",
"email": "kstronach0@wsj.com",
"gender": "Female",
"ip_address": "21.172.1.242"
}, {
"id": 2,
"first_name": "Marcello",
"last_name": "Wilfinger",
"email": "mwilfinger1@omniture.com",
"gender": "Male",
"ip_address": "225.114.153.244"
}, {
"id": 3,
"first_name": "Cecilla",
"last_name": "Gilbody",
"email": "cgilbody2@dion.ne.jp",
"gender": "Female",
"ip_address": "52.119.220.6"
}, {
"id": 4,
"first_name": "Mercedes",
"last_name": "Maybey",
"email": "mmaybey3@sun.com",
"gender": "Female",
"ip_address": "85.78.224.143"
}, {
"id": 5,
"first_name": "Freddie",
"last_name": "Ringe",
"email": "fringe4@godaddy.com",
"gender": "Female",
"ip_address": "186.32.26.109"
}, {
"id": 6,
"first_name": "Rhetta",
"last_name": "Fenne",
"email": "rfenne5@deliciousdays.com",
"gender": "Female",
"ip_address": "224.201.167.220"
}, {
"id": 7,
"first_name": "Garrot",
"last_name": "Croix",
"email": "gcroix6@pcworld.com",
"gender": "Male",
"ip_address": "96.144.163.247"
}, {
"id": 8,
"first_name": "Carlotta",
"last_name": "Coultard",
"email": "ccoultard7@linkedin.com",
"gender": "Female",
"ip_address": "146.152.226.9"
}, {
"id": 9,
"first_name": "Haven",
"last_name": "Cawston",
"email": "hcawston8@phpbb.com",
"gender": "Male",
"ip_address": "67.145.214.98"
}, {
"id": 10,
"first_name": "Ingram",
"last_name": "Lockey",
"email": "ilockey9@alexa.com",
"gender": "Male",
"ip_address": "222.64.56.54"
}, {
"id": 11,
"first_name": "Kenna",
"last_name": "Ivashin",
"email": "kivashina@mac.com",
"gender": "Female",
"ip_address": "6.70.120.19"
}, {
"id": 12,
"first_name": "Ranique",
"last_name": "MacGahey",
"email": "rmacgaheyb@alexa.com",
"gender": "Female",
"ip_address": "13.203.32.52"
}, {
"id": 13,
"first_name": "Joye",
"last_name": "Rhymer",
"email": "jrhymerc@wikipedia.org",
"gender": "Female",
"ip_address": "129.198.89.108"
}, {
"id": 14,
"first_name": "Poul",
"last_name": "Torrisi",
"email": "ptorrisid@paypal.com",
"gender": "Male",
"ip_address": "151.162.173.2"
}, {
"id": 15,
"first_name": "Trixi",
"last_name": "Pescod",
"email": "tpescode@github.io",
"gender": "Female",
"ip_address": "165.239.3.4"
}, {
"id": 16,
"first_name": "Bekki",
"last_name": "Palatino",
"email": "bpalatinof@weibo.com",
"gender": "Female",
"ip_address": "142.182.46.133"
}, {
"id": 17,
"first_name": "Wadsworth",
"last_name": "Keinrat",
"email": "wkeinratg@theguardian.com",
"gender": "Male",
"ip_address": "141.41.68.98"
}, {
"id": 18,
"first_name": "Carlye",
"last_name": "Buckleigh",
"email": "cbuckleighh@about.me",
"gender": "Female",
"ip_address": "69.177.7.236"
}, {
"id": 19,
"first_name": "Karlik",
"last_name": "Cassius",
"email": "kcassiusi@icio.us",
"gender": "Male",
"ip_address": "39.65.117.177"
}, {
"id": 20,
"first_name": "Winni",
"last_name": "Chiverton",
"email": "wchivertonj@alexa.com",
"gender": "Female",
"ip_address": "156.107.200.78"
}]

var chosenGenderAmount = _.filter(people, {gender:"Male"}).length;
var $ = require('jquery');
$('h1').html(`There is ${chosenGenderAmount} males in list`);


class Person {

static get SPIECE() {
return "Człowiek";
}
constructor(name) {
this.name = name;
}
static say() {
console.log("Cześć!");
}
present() {
console.log(this.name);
}
}

var person = new Person("Marek");
Person.say();
console.log(Person.SPIECE);
person.present();


var presentation = (a, b) => console.log(` I'm ${a} and my name is ${b} `)

presentation(Person.SPIECE, person.name);
