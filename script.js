const iStatus = document.querySelector("h5");
const btn = document.getElementById("add");
let check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    iStatus.innerHTML = "Friends";
    iStatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1
  } else {
    iStatus.innerHTML = "Stranger";
    iStatus.style.color = "Red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
