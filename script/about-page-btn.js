function toggle() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.classList.toggle("active");
  const textContainer = document.querySelector(".about-text-container");
  const skillsBtn = document.querySelector(".my-skills-btn");

  // Toggle the visibility of the text container
  if (textContainer.style.display !== "none") {
    textContainer.style.display = "none";
    skillsBtn.textContent = "X Close";
  } else {
    textContainer.style.display = "block";
    skillsBtn.textContent = "My Skills";
  }
}
