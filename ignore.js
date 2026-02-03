function drawIgnore() {
  drawWorld();

  fill(60, 20, 40);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("you keep walking.", width / 2, 130);

  textSize(18);
  text("you wonder if you should have helped.", width / 2, 165);

  // simple cloud
  noStroke();
  fill(255, 240, 250);
  ellipse(width / 2 - 30, 300, 55, 35);
  ellipse(width / 2 + 10, 290, 65, 40);
  ellipse(width / 2 + 45, 300, 55, 35);

  // continue button
  fill(255);
  stroke(180, 60, 120);
  rect(width / 2 - 110, 430, 220, 60, 10);

  noStroke();
  fill(60, 20, 40);
  textSize(18);
  text("continue", width / 2, 460);
}

function ignoreMousePressed() {
  if (
    mouseX > width / 2 - 110 &&
    mouseX < width / 2 + 110 &&
    mouseY > 430 &&
    mouseY < 490
  ) {
    screen = "ending";
  }
}
