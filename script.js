// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when item is clicked
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Typewriter
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrase = ["trainee web developer"];
const el = document.getElementById('typewriter');

let sleepTime = 80;
let curPhraseIndex = 0;

const typeLoop = async () => {
  while (true) {
    let curWord = phrase[curPhraseIndex];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);

    }
    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrase.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

typeLoop();
