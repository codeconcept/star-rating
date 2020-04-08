const allStars = document.querySelectorAll(".fa-star");
console.log("allStars", allStars);

init();

function init() {
  allStars.forEach((star) => {
    star.addEventListener("click", getRating);
    star.addEventListener("mouseover", addCSS);
    star.addEventListener("mouseleave", removeCSS);
  });
}

function getRating(e) {
  console.log(e, e.target);
  console.dir(e.target);
  console.log(e.target.dataset);
}

function addCSS(e, css = "checked") {
  e.target.classList.add(css);
}

function removeCSS(e, css = "checked") {
  e.target.classList.remove(css);
}
