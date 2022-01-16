function toggleMobileNavbar() {
  var x = document.querySelector(".navbar");
  if (x.className === "navbar") {
    x.className += " mobile";
  } else {
    x.className = "navbar";
  }
}