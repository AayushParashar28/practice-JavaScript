console.log("Start")

const radius = [5, 7, 8, 10]

const area = function(radius){
    return Math.PI * radius * radius
}

const diameter = function(radius){
    return radius * 2
}

const circumference = function(radius){
    return Math.PI * diameter(radius)
}

const calculate = function (radius, logic) {
    let output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(radius.map(area))

console.log("end")
console.log(calculate(radius, area))