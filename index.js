let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let typed = new Typed("#typing",{
    strings:["CS Undergrad","Tech Enthusiast","Front-end Developer","Prompt Engineer","Freelancer"],
    typeSpeed:10,
    backspeed:10,
    loop:true
  })

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
// Your existing JavaScript code goes here
// Update skill meter animation
const bars = document.querySelectorAll('.percent-bar');
bars.forEach(bar => {
    const width = bar.parentNode.querySelector('span').textContent;
    bar.style.width = width;
});
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.front-content').style.display = 'none';
        card.querySelector('.back-content').style.display = 'block';
    });
});
// Add this at the end of your existing JavaScript code

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll animation for project cards
function handleProjectAnimation() {
  const projectCards = document.querySelectorAll('.project');
  
  projectCards.forEach((card) => {
      if (isInViewport(card)) {
          card.classList.add('animate');
      }
  });
}

// Event listener for scroll events
window.addEventListener('scroll', handleProjectAnimation);

// Initial check on page load
handleProjectAnimation();
