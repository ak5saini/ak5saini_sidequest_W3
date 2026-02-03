function drawHelp() {
  drawWorld();

  fill(60, 20, 40);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("you help gather the letters.", width / 2, 130);

  textSize(18);
  text("they smile and say thank you.", width / 2, 165);

  // simple heart (easy + readable)
  fill(255, 90, 160);
  noStroke();
  ellipse(width / 2 - 15, 300, 30, 30);
  ellipse(width / 2 + 15, 300, 30, 30);
  triangle(width / 2 - 32, 308, width / 2 + 32, 308, width / 2, 350);

  // continue button
  fill(255);
  stroke(180, 60, 120);
  rect(width / 2 - 110, 430, 220, 60, 10);

  noStroke();
  fill(60, 20, 40);
  textSize(18);
  text("continue", width / 2, 460);
}

function helpMousePressed() {
  if (
    mouseX > width / 2 - 110 &&
    mouseX < width / 2 + 110 &&
    mouseY > 430 &&
    mouseY < 490
  ) {
    screen = "ending";
  }
}
