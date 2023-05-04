document.addEventListener("DOMContentLoaded", () => {
  const aboutMeButton = document.getElementById("about-me-btn");
  const myProjectButton = document.getElementById("my-project-btn");
  const contactButton = document.getElementById("contact-btn");

  aboutMeButton.addEventListener("click", () => {
    window.location.href = "/pages/about-me.html";
  });

  myProjectButton.addEventListener("click", () => {
    window.location.href = "/pages/my-project.html";
  });

  contactButton.addEventListener("click", () => {
    window.location.href = "/pages/contact.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menu_btn = document.querySelector(".burger-menu");
  const mobile_menu = document.querySelector(".mobile-nav");
  const aboutMeButton = document.getElementById("about-me-btn1");
  const myProjectButton = document.getElementById("my-project-btn1");
  const contactButton = document.getElementById("contact-btn1");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
  aboutMeButton.addEventListener("click", () => {
    window.location.href = "/pages/about-me.html";
  });

  myProjectButton.addEventListener("click", () => {
    window.location.href = "/pages/my-project.html";
  });

  contactButton.addEventListener("click", () => {
    window.location.href = "/pages/contact.html";
  });
});
