// A function along with its lexical scope form a closure

function x() {
    var s = 8
    function y() {
        console.log(s);
    }
    y();
}
x();


function z() {
    var y = 6
    return function x() {
        console.log(y);
    }
}

var a = z()
a();



function s() {
    for (var i = 0; i < 10; i++) {
        function r(i) { 
            //calling function r with argument i because here i is in var without this function i will direclty print the i.
            setTimeout(function () {
                console.log(i);
            }, i * 1000)
        }
        r(i);
    }
}

s()
