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
  console.log(e, e.target, e.target.nodeName, e.target.nodeType);
  console.dir(e.target);
  console.log(e.target.dataset);
}

function addCSS(e, css = "checked") {
  const overedStar = e.target;
  overedStar.classList.add(css);
  const previousSiblings = getPreviousSiblings(overedStar);
  console.log("previousSiblings", previousSiblings);
  previousSiblings.forEach((elem) => elem.classList.add(css));
}

function removeCSS(e, css = "checked") {
  const overedStar = e.target;
  overedStar.classList.remove(css);
  const previousSiblings = getPreviousSiblings(overedStar);
  previousSiblings.forEach((elem) => elem.classList.remove(css));
}

function getPreviousSiblings(elem) {
  console.log("elem.previousSibling", elem.previousSibling);
  let sibs = [];
  const spanNodeType = 1;
  while ((elem = elem.previousSibling)) {
    if (elem.nodeType === spanNodeType) {
      sibs = [elem, ...sibs];
    }
  }
  return sibs;
}
