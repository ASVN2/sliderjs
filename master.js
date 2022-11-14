const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const autoSlid = document.querySelector(".switcher");
const bullts = document.querySelector(".incrmant");
const images = document.querySelector(".images");
const number = images.children.length;
next.addEventListener("click", nextfun);
prev.addEventListener("click", prevfun);

let current = 1;

function nextfun() {
  if (current !== number) {
    current++;
    setPic();
  }
}

function prevfun() {
  if (current !== 1) {
    current--;
    setPic();
  }
}

setPic();
function setPic() {
  Array.from(images.children).forEach((image) => {
    image.classList.remove("show");
  });
  images.children[current - 1].classList.add("show");
  bulltsMaker(current);

  // when you click on bullts add active and image active
  Array.from(bullts.children).forEach((li) => {
    li.addEventListener("click", () => {
      Array.from(bullts.children).forEach((li) => {
        li.classList.remove("active");
      });
      li.classList.add("active");
      Array.from(images.children).forEach((image) => {
        image.classList.remove("show");
      });
      // set the id of pic to current
      current = li.dataset.id;
      setPic();
    });
  });
}

// make bullts depent to images
function bulltsMaker(bullt) {
  bullts.innerHTML = "";
  liNumber = 1;
  Array.from(images.children).forEach((bullt) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", liNumber++);
    bullts.appendChild(li);
  });
  bullts.children[bullt - 1].classList.add("active");
}

//  autoplay
const backvalue = [];
document.querySelector(".switcher .checkbox").addEventListener("click", () => {
  if (document.querySelector(".switcher .checkbox").checked) {
    getRandomImg = setInterval(() => {
      randomValue = Math.floor(Math.random() * number) + 1;
      backvalue.push(randomValue);
      if (backvalue[backvalue.length - 1] !== backvalue[backvalue.length - 2]) {
        current = randomValue;
      } else {
        current = randomValue + 1;
      }
      console.log(randomValue);
      setPic();
    }, 2000);
  } else {
    clearInterval(getRandomImg);
  }
});

function pValues() {
  var number = [1, 2, -3, -4, 5, -6, 7, -8, 9];
  var count = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      count.push(number[i]);
    }
  }
  return count;
}

// output
// [1, 2, 5, 7, 9]


