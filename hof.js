
// // function sum(x){
// //     return function(y){
// //         return function(z){
// //             return x + y + z;
// //         }
// //     }
// // }




// // console.log(sum(1)(5)(3));


// function multiply(x){
//     return function(y){
//         return function(z){
//             return x * y * z;
//         }
//     }
// }




// console.log(multiply(2)(4)(8));

// function filterNames(listOfNames, ch){
//     const result = [];

//     listOfNames.forEach(function(item,idx){
//         if(item.includes(ch)){
//             result.push(item);
//         }
//     });
//     return result;

// }

// const names = ['atul','kavya','sandhiya'];
// console.log(filterNames(names,'s'));

const ages = [32, 33, 16, 40];
console.log(ages);
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);