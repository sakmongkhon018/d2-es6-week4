//Outer function
function greet() {
    let name ="Jhon"
    //Inner function
    function disPlayName(){
        //Closure: accessing name variable
            console.log('Hi: ${name}')
    }
   // disPlayName()
   return disPlayName
}

//greet()
const g1 = greet()
g1()