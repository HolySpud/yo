function drawBackground(img) {
  ctx.drawImage(img, 0, 0, cnv.width, cnv.height);
}

function sceneForward() {
  sceneNum++;
  console.log(sceneNum);
}

function sceneBackward() {
  if (sceneNum === 0) {
  } else {
    sceneNum--;
  }
}

function drawChar() {}

function scale(scl) {
  ctx.scale(scl, scl);
}

function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

function fill(style) {
  ctx.fillStyle = style;
}

function stroke(style) {
  ctx.strokeStyle = style;
}

function lineWidth(width) {
  ctx.lineWidth = width;
}

function createText(sizeFont, text, x, y) {
  ctx.font = sizeFont;
  ctx.fillText(text, x, y);
}
