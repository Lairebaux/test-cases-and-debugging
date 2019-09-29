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
    "hello",
    "how are you",
    "1 2 3 4",
    "moi&toi",
    "   7"
]

let outputs = [
    "olleh",
    "uoy era woh",
    "4 3 2 1",
    "iot&iom",
    "7   "
]

/*
Make this function return the input string, reversed. 
For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use at least one for loop for this exercise.

HINTS: 
 - Create an empty array
 - Add each character of the string to that empty array (use the array method push). 
 You'll need to use a for loop
 - Create another empty array
 - Add each character of the string to new empty array in reverse order
 - Convert that array back to a string (use the join array method)
 
*/
function f(str) {
    ans = ""
    for (letter of str) {
        ans = letter + ans
    }
    return ans
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual)
}

for (i = 0; i < inputs.length; i++) {
    runTest(i)
}
console.log("All tests passed for " + __filename)