console.log("hello world kyse ho aap...")

var a = 4;
var b = 23;
var c = "prathik";
// var 55a = "subham"; //not allowed
// var is global scope
// let is local/block scope

console.log(a + b);
console.log(typeof a, typeof b, typeof c);

// constant are same throught the program we cannot modify its value
// const a1 = 6;
// a1 = a1 + 1; this is not allowed 

// primitive data types and object
// null number string symbol undefined boolean bigint 

let x = "prathik bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

//object :  key value pairs
let o = {
    name : "prathik",
    "job role" : "SDE",
    "is handsome" : true
};

o.salary = "had-se-zada"
console.log(o);