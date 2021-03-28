function toggleMobileNavbar() {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
        x.className += " mobile";
    } else {
        x.className = "navbar";
    }
}

// Show the page as soon as it is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        document.body.style.opacity = 1;
    }, 50)
})