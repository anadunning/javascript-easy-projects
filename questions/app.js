// using selectors inside the element
// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// const btnPlus = document.querySelector(".plus-icon");
// const btnMinus = document.querySelector(".minus-icon");
// const questionText = document.querySelector(".question-text");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// Another solution
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);

  btn.addEventListener("click", function () {
    // This function below is to close the question-text if I open a different one
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
