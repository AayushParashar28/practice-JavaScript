function aayush(a) {
    console.log("Aayush Parashar")
    a()
    function ap(v) {

        v(function s(b) {
            console.log("Hello How are you ?")
            b()
        })

        console.log("Harsh Parashar")
    }
    ap(function h(s) {
        s(function n() {
            console.log("I am good , thanks for asking!")
        })
        console.log("Let's Have a Disscussion")
    })
}

aayush(
    function a() {
        console.log("HELLO")
    }
)