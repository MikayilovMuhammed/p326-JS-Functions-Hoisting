// function test() {
//   // some codes
//   // console.log("Test");

//   return "Test";
// }

// test();

// test();
// const testFunc = function () {
//   return "Anonymous func";
// };

// console.log(testFunc());
// console.log(test());
// console.log(testFunc());

// const showStudentList = () => {
//   console.log("test 3");
// };

// showStudentList();

// function usefull() {}

// function outside(func) {
//   return func();
// }

// function outsideTwo() {
//   return function () {};
// }

// outside(usefull);

// document.querySelector("button").addEventListener("click", function () {
//   console.log("This is event");
// });

// var a; // Hoisted

// function test() {} // hoisted

// a = "test";

//______________________

// console.log(a);
// var a = "Test";

// console.log(a);
// // let a;

// // let a = "test";

// function test() {}

const personRovshen = {
  firstname: "Rovshan",
  lastname: "Khalilov",
  salary: 200,
};

const personElnur = {
  firstname: "Elnur",
  lastname: "Azizov",
  salary: 150,
};

const employees = [personRovshen, personElnur];

employees.forEach(function (employee) {
  console.log(employee);
});

// function forEachFunc(callback) {}
