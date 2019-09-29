let eq = (lhs, rhs) => {
  if (Array.isArray(lhs)) {
    for (let i = 0; i < lhs.length; i++) {
      if (lhs[i] !== rhs[i]) return false
    }
    return true
  }
  return lhs === rhs

}
let verifyEquals = (lhs, rhs) => {
  if (!eq(lhs, rhs)) throw new Error("The expected output doesn't match the actual output")
}
// we need 5 test cases. 
let inputs = [
  [2, 7],
  ["1", "3"],
  [1, 3],
  [0, 1000],
  [1, 99],
]

let outputs = [
  14, undefined, 3, 0, 99
]

/*
The input of the function is an array.
Make this function return the product of the two numbers in the array. 
If the input array length is not 2, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  if (arr.length !== 2){
    return undefined
  }
  if (typeof arr[0] !== "number" && typeof arr[1] !== "number") {
    return undefined
  }
  return arr.reduce((a, b) => {
    return a * b
  })
}



function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual)
}

for (let i = 0; i < inputs.length; i++)
  runTest(i);
console.log("All tests passed for " + __filename)