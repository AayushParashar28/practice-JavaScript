const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("run1"),4000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("run2"),5000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("run3"),10000)
})

async function handlePromise(){
    
    console.log("Hello World");
    const val = await p1;
    console.log(val);

    const val2 = await p2;
    console.log(val2);

    const val3 = await p3;
    console.log(val3);
}

handlePromise()