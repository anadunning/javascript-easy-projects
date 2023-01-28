let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const options = e.currentTarget.classList;

    if (options.contains("decrease")) {
      count--;
    } else if (options.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "darkgreen";
    }

    if (count < 0) {
      value.style.color = "orangered";
    }

    if (count === 0) {
      value.style.color = "darkslategray";
    }

    value.textContent = count;
  });
});
