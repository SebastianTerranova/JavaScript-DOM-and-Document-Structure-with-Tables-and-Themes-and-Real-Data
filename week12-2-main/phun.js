function arrayTest1(){
    var myClasses = ["CSC102", "RBT131", "RBT211", "SPT346"];
    console.log(myClasses[1]);
    console.log(myClasses.length);
    myClasses[1] = "CSC230";
    for(var i = 0; i < myClasses.length; i++){
        console.log(myClasses[i]);
    }

}

function stackPhun(){
    let myStack = [];
    myStack.push("first item");
    myStack.push("second item");
    myStack.push("third item");
    for(var i = 0; i < myStack.length; i++){
        console.log(myStack[i]);
    }
    myStack.pop();
    console.log(myStack);
}