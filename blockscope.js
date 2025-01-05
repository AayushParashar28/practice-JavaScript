let a = 0;
function get(num){
    a += num;
    console.log(a)
    let b = 6
    console.log(b)
}
get(2)
//console.log(b)
// it will print not defined because b is declared inside the function and is not accessible outside the function

var x = 27;

function name2(){
    let name1 = "Aayush"
    console.log(name1)
    function namecalled(){
        console.log(x)
        console.log(name1)
    }
}

name2()

console.log(x)