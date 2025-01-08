function x() {
    var count = 0
    console.log(count)
    this.increment = function () {
        count += 1
        console.log(count)
    }

    this.decrement = function () {
        count -= 1
        console.log(count)
    }
}
// here we are calling the constructor function

var counter = new x()
counter.increment()
counter.increment()
counter.decrement()
//console.log(count) // here count is hidden in the closure of x function