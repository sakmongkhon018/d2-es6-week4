//3.Fiest class function
function sayHello(){
    return function(){
        console.log("Hi")
    }
}
//1-Using a variable
//const messgae = sayHello();
//messgae()
//2-Using double parentheses
sayHello()()