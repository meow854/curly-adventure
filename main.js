sketch= "";
timer= 0;
timecheck= "";
sketchguess= "";
correct= "";
score= 0;
sa= "w";

function setup() {
    canvas= createCanvas(280, 280);
    canvas.center();
    background("white");
}

arraydrawings= ['Crown', 'Grass', 'Drums', 'Swan', 'Nose', 'Paint Can', 'Grapes', 'Bottlecap', 'Feather', 'Diamond', 'Sailboat', 'Eraser'];
randomnum= Math.floor(Math.random() * arraydrawings.length + 1);
sketch= arraydrawings[randomnum];
console.log(ran);
document.getElementById("drawn").innerHTML= "Sketch To Be Drawn - " + sketch;

function draw() {
    checksketch();
    check();
}

function check() {
    if(sketchguess == sketch) {
        correct= "set";
        score= score + 10;
        document.getElementById("score").innerHTML= "Score: " + score;
    }
}

function cleancanvas() {
    canvas.background("white");
}

function checksketch() {
    if(sa == "w") {
        timer++;
        document.getElementById("timer").innerHTML= "Timer: " + timer;
        console.log(timer);
    }

    if(timer >= 500) {
        timer= 0;
        timecheck= "yay";
    }

    if(timecheck == "yay" || correct == "set") {
        timecheck= "";
        correct= "";
        cleancanvas();
    }
}