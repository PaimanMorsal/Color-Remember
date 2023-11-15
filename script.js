" use strict";
// press a key or click to start
window.addEventListener("click", ran_Num);
window.addEventListener("keydown", ran_Num);

var start = 0;
var level = 0;
// choose a number between 0-3
function ran_Num() {
  var fistPart = [];
  const random_number = Math.trunc(Math.random() * 4);
  fistPart.push(random_number);
  correctPart(fistPart[fistPart.length - 1]);
  exitpart();
  secondPart = [];
}
//to switch between colors
function correctPart(number) {
  var green = document.getElementById("green-box");
  var yellow = document.getElementById("yellow-box");
  var blue = document.getElementById("blue-box");
  var red = document.getElementById("red-box");
  var y = document.getElementById("y");
  var r = document.getElementById("r");
  var g = document.getElementById("g");
  var b = document.getElementById("b");
  var l = document.getElementById("l");
  var audio = [y, r, g, b, l];
  switch (number) {
    case 0:
      red.classList.add("select");
      setTimeout(() => {
        red.classList.remove("select");
      }, 200);
      r.play();
      break;
    case 1:
      blue.classList.add("select");
      setTimeout(() => {
        blue.classList.remove("select");
      }, 200);
      b.play();
      break;
    case 2:
      green.classList.add("select");
      setTimeout(() => {
        green.classList.remove("select");
      }, 200);
      g.play();
      break;
    case 3:
      yellow.classList.add("select");
      setTimeout(() => {
        yellow.classList.remove("select");
      }, 200);
      y.play();
      break;
  }
}
//to change level
function exitpart() {
  start++;
  document.getElementById("heading").textContent = `Level: ${start}`;
}

function m() {
  var secondPart = [];
  getId();
  switch (click) {
    case "green":
      secondPart.push(0);
      correctPart(0);
      break;
    case "red":
      secondPart.push(1);
      correctPart(1);
      break;
    case "red":
      secondPart.push(2);
      correctPart(2);
      break;
    case "blue":
      secondPart.push(3);
      correctPart(3);
      break;
  }
  final(secondPart.length - 1);
}
// to compare
function final(index) {
  if (secondPart[index] === fistPart[index]) {
    if (fistPart.length === secondPart.length) {
      setTimeout(function () {
        ran_Num();
      }, 1000);
    }
  } else {
    lost();
  }
}

// to access the user respond by clicking
function getId(btn) {
  btn.classList.add("user_respond");
  setTimeout(() => {
    btn.classList.remove("user_respond");
  }, 200);
  let btnid = btn.id;
  console.log(btnid);
}

// lost btn
function lost() {
  l.play();
  document.body.classList.add("lost");
  setTimeout(() => {
    document.body.classList.remove("lost");
  }, 200);
  let flex_container = document.getElementById("flex-container");
  flex_container.classList.add("lost");
  setTimeout(() => {
    let flex_container = document.getElementById("flex-container");
    flex_container.classList.remove("lost");
  }, 200);
  document.getElementById("heading").textContent =
    "Game Over, Press any Key to Restart";
}
// to change levels
function change_level() {
  let start = 0;
  start++;
  document.getElementById("heading").textContent = `Level: ${start}`;
}
