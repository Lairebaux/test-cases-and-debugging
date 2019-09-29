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
// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["python", 0],
  ["escape", 1],
  [5, "error"],
  ["devoir", 5],
  ["bonjour", 5],
  ["walking outside", 6],
  ["septembre", 3],
]

let outputs = [
  "o", 
  "p", 
  "s", 
  undefined, 
  "r", 
  "u", 
  "g", 
  "t"
]

/*
Make this function return the letter at the specified position in the string. 
If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
  words = arr[0]
  idx = arr[1]
  if (typeof words !== "string" && typeof idx !== "number"){
    return undefined
  }
  return words[idx]
}


function runTest(i) {
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual)
}

for (let i = 0; i < inputs.length; i++) {
  runTest(i)  
}
console.log("All tests passed for " + __filename)
