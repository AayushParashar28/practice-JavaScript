// CallBack function theory
// 1. CallBack function is a function that takes another function as an argument
// 2. CallBack function is a function that returns another function
// 3. CallBack function is a function that takes another function as an argument and returns another
//    function that takes another function as an argument

function callback(n,m){
    console.log("Callback function is called");
    function x(n,m){
        console.log("Inner function is called");
        let sum = n + m 
        console.log("Sum of n and m is: ", sum);
    }
    x(n,m)
}

callback(4,5);
 
setTimeout(function(){
    console.log("This is a callback function");
},5000)

function y(z){
    console.log("y")
    z()
}

y(function z(){
    console.log("z")
})