

function x() {
    var s = 8
    function y(){
        console.log(s);
    }
    y();
}
x();


function z(){
    var y = 6
    return function x(){
        console.log(y);
    }
}

var a = z()
console.log(a)



function z(){
    for(var i = 0 ; i < 10 ; i++){
        setTimeout(function(){
            console.log(i);
        },i*1000)
    }
}