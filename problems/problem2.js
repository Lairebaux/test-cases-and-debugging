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
    "abc", "job", "x1x", "eiou", "Rui",

]

let outputs = [
    "c", "b", "x", "u", "i"
]

// Make this function return the last letter of the string that is passed to it. 
// If the string does not have a last letter, return undefined
function f(x) {
    if (typeof x === "string" && x.length > 0){
        return x.slice(-1);
    }
    return undefined;
}

function runTest(i) {
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual)
}

for (let i = 0; i < inputs.length; i++)
    runTest(i);

console.log("All tests passed for " + __filename)