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
