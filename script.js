let buttonSendEmail = document.querySelector(".send__email");
let input = document.querySelector(".input__footer");

let mailingList = [];

const addEmailToArr = function () {
  mailingList.push(String(input.value).toLowerCase());
  console.log(mailingList);
  input.value = "";
};

buttonSendEmail.addEventListener("click", addEmailToArr);

window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// lists menu and other

const footerListMenu = document.querySelector(".nav__footer");
const headerListMenu = document.querySelector(".nav");
const footerFollowList = document.querySelector(".follow__list");
const listMenuItems = ["About us", "Resources", "News", "Contacts", "Feedback"];
const listFollowItems = ["Facebook", "Instagram", "Telegram", "WhatsApp"];

const listMenu = function () {
  footerListMenu.innerHTML = "";
  headerListMenu.innerHTML = "";
  footerFollowList.innerHTML = "";

  listMenuItems.reverse().forEach(function (value, key) {
    const listsFooter = `<li class="nav__footer--item"><a href="">${value}</a></li>`;

    const listsHeader = `<li class="nav__item"><a href="">${value}</a></li>`;

    headerListMenu.insertAdjacentHTML("afterbegin", listsHeader);
    footerListMenu.insertAdjacentHTML("afterbegin", listsFooter);
  });

  listFollowItems.reverse().forEach(function (value, key) {
    const listFollow = `<li class="follow__list--item">
    <a href=""><img src="images/${key + 1}.svg" alt="" />${value}</a>
  </li>`;
    footerFollowList.insertAdjacentHTML("afterbegin", listFollow);
  });
};
listMenu();

// scroll to block
const scrollButton = document.querySelector(".show__more");
const contentBlock = document.querySelector(".content__block");
console.log(scrollButton);
scrollButton.addEventListener("click", function () {
  contentBlock.scrollIntoView({ behavior: "smooth" });
});

const tabs = document.querySelectorAll(".operations__tab");
console.log(tabs);
const tabContainer = document.querySelector(".operations__tab-container");
const tabContents = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
  const clickedButton = e.target.closest(".operations__tab");
  console.log(clickedButton);
  if (!clickedButton) return;

  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));

  clickedButton.classList.add("operations__tab--active");

  tabContents.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
    .classList.add("operations__content--active");
});
