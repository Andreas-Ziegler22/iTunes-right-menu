// window.alert("works");

//why does works

function openTab() {
  let element = document.querySelector(".extern");
  if ((element.style.visibility = "hidden")) {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
  console.log("element");
}

// that 2 functions works but I would like to the tab be fixed and hovered

// function openTab() {
//   document.querySelector(".extern").style.visibility = "visible";
// }
// function closeTab() {
//   document.querySelector(".extern").style.visibility = "hidden";
// }
