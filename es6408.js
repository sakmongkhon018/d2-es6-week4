//Outer function
function greet(name) {
    //inner function
    function disPlayName() {
        console.log('Hi ${name}')

    }
    //disPlayName()
    //returning function
    return disPlayName
}
//greet('Mark')
const gl = greet('Mark')
g1()