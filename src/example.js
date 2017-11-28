//PUre Function
// Given the same input, returns the same output
function checkAge(age) {
    let minimum = 18;
    return age >= minimum // FALSE
}
checkAge(16);


//IMPURE FUNCTION
// Given the same input, we can't be sure the result it will not change
var minimum = 15;
function checkAge(age) {
    return age >= minimum // IT DEPENDS WHAT MINIMUM value is
}
checkAge(16);


// 3 pricniples of Redux
// 1. single source of truth
// the satte of your whole application is tored in an objecy tree within a single store
// 2. State is read-ONly
// The only way to chnage the state is to eit an ACtion
// 3. Changes are made with Pure Functions

// Immutability of the State
// 1. When making Operations with Arrays:
// DO not use mutable methods: push() or splice(), instead use: concat(), slice() or ...spread operator
// 2. When making operations with OBjects Use: Object.Asiign() or ...spread Operator
