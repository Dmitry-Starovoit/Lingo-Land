let text = document.querySelector(".text").textContent;
console.log(text);
const button1 = document.querySelector([
  ".button__1",
  ".button__1",
  ".button__1",
]);
let buttonValue1 = button1.textContent;
//let buttonValue2 = button2.textContent;
//let buttonValue3 = button3.textContent;
console.log(button1);

const correct = () => {
  alert("Ви відповіли правильно!");
  text = text.replace("___", buttonValue2);
  document.querySelector(".text").textContent = text;
};

const incorrect = () => {
  alert("Ви відповіли не правильно!");
};

const inspect = () => {
  if (buttonValue1 === "Andrey") {
    button1.addEventListener("click", incorrect);
  } else {
    button1.addEventListener("click", inspect);
  }

  console.log(text);

  return text;
};

inspect();
