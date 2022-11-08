const navButton = document.getElementById("hamburger-btn");

function toggleHamburgerMenu() {
  // DOM Elements
  const navMenu = document.getElementById("hamburger-menu");
  const hamTop = document.getElementById("hamburger-top");
  const hamMid = document.getElementById("hamburger-mid");
  const hamBot = document.getElementById("hamburger-bot");

  // Toggle hamburger menu
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");

  // on click animate navMenu opacity slowly from 0 to 100
  navMenu.animate(
    [
      // keyframes
      { opacity: 0 },
      { opacity: 1 },
    ],
    {
      // timing options
      duration: 800,
      iterations: 1,
    }
  );

  // Toggle hamburger animation
  hamTop.classList.toggle("rotate-45");
  hamTop.classList.toggle("translate-y-2");
  hamMid.classList.toggle("opacity-0");
  hamBot.classList.toggle("-rotate-45");
  hamBot.classList.toggle("-translate-y-2");
}

// Event listeners
navButton.addEventListener("click", toggleHamburgerMenu);
