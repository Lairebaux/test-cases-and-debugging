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
  "bo bonjour soir",
  "one two fve",
  "oneoneone fve two",
  "un deuxx cinqq trois",
  ""
]

let outputs = [
  "bonjour",
  "fve",
  "oneoneone",
  "trois",
  ""
]

/*
Make this function return the longest word in the input string. 
If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

Example
  f("hey hello morning") returns "morning"

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/
function f(str) {
  if (str === "") {
    return ""
  }
  let words = str.split(" ")
  let str_sorts = words.sort((a, b) => a.length - b.length)
  return str_sorts.slice(-1)[0]
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual)
}

for (i = 0; i < 5; i++) {
  runTest(i)
}
console.log("All tests passed for " + __filename)