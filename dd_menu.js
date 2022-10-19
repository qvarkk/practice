const hburgerBtn = document.querySelector("#hamburgerMenu");
const ddBar = document.querySelector("#navBar");

hburgerBtn.addEventListener("click", () => {
  if (ddBar.classList.contains("invisible")) {
    ddBar.classList.remove("invisible");
  } else {
    ddBar.classList.add("invisible");
  }
});
