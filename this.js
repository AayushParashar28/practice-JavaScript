console.log(this)

const obj = {
    a: 10,
    b: function () {
        console.log(this)
    }
}

obj.b()


const obj2 = {
    a: 10,
    b: function () {
        const y = () => {
            console.log(this)
        }
        y()
    }
}

obj2.b()