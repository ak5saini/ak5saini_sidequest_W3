// game states
let screen = "start";

// saves the player's choice
let choice = "";

function setup() {
  createCanvas(900, 600);
}

function draw() {
  // pink background every screen
  background(255, 210, 230);

  if (screen === "start") {
    drawStart();
  } else if (screen === "choice") {
    drawChoice();
  } else if (screen === "help") {
    drawHelp();
  } else if (screen === "ignore") {
    drawIgnore();
  } else if (screen === "ending") {
    drawEnding();
  }
}

function mousePressed() {
  if (screen === "start") {
    startMousePressed();
  } else if (screen === "choice") {
    choiceMousePressed();
  } else if (screen === "help") {
    helpMousePressed();
  } else if (screen === "ignore") {
    ignoreMousePressed();
  } else if (screen === "ending") {
    endingMousePressed();
  }
}
