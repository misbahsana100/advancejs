
//1.  write a function which returns array. call the function and destructure array values and print the value

// let Name = ["MIshi", "alia", "Ani"];
// const [a, b, c, d, ...f] = Name;

// function personName(a) {
// console.log(Name[1]);
// console.log(Name[2]);
// console.log(Name);

// }
// personName(a);

// 2.Make a car object with model, year, color. display all the values by destructuring


// const carData = {
//     carName : "XLI",
//     carModel: 2018,
//     carColor: "Black"

// }
// //data destructuring:
// let { carName, carModel, carColor} = carData;
// console.log(`My car name is ${carName}.
//  car Model is ${carModel}.`);

// 3.use three variable name, greeting and display value using template literals

// let Name = "Uzma"
// let Rollno= 22
// let Class ="second year"

// console.log(`Name:${Name} 
// RollNo:${Rollno} 
// Class:${Class} 
// `);


//4. use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables and all remaining in one element as an array

// let x, y, z, rest;
// [x, y, z] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(x);
// console.log(y);
// console.log(z);

// [x, y, z, ...rest] =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rest);
// 5.if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display " car speed is moderate" and if greater than 120 display "car speed is fast"

let carSpeed = prompt("enter");

if(carSpeed < 80){
    console.log("Car speed is Slow");
}

if(carSpeed > 80 && carSpeed < 120 ){
        console.log("Car speed is Moderate");
}
if(carSpeed> 120 ){
    console.log("Car speed is fast");
}