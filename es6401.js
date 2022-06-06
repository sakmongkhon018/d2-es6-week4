//1.Declarating Regular Function
function ayAsign(){
    console.log("Welcome to Thailand")
    let sayHello = function (){
        console.log("Welcome to Thailand")
    }
    //2.Annonymous Fuction : 1.first class function
    //Can be assigned as a value to a variable
}
let sayHello = function (){
    return function()
    console.log("Welcome to Thailand")
}
//3.passed as an argument to other functions
function addName(callback,name){
    callback()
    console.log(messgae)
    console.log(name)
}
//Call Function
//sayAsign()
//sayHello()
addName(sayHello,"Mark Zakerber")

