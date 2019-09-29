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
// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["mult", 20, 10],
  ["asdf",],
  [0, 0, 0],
  ["add", 0, 0]
]

let outputs = [
  30, 
  undefined, 
  200,
  undefined,
  undefined,
  0
]

/*
The function takes an array. 
The array has length 3. The first element of the array is a string that represents an operation.
If the operation is "add", return the sum of the two other elements of the array. 
"sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if (arr[0] === "add") {
    return arr.slice(1, 3).reduce((x, y) => {
      return x + y
    })
  } else if (arr[0] === "sub") {
    return arr.slice(1, 3).reduce((x, y) => {
      return x - y
    })
  } else if (arr[0] === "mult") {
    return arr.slice(1, 3).reduce((x, y) => {
      return x * y
    })
  } else {
    return undefined
  }
}


function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual)
}

for (i = 0; i < 6; i++) {
  runTest(i)
}
console.log("All tests passed for " + __filename)


