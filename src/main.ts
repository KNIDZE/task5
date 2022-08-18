import * as moment from "moment";

document.getElementById("plus").addEventListener("click", () => {
  let number = +document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = "" + (number + 1);
});

document.getElementById("minus").addEventListener("click", () => {
  let number = +document.getElementById("number").innerHTML;
  number > 0
    ? (document.getElementById("number").innerHTML = "" + (number - 1))
    : console.log("number below 0");
});
document.getElementById("start").addEventListener("click", () => {
  hide("minus");
  hide("plus");
  document.getElementById("give_time").innerHTML = "Осталось";
  let number = document.getElementById("number");
  startCount(number);
  hide("start");
});

function hide(element: string) {
  document.getElementById(element).style.display = "none";
}

function startCount(number: HTMLElement) {
  let goal = moment(moment().add(+number.innerHTML, "minute"));
  let interval = setInterval(() => {
    let minutes = goal.diff(moment(), "minutes");
    number.innerHTML =
      "" + (minutes + ":" + (goal.diff(moment(), "seconds") - minutes * 60));
    if (number.innerHTML == "0:0") {
      clearInterval(interval);
      showStartInterface();
    }
  }, 1000);
}
function showStartInterface() {
  show("plus");
  show("minus");
  show("start");
  document.getElementById("number").innerHTML = "5";
}
function show(element: string) {
  document.getElementById(element).style.display = "initial";
}
