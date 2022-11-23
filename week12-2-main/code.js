function countDownTimer() {
    //countdownTimer will go from 50 to 0 by increments of 5
    console.log("countDownTimer() started");
    var currTime = 50;
    var sum = 0;
    document.getElementById("countDis").innerHTML = currTime + " seconds";
    //45 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 5000);
    //40 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 10000);
    //35 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 15000);
    //30 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 20000);
    //25 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 25000);
    //20 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 30000);
    //15 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 35000);
    //10 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 40000);
    //5 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 45000);
    //blastoff display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = "Blastoff";
    }, 50000);
}

//improving the countdown timer in 1/6 of the code
function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");
    var currTime = 50;
    for(var i=0; i <= 10; i++){
        setTimeout(function(){
            console.log(currTime);
            document.getElementById("countDis").innerHTML = currTime + " seconds";
            if(currTime == 0){
                document.getElementById("countDis").innerHTML = "Blastoff";
            }
            currTime = currTime - 5;
        }, i * 5000);
    }
}

//improving the countdown timer based on Fleet Admiral's Request
//to have a warning at half the time
function chgBtrCountdownTimer(){
    console.log("chgbtrCountdownTimer() started");
    var currTime = 50;
    var ogCurrTime = currTime;
    for(var i=0; i <= 10; i++){
        setTimeout(function(){
            console.log(currTime);
            if(currTime == 0){
                //when we finish counting down
                document.getElementById("countDis").innerHTML = "Blastoff";
            } else if (currTime < 0.5*ogCurrTime){
                //less than 1/2 left
                document.getElementById("countDis").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime + " seconds";
            } else {
                //at the beginning
                document.getElementById("countDis").innerHTML = currTime + " seconds";
            }
            currTime = currTime - 5;
        }, i * 5000);
    }


}

//craps

function playCraps(){
    //troubleshooting playCraps() has started
    console.log("playCraps() started")

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6*Math.random());
    die2 = Math.ceil(6*Math.random());

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "Die 1 is " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 is " + die2;
    document.getElementById("gameRes").innerHTML = "Game Result is " + (sum = die1 + die2);

    //check if craps
    //check if win
    //check if tie
    if (sum == 7 || sum == 11){
        console.log("you lose");
        document.getElementById("gameRes").innerHTML = "You didn't win, try again.";
    } else if (die1%2 == 0 && die1 == die2){
        console.log("you win");
        document.getElementById("gameRes").innerHTML = "You win, try again.";
    } else {
        console.log("you tie");
        document.getElementById("gameRes").innerHTML = "You didn't win or lose, try again.";
    }
}

function startFun(){
    console.log("startFun() has started");
    //disable start button
    document.getElementById("startButton").disabled = true;
    //enable (disable!) stop button\
    document.getElementById("stopButton").disabled = false;

    document.getElementById("dataTable").rows["seconds"].innerHTML = "reading data";

    //run updateDisplay()
    timer = setInterval(updateDisplay, time_interval);
}

function stopFun(){
    console.log("stopFun() has started");
    //disable stop button
    document.getElementById("stopButton").disabled = true;
    //enable (disable!) start button
    document.getElementById("startButton").disabled = false;

    clearInterval(timer);
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile){
    //defines sound as audio
    this.sound = document.createElement("audio");
    //uses this file as source
    this.sound.src = srcFile;
    //loads audio file into memory
    this.sound.setAttribute("preload", "audio");
    //controls won't show up when audio is played
    this.sound.setAttribute("controls", "none");
    //makes sure only audio plays
    this.sound.style.display = "none";
    //confirms changes
    document.body.appendChild(this.sound);
    //plays sound
    this.play = function(){
        this.sound.play();
    }
    //pauses sound
    this.stop = function(){
        this.sound.pause();
    }    
}

function playBowie(){
    console.log("playBowie() started");
    mySound2 = new sound("David-Bowie-Space-Oddity.mp3");
    mySound2.play();
}