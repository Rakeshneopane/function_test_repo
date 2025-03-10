//Q01 Name printing
// function fullName(firstName,lastName){
//     return `${firstName} ${lastName}`;
// }
// console.log(fullName("Rakesh","Neopane"));

//add two numbers
// function addNumbers(numOne,numTwo){
//     sum = numOne + numTwo;
//     return sum;
// }
// console.log(addNumbers(25,53));

// area of rectangle
// function areaOfRectangle(width,length){
//     return width*length;
// }
// console.log(areaOfRectangle(25,10))

//perimeter of rectangle
// function  perimeterOfRectangle(length,width){
//     return 2*(length + width);
// }
// console.log(perimeterOfRectangle(6,10))

//vol of prism
// function volumeOfRectPrism(len,hei,wid){
//     return len*hei*wid;
// }
// console.log(volumeOfRectPrism(10,20,3))

// area of circle
// function circumOfCircle(r){
//     return Math.PI*2*r;
// }
// console.log(circumOfCircle(5));

//density
// function density(m,v){
//     return m/v
// }
// console.log(density(5,10));

//speed of an object
// function speedObject(time,distance){
//     return distance/time;
// }
// console.log(speedObject(2,30));

//calculate weight
// function convertCelsiusToFahrenheit(celsius){
//     return (celsius*(9/5))+32;
// }
// console.log(convertCelsiusToFahrenheit(1));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// function checkBmi(weight,height){
//     let bmi = weight/Math.pow(height,2);
//     if(bmi<18.5)
//         return "underweight";
//     else if(bmi>=18.5 && bmi<=24.9)
//         return "Normal weight";
//     else if(bmi>=25 && bmi<=29.9)
//         return "Overweight";
//     else if(bmi>=30)
//         return "obese";
// }

// console.log(checkBmi(48,1.6));

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// function checkSeason(month){
//     if(month == "feb" || month == "mar")
//         return "Spring";
//     else if(month == "apr" || month == "may" || month == "jun")
//         return "Summer";
//     else if(month == "jul" || month == "aug" || month == "sep")
//         return "monsoon";
//     else if(month == "oct" || month == "nov")
//         return "autumn";
//     else if(month == "dec" || month == "jan")
//         return "winter";
// }
// console.log(checkSeason("nov"));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// function findMax(one,two,three){
//     return Math.max(one,two,three);
// }
// console.log(findMax(-1,-56,-7));

//linear equation
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function solveLinEquation(a,b,c,x,y){
//     return a*x + b*y - c;
// }
// const val = solveLinEquation(2,3,12,4.2,1.2)
// if(val === 0){
//     console.log("true");
// }
// else
//     console.log("false");

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// function solveQuadEquation(a,b,c){
//     const discriminant = b*b - 4*a*c;
//     if(discriminant > 0){
//         const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return `${root1} and ${root2}`;
//     }
//     else if(discriminant === 0){
//         const root = -b / (2 * a);
//         return `The root is ${root}`;
//     }
//     else {
//         return `No value`;
//     }
// }
// let x = solveQuadEquation(1,1,-1);
// console.log(x)

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// function printArray(array){
//     if(!Array.isArray(array)){   // is needed to check for whether input is array or not. 
//         console.log("Error: Please provide an array.");
//         return;
//     }
//     else 
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         console.log(element)
//     }
// }
// printArray("Harry",2,"gjshg");

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// function showDateTime(dd,mm,yyyy,hh,mn){
//     console.log (`${dd < 10 ? '0' + dd:dd}/${mm  < 10 ? '0' + mm:mm}/${yyyy} ${hh < 10 ? '0' +hh:hh}:${mn < 10 ? '0' +mn:mn}`);
// }
// showDateTime(8,1,2020,4,8)
//Declare a function name swapValues. This function swaps value of x to y.
// function swapValues(x,y){
//     x = x + y;
//     y = x - y;
//     x = x - y;
//     return [x,y];
// }
// console.log(swapValues(10,5));
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// function reverseArray(arr){
//     let array = Array();
//     for( let i = 0; i < arr.length; i++){
        
//         array.push(arr[arr.length-1-i]);
//     }
//     return array;
// }
// console.log(reverseArray(["rakesh",1,3,"fgas",{x:3,b:7}]))
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// function capitalizeArray(arr){
//     for(let i = 0; i < arr.length-1;i++){
//         arr[i] = arr[i].toUpperCase();
//     }
//     return arr;
// }
// console.log(capitalizeArray(["fhgasfh","afsydtfas","jasgh"]));
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// 
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// let arr = Array();
// function addItem(item){
        
//         arr.push(item);
//         return arr;
//     }
// console.log(addItem([1,2,3,4]));
// console.log(addItem("gajh"));
// console.log(addItem({a:"khkj",b:2}));

// function removeItem(index){
//     if(index>=0 && index< arr.length){
//         arr.splice(index,1);
//     }
//     else{
//         return "Invalid code";
//     }
// }

// console.log(removeItem(3));
// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// only add odd numbers
// function sumOfNumbers(num){
//     sum = 0;
//     for(let i = 1; i <= num;i++ ){
//         if(i % 2!=0)
//             sum += i;
//         else
//             continue;
        
//     }
//     return sum;
// }
// console.log(sumOfNumbers(100));
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// function evensAndOdds(num){
//     let counte = 0,counto = 0;

//         for(let element = 0; element <= num; element++) {
//             if(element % 2 == 0){
//                 counte++;
//             }
//             else if(element % 2 != 0){
//                 counto++;
//             }
//     }
//     return {odd : counto, even : counte};
// }
// console.log(evensAndOdds(13));
// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Create an empty object called dog

