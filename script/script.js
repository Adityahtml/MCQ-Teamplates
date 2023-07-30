var header = document.querySelector("#stickyHeader");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

function collapseMenu(){
    var MenuActive = document.querySelector(".technologyList-wrapper");
    MenuActive.classList.toggle("menuActive");
}