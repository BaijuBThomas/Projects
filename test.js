const names = ['atul','kavya','sandhiya'];


function toUpperC(listNames){
    const upCase = [];
    for(let i = 0;i < listNames.length;i++){
        upCase.push(listNames[i].toUpperCase());
    }
    return upCase;
}


const na = toUpperC(names);

console.log(na);
console.log(names);

// // const upCase = names.map(name => name.toUpperCase());

// const names = ['atul','kavya','sandhiya'];

// function toUpperCase(listOfName){
//     for(let i = 0;i < names.length;i++){
//         listOfName[i]=listOfName[i].toUpperCase();
// }
// return listOfName;
// }
// const na = toUpperCase(names);

// console.log(na);
// console.log(names);

