function drawStart() {
  drawWorld();

  fill(60, 20, 40);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("pink world", width / 2, 130);

  textSize(18);
  text("a small act of kindness", width / 2, 175);

  // simple start button
  fill(255);
  stroke(180, 60, 120);
  rect(width / 2 - 90, 420, 180, 60, 10);

  noStroke();
  fill(60, 20, 40);
  textSize(20);
  text("start", width / 2, 450);
}

function startMousePressed() {
  // check if click is inside the start button
  if (
    mouseX > width / 2 - 90 &&
    mouseX < width / 2 + 90 &&
    mouseY > 420 &&
    mouseY < 480
  ) {
    screen = "choice";
  }
}

function drawWorld() {
  // simple ground
  noStroke();
  fill(255, 170, 210);
  rect(0, 380, width, 220);

  // simple path
  fill(245, 135, 190);
  rect(width / 2 - 90, 380, 180, 220);

  // simple circles as decorations
  fill(255, 235, 245);
  ellipse(120, 120, 30, 30);
  ellipse(780, 160, 35, 35);
  ellipse(660, 110, 25, 25);
}
