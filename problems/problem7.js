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
// we need 7 test cases. 
let inputs = [
    ["foo", 3],
    ["abs", -1],
    ["ab", 3],
    [3, "jilg]"],
    ["12345 ", 3]
]

let outputs = [
    "foofoofoo",
    "",
    "ababab",
    undefined,
    "12345 12345 12345 "
]

/*
The function input is an array as input. 
The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. 
If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // ""
*/
function f(arr) {
    if (typeof arr[0] !== "string" && typeof arr[1] !== "number"){
        return undefined
    } if (arr[1] <= 0){
        return ""
    }
    return arr[0].repeat(arr[1])

}

function runTest(i) {
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual)
}

for (i = 0; i < inputs.length; i++) {
    runTest(i)
}
console.log("All tests passed for " + __filename)