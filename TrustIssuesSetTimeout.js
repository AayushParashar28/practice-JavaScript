console.log("Start")

function cb(){
    console.log("Callback Hello")
}
cb()

setTimeout(function cb() {
    console.log("CallBack")
}, 0);

console.log("End")

let startDate = new Date().getTime()
let endDate = startDate
while(endDate < startDate + 1000 ){
   endDate = new Date().getTime()
}

console.log("While Expires")