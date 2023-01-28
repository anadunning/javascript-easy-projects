const colors = [
  "green",
  "red",
  "rgba(133,122,200",
  "#f15025",
  "salmon",
  "yellow",
  "cyan",
  "blue",
  "rose",
  "orange",
  "springgreen",
  "azure",
  "violet",
  "firebrick",
  "pink",
  "mediumvioletred",
  "tomato",
  "gold",
  "khaki",
  "peachpuff",
  "moccasin",
  "fuchsia",
  "rebeccapurple",
  "indigo",
  "lime",
  "forestgreen",
  "teal",
  "olive",
  "royalblue",
  "navy",
  "chocolate",
  "wheat",
  "peru",
  "silver",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
