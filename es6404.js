//Regular Function
//function 



function printer() {
    console.log("Hp")
}
//High-Order Function(HoF)
//1.a function as an argu
function getCapture(camera) {
    //Invking the passed function
    camera()
}


getCapture(function(){
    console.log("Cannon")
})

function returnFunc() {
    console.log("hi")
}
returnFunc()()