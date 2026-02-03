function drawChoice() {
  drawWorld();

  // player
  drawPerson(width / 2 + 160, 390, 180, 60, 120);

  // stranger + dropped letters
  drawPerson(width / 2 - 220, 390, 255, 90, 160);
  drawLetters(width / 2 - 170, 450);

  fill(60, 20, 40);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("someone dropped their letters.", width / 2, 120);

  textSize(18);
  text("what do you do?", width / 2, 155);

  // help button
  fill(255);
  stroke(180, 60, 120);
  rect(170, 430, 240, 60, 10);

  // ignore button
  rect(490, 430, 240, 60, 10);

  noStroke();
  fill(60, 20, 40);
  textSize(16);
  text("help pick them up", 170 + 120, 460);
  text("walk past quietly", 490 + 120, 460);
}

function choiceMousePressed() {
  // help button area
  if (mouseX > 170 && mouseX < 410 && mouseY > 430 && mouseY < 490) {
    choice = "help";
    screen = "help";
  }

  // ignore button area
  if (mouseX > 490 && mouseX < 730 && mouseY > 430 && mouseY < 490) {
    choice = "ignore";
    screen = "ignore";
  }
}

function drawPerson(x, y, r, g, b) {
  // simple head + body
  noStroke();
  fill(r, g, b);
  ellipse(x, y - 40, 34, 34);
  rect(x - 16, y - 25, 32, 55, 10);
}

function drawLetters(x, y) {
  // little papers on the ground
  fill(255);
  stroke(180, 60, 120);
  rect(x, y, 18, 14);
  rect(x + 24, y + 10, 18, 14);
  rect(x + 48, y - 6, 18, 14);
}
