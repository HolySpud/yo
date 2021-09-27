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

let _ = undefined

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dialogue(text, size = "15px", font = "Arial", x, y) {
 let dialogText = "" 
 let strArr = text.split("")
 for (let i = 0; i < strArr.length; i++) {
	dialogText += strArr[i]
	createText(`${size} ${font}`, dialogText, x, y)
	await sleep(500)
 }

}

async function battleDialog (textArr, size = "15px", font = "Arial", x1, y1, x2, y2) {
	for (let i = 0; i < textArr.length; i++) {
		if (i % 2 === 0) {
			dialogue(textArr[i], size, font, x1, y1)
		} else {
			dialogue(textArr[i], size, font, x2, y2)
		}
			ctx.clearRect(0, 0, cnv.width, cnv.height)
		await sleep(500 * textArr.length)
	}
}

let textArr = ["hi", "hello", "no u", "why", "why u", 'oh no', 'ida' ]
battleDialog(textArr, _, _, 0, 30, 100, 30)


