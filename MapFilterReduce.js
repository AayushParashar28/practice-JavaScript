//map
const arr = [ 2, 4 , 18 , 7 , 8 , 10 ]

function double(x){
    return x * 2
}

function triple(x){
    return x * x * x
}

const output = arr.map(double)
const output2 = arr.map(triple)
console.log(output)
console.log(output2)


//filter

function filter(x){
   return x%2==0
}

const ans = arr.filter(filter)
console.log(ans)

//reduce
function red(acc,curr){
    return acc + curr
}

const an = arr.reduce(red,0)
console.log(an)

//findmax using reduce

function max1(acc, curr){
    let max = 0
    if(acc > max){
        max = acc
    }
    if(curr > max){
        max = curr
    }
    return max
}

const max = arr.reduce(max1,0)
console.log(max)