// const Cat = {
//   legs: 4,
//   tail: true,
//   claws: "sharp",
//   whiskers: true,
// };

// const Tiger = {
//   legs: 4,
//   tail: true,
//   claws: "sharp",
//   whiskers: true,
//   speed: 60,
//   weight: "250kgs",
//   climb: false,
// };

// Object.create();

// const Tiger = Object.create(cat);
// Tiger.speed = 60;
// Tiger.weight = "250kgs";
// Tiger.climb = false;
// console.log(Tiger);

//
// const Reebok = {
//   brand_name: "Reebok",
//   type: "shoes",
//   material: "leather",
//   country: "india",
// };

// Loafers --> model_name, price, Sneakers

// const grandfather = {
//   surname: "winchester",
//   hands: 2,
//   legs: 2,
//   eyes: 2,
// };

// const father = Object.create(grandfather);
// father.name = "Richard";

// const son = Object.create(father);
// son.name = "Sam";

// console.log(son);
//.__proto__

// const a = {
//   name: "sam",
// };

// const b = Object.create(a);
// b.age = 21;
// b.name = "Dean";

// console.log(b.__proto__); //a
// console.log(b.__proto__.__proto__); //a
// console.log(b.__proto__.__proto__.__proto__); //

// hasOwnProperty;

// console.log(b.name);
// console.log(b.age);
// console.log(b.hasOwnProperty("name"));
// console.log(b.hasOwnProperty("age"));

// console.log(b);

// create a newspaper using constructor;
// timestamp; id; day; publisher

// function Newspaper(day, publisher) {
//   this.timestamp = new Date();
//   this.id = parseInt(Math.random() * 10);
//   this.day = day;
//   this.publisher = publisher;
// }

// Newspaper.prototype.ad = function () {
//   console.log("Flipkart Big Billion Day!");
// };

// let newspaper1 = new Newspaper("Thursday", "The Hindu");
// console.log(newspaper1);
// newspaper1.ad();

//let arr = [];

// let arr = new Array(1, 2, 3, 4, 5);

// console.log(arr);

// arr.push(6); // .
// console.log(arr.__proto__.__proto__.__proto__);

// let a1 = "sam";
// // let a1 = new String("sam");

// console.log(a1);

// let temp = a1.split("a");
// console.log(temp);

// let a1 = [101, 102, 103, 104, 105];

// console.log("a1 : ", a1);

// function MyArray() {
//   Object.defineProperty(this, "length", {
//     enumerable: false,
//     writable: true
//   }); //which object; // which property //what are those details

//   for (let i = 0; i < arguments.length; i++) {
//     this[i] = arguments[i];
//   }
//   this.length = arguments.length;
// }

// // push;
// MyArray.prototype.push = function (elem) {
//   let index = this.length; // 5
//   this[index] = elem; //
//   this.length++;
// };

// // pop;
// MyArray.prototype.pop = function () {
//   let index = this.length - 1;
//   let poppedElem = this[index];
//   delete this[index]; //removing the last elem;
//   this.length--;
//   return poppedElem; // return the popped elem;
// };

// let a2 = new MyArray(201, 202, 203, 204, 205);
// a2.push(206);
// // console.log("a2", a2);
// // a2.push(207);
// a2.pop();
// console.log("a2", a2);
