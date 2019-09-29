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
// we need 7 test cases. I've provided 2.
let inputs = [
  ["str", "list"],
  [123456],
  [-10, "xxx"],
  [7, 3],
  [100, 100],
  [-150, 25],
  [0, 9],

]

let outputs = [
  undefined,
  undefined,
  undefined,
  10,
  200,
  -125,
  9
]

/*
Make this function return the sum of the two numbers that are passed to it. 
If the input array length is not 2, or if anything other than numbers are passed, return undefined.
*/


function f(x) {
  if (
    x.length !== 2 ||
    typeof x[0] !== "number" ||
    typeof x[1] !== "number") {
    return undefined
  }
  return x[0] + x[1];

}



function runTest(i) {
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual)
}


for (i = 0; i < inputs.length; i++) {
  runTest(i)
};

console.log("All tests passed for " + __filename)