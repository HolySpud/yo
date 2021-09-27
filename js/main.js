let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

let lvl1El = document.getElementById("lvl1");
let lvl2El = document.getElementById("lvl2");

let warEl = document.getElementById("war");
let mageEl = document.getElementById("mage");
let thfEl = document.getElementById("thf");
let archEl = document.getElementById("arch");

let nxtBtn = document.getElementById("nxt");
let bckBtn = document.getElementById("bck");

let sceneArray = [lvl1El, lvl2El];
let sceneNum = 0;

let charArray = [warEl, mageEl, thfEl, archEl];
let charNum = 0;

nxtBtn.addEventListener("click", sceneForward);
bckBtn.addEventListener("click", sceneBackward);

// requestAnimationFrame(draw);
// function draw() {
//   drawBackground(sceneArray[sceneNum]);
//   dialogue("lol");
//   requestAnimationFrame(draw);
// }

// function dialogue(text, delay) {
//   fill("white");
//   rect(
//     60,
//     cnv.height / 1.5,
//     cnv.width - 60 - 60,
//     cnv.height - cnv.height / 1.5 - 60,
//     "fill"
//   );

//   stroke("grey");
//   lineWidth(3);
//   rect(
//     60,
//     cnv.height / 1.5,
//     cnv.width - 60 - 60,
//     cnv.height - cnv.height / 1.5 - 60,
//     "stroke"
//   );

// }

function dialogue(text, x, y) {
  let xPos = x;
  let yPos = y;
  let splitText = text.split("");
  let splitNum = 0;
  let splitSum = "";
  let writeText = setInterval(function () {
    if (splitNum <= splitText.length) {
      createText("30px Arial", splitSum + splitText[splitNum], xPos, yPos);
      splitNum++;
      xPos += 13;
    } else {
      clearInterval(writeText);
    }
  }, 1000);
}

dialogue("hello", 30, 30);
