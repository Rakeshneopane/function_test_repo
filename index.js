// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];

// console.log(itCompanies.splice(0,7));
// console.log(itCompanies);
// console.log(itCompanies.shift());
// console.log(itCompanies);
// itCompanies.includes("HCL");
//     console.log("NOt found");
// itCompanies.includes("IBM");
//     console.log(itCompanies[4]);
// itCompanies.forEach(e => {
    
//     console.log(e.toUpperCase());
// });
// console.log(itCompanies.toString());
// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());

//prime number till 100
// let end = 100;
// let start = 2;
// for(let num = start; num <= end; num++){
//     let isprime = true;
//     // if(i<start){
//     //     isprime=false;
//     // }
//     for( let i = 2; i<=Math.sqrt(num); i++){
//         if(num%i === 0){
//             isprime =false;
//         break;
//         }
//     }
//     if(isprime)
//         console.log(num);
// }

//sum of all the numbers
// let num =100,sumO = 0, sumE = 0, sumarr = [];
// for(let i = 0; i <= num; i++){
//     if(i%2 === 0)
//         sumE += i;
//     else
//         sumO += i;
// }
// console.log(sumO,sumE);
// sumarr.push(sumO);
// sumarr.push(sumE);
// console.log(sumarr);

// random numbers

let num = 0; 
const arr = new Array(5);
arr.push(Math.floor((Math.random())*5)+1);
for(let i = 0; i < 5; i++){
    num = (Math.floor((Math.random())*i)+1);
    if(arr[i]!==num){
        arr.push(num);
    }
}
console.log(arr);