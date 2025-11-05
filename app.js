let scrollBar = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")


scrollBar.addEventListener("wheel", (evt) => {

    evt.preventDefault();
    scrollBar.scrollLeft += evt.deltaY;
    scrollBar.style.scrollBehaviour = "auto";

});

nextBtn.addEventListener("click", () => {
    scrollBar.style.scrollBehaviour = "smooth";
    scrollBar.scrollLeft += 900;

});

backBtn.addEventListener("click", () => {
    scrollBar.style.scrollBehaviour = "smooth";
    scrollBar.scrollLeft -= 900;

});




