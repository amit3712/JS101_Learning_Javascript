//problem-1
let a= "luffy";
let name= "luffy"; // the variable name is self explanatory.

//problem-2
// There are some rules for creating a variable name

//1. the variable name cannot start with a number

// let 123=12 // we cannot start with a number.

let name1= "luffy";
let name1nam3= "goku";

//2. a variable cannot start with symbols.
//!@*? - we cannot start with them.

// there is one expection for two symbol
// $, _ --->

let $abc= "heelo";
let _abn= "luffy";

console.log($abc, _abn);

//problem-3

let age= 12;
let Age= "one";

// line 1 variable name is different from line 2 variable name
// (age is not same as Age because js is case sensitive)

//3. the variable name should be self explanatory.

//1 way.

let name1= "goku";
let name2="chichi";
let name3= "gohan";

//2 way.
let father_name= "goku";
let mother_name= "chichi";
let son_name = "gohan";

//4 you cannot use space between the variable.


//5 There are two ways of writting a variable name.

// camel case.
// eachword, expect the first word first letter will start with a captial letter..


let fatherName= "goku";
let masaiSchool= "ftweb26";

let myStudentCode= "123";


// snake case. 
// each word is separated by a underscore character is called snake case.

let father_name= "goku";
let my_student_code= "123";
let had_my_breakfast="yes";

//problem-4

let a= 5;
let b= 2;

// printing additon, subtraction, division , multplication.

console.log(a+b); // addition.
console.log(a-b); // sub.
console.log(a*b); // mutiplication.
console.log(a/b);// division.

//problem-5
console.log(10%2); // 0;

console.log(7%2); //1

console.log(6%123); //6;

console.log(2%3); //2;


console.log(56%10); //6

console.log(22 % 100); // 22


console.log(1 %100);  //1

//problem-6
let a= 3;
let b= 2;

//output
//sum is 5
//sub is 1
//mult is 6
//div is 1.5
//mod is 1


console.log("sum is",a+b);
console.log("sub is", (a-b));
console.log("div is", a/b);
console.log("mod is", a%b);

//problem-7
let a= 2;

let b= 3;

let c= 2;
// console.log(a**b);

console.log((a**b)**c);

//problem-8
// let a= 1;
// let b= 3;
// console.log(a+b); 
// console.log(typeof(a+b));


// let c= "goku";

// let e= "hi";

// console.log(c+e);
// console.log(typeof(c+e));


let a= 4;

let f= "hello";

console.log(a + f);
console.log(typeof(a+f));

