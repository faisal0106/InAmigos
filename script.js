const menuButton = document.querySelector("#menuButton");
const siteNav = document.querySelector("#siteNav");
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
  formMessage.textContent = "Thank you. Your enquiry has been recorded for this demo website.";
});
