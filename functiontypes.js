//Anonymous function
// A function without any name is known as Anonymous function. It can be declared with a value like this

var add = function (params1, params2) {
    let sum = params1 + params2
    console.log(sum)
}

add(10, 20)

//Function Statement 
// A function statement is a function that is declared with the function keyword. It can be declared with
// a value like this
function ad(params1, params2) {
    let sum = params1 + params2
    console.log(sum)
}

ad(10, 30)

//function expression
// A function expression is a function that is declared with the function keyword but it is assigned to a
// variable like this
var sum = function () {
    let sum = 10 + 20
    console.log(sum)
}
sum();

//Named function expression
// A function expression that has a name is known as named function expression. It can be declared with
// a value like this
var sum = function sum() {
    let sum = 10 + 80
    console.log(sum)
}
sum()

