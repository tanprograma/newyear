document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.querySelector(".ctime");
  const heading = document.querySelector(".heading");
  const message = document.querySelector(".message");
  heading.innerHTML = "BYE BYE 2023";
  const date = new Date();
  const day = date.getDate();

  const month = date.getMonth() + 1;
  let i = 0;
  const id = setInterval(() => {
    if (day == 1 && month == 1) {
      countdown.innerHTML = new Date().toLocaleTimeString();
      heading.innerHTML = "HAPPY NEW YEAR";
      clearInterval(id);
      return;
    }
    countdown.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
  const id2 = setInterval(() => {
    message.innerHTML = `thanks ${people[i]} !`;
    i += 1;
    if (i == people.length - 1) {
      i = 0;
    }
    if (day == 1 && month == 1) {
      message.innerHTML = `Hooray Happy New Year!`;
      clearInterval(id2);
    }
  }, 3000);
});
const people = ["Mo", "Kija", "Al habibi Najim", "Comrade Mokiwa", "Principal"];
