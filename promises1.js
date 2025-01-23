const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("run1"),1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("run2"),5000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("run3"),10000)
})

Promise.all([p1,p2,p3])
.then((result) => console.log(result))
.catch((error) => console.log(error))