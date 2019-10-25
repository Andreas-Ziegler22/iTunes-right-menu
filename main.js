// window.alert("works");

function openTab() {
  let element = document.querySelector(".extern");
  if ((element.style.visibility = "hidden")) {
    // element.style.display = "block";
    element.style.visibility = "visible";
  } else {
    // element.style.display = "none";
    element.style.visibility = "hidden";
  }
  console.log(openTab());
}
