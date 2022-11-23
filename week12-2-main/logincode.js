function checkCreds(){
    //collect the data
    var fstName = document.getElementById("fName").value;
    var lstName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = fstName + " " + lstName;
    //display the data
    console.log("the full name is " + fullName);
    console.log("the badge number is " + badgeNumb);
    var fullLength = fullName.length;
    console.log("The name length is " + fullLength);
    //check the inputs
    if(fullLength > 20 || fullLength < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid Name Entry, please try again";
    } else if (badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Entry, please try again";
    } else {
        alert("Access Granted, welcom " + fullName);
        location.replace("./UATSpace.html")
    }
}
