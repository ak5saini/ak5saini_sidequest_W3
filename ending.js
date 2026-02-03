function drawEnding() {
  drawWorld();

  fill(60, 20, 40);
  textAlign(CENTER, CENTER);

  if (choice === "help") {
    textSize(26);
    text("ending: kindness spreads", width / 2, 130);
    textSize(18);
    text("a small choice made someone’s day better.", width / 2, 165);
  } else {
    textSize(26);
    text("ending: a missed moment", width / 2, 130);
    textSize(18);
    text("next time, you can choose kindness.", width / 2, 165);
  }

  // play again button
  fill(255);
  stroke(180, 60, 120);
  rect(width / 2 - 140, 430, 280, 60, 10);

  noStroke();
  fill(60, 20, 40);
  textSize(18);
  text("play again", width / 2, 460);
}

function endingMousePressed() {
  if (
    mouseX > width / 2 - 140 &&
    mouseX < width / 2 + 140 &&
    mouseY > 430 &&
    mouseY < 490
  ) {
    choice = "";
    screen = "start";
  }
}
