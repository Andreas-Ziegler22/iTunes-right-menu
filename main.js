// 09/01/2020 I found a better solution

//from here---->
// document
//   .getElementsByClassName("extern")
//   .addEventListener("mouseover", mouseOver);
// console.log("extern");
// document
//   .getElementsByClassName("extern")
//   .addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementsByClassName("extern").style.visibility = "visible";
// }
// function mouseOut() {
//   document.getElementsByClassName("extern").style.visibility = "visible";
// }
// to here--->
//why does  not works

// function openTab() {
//   let element = document.querySelector(".extern");
//   if ((element.style.visibility = "hidden")) {
//     element.style.visibility = "visible";
//     console.log(openTab(), "onMauseOver");
//   } else {
//     element.style.visibility = "hidden";
//     console.log(openTab(), "onMauseOut");
//   }
//   console.log("element");
// }
// //that 2 functions works but I would like to the tab be fixed and hovered

// function openTab() {
//   document.querySelector(".extern").style.visibility = "visible";
// }
// function closeTab() {
//   document.querySelector(".extern").style.visibility = "hidden";
// }

//  new try  04/03/2020

// document.addEventListener("mouseover", mouseOver);
// document.addEventListener("mouseout", mouseOut);

// never forget to console.log everything if have a bug

document
  .getElementById("openCloseTab")
  .addEventListener("mouseover", mouseOver);
document.getElementById("openCloseTab").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementsByClassName("extern")[0].style.visibility = "visible";
}

function mouseOut() {
  document.getElementsByClassName("extern")[0].style.visibility = "hidden";
}
