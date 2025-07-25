function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // ?
console.log(counter1()); // ?
console.log(counter1()); // ?


const c1 = createCounter();
const c2 = createCounter();

console.log(c1()); // ?
console.log(c2()); // ?
console.log(c1()); // ?
console.log(c2()); // ?

using for loop 
function loopClosureProblem() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("let i:", i);
    }, );
  }
}
loopClosureProblem();
