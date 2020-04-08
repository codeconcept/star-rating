const allStars = document.querySelectorAll(".fa-star");
console.log("allStars", allStars);

init();

function init() {
  allStars.forEach((star) => {
    star.addEventListener("click", getRating);
  });
}

function getRating(e) {
  console.log(e, e.target);
  console.dir(e.target);
  console.log(e.target.dataset);
}
