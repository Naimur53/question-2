// write your JavaScript here
const menuButton = document.querySelector(".menu-button");
const mobileItemsWrap = document.querySelector(".mobile-items-wrap");
menuButton.addEventListener("click", () => {
  const allClasses = menuButton.classList;
  const mobileItemsClass = mobileItemsWrap.classList;
  if (allClasses.toString().includes("active")) {
    allClasses.remove("active");
  } else {
    allClasses.add("active");
  }

  if (mobileItemsClass.toString().includes("active")) {
    mobileItemsClass.remove("active");
  } else {
    mobileItemsClass.add("active");
  }
});
