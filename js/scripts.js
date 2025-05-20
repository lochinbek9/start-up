window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#aboutUsCarousel");
  const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
  const totalSlides = document.querySelectorAll(".carousel-item").length;

  function getMaxSlideIndex() {
    if (window.innerWidth >= 992) {
      return 1;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return totalSlides - 1;
    }
  }

  carousel.addEventListener("slide.bs.carousel", function (event) {
    const maxSlideIndex = getMaxSlideIndex();
    const nextIndex = event.to;

    if (nextIndex > maxSlideIndex) {
      event.preventDefault();
      carouselInstance.to(0);
    }
    if (nextIndex < 0) {
      event.preventDefault();
      carouselInstance.to(maxSlideIndex);
    }
  });

  window.addEventListener("resize", function () {
    carouselInstance.cycle();
  });
});


function readingBtn(){
  document.querySelector(".reading-btn").style.display = "none"
}

//

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".checkbox-group").forEach((group) => {
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const checkedCount = group.querySelectorAll(
          'input[type="checkbox"]:checked'
        ).length;
        checkboxes.forEach((cb) => {
          if (!cb.checked) {
            cb.disabled = checkedCount >= 2;
          }
        });
      });
    });
  });
});

const correctAnswers = {
  1: "litter",
  2: "dogs",
  3: "insects",
  4: "butterflies",
  5: "wall",
  6: "island",
  7: "boots",
  8: "beginners",
  9: "spoons",
  10: "35",
  11: "A",
  12: "C",
  13: "B",
  14: "B",
  "15-16": ["A", "D"],
  "17-18": ["B", "C"],
  "19-20": ["D", "E"],
  21: "A",
  22: "B",
  23: "B",
  24: "A",
  25: "C",
  26: "C",
  27: "A",
  28: "E",
  29: "F",
  30: "C",
  31: "puzzle",
  32: "logic",
  33: "confusion",
  34: "meditation",
  35: "stone",
  36: "coins",
  37: "tree",
  38: "breathing",
  39: "paper",
  40: "anxiety",
};

function checkAnswers() {
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  let score = 0;
  let incorrectQuestions = [];
  let resultHTML = "<h5>Results:</h5><ul>";

  // Part 1: Text inputs
  for (let i = 1; i <= 10; i++) {
    const userAnswer = document
      .getElementById(`answer-${i}`)
      .value.trim()
      .toLowerCase();
    const correctAnswer = correctAnswers[i].toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect) {
      score++;
      resultHTML += `<li>Question ${i}: <span class="correct">Correct (Your answer: ${userAnswer})</span></li>`;
    } else {
      incorrectQuestions.push(
        `Question ${i}: Your answer: ${userAnswer}, Correct: ${correctAnswer}`
      );
      resultHTML += `<li>Question ${i}: <span class="incorrect">Incorrect (Your answer: ${userAnswer}, Correct: ${correctAnswer})</span></li>`;
    }
  }

  // Part 2: Radio buttons (11-14)
  for (let i = 11; i <= 14; i++) {
    const userAnswer =
      document.querySelector(`input[name="question${i}"]:checked`)?.value || "";
    const correctAnswer = correctAnswers[i];
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect && userAnswer !== "") {
      score++;
      resultHTML += `<li>Question ${i}: <span class="correct">Correct (Your answer: ${userAnswer})</span></li>`;
    } else {
      incorrectQuestions.push(
        `Question ${i}: Your answer: ${
          userAnswer || "None"
        }, Correct: ${correctAnswer}`
      );
      resultHTML += `<li>Question ${i}: <span class="incorrect">Incorrect (Your answer: ${
        userAnswer || "None"
      }, Correct: ${correctAnswer})</span></li>`;
    }
  }

  // Part 2: Checkbox questions (15-16, 17-18, 19-20)
  const checkboxGroups = ["15-16", "17-18", "19-20"];
  checkboxGroups.forEach((group) => {
    const userAnswers = Array.from(
      document.querySelectorAll(`input[name="question${group}"]:checked`)
    )
      .map((cb) => cb.value)
      .sort();
    const correctAnswersSorted = correctAnswers[group].sort();
    const isCorrect =
      userAnswers.length === 2 &&
      userAnswers.every((val, idx) => val === correctAnswersSorted[idx]);
    if (isCorrect) {
      score += 2; // Two points for each correct pair
      resultHTML += `<li>Questions ${group}: <span class="correct">Correct (Your answers: ${userAnswers.join(
        ", "
      )})</span></li>`;
    } else {
      incorrectQuestions.push(
        `Questions ${group}: Your answers: ${
          userAnswers.join(", ") || "None"
        }, Correct: ${correctAnswersSorted.join(", ")}`
      );
      resultHTML += `<li>Questions ${group}: <span class="incorrect">Incorrect (Your answers: ${
        userAnswers.join(", ") || "None"
      }, Correct: ${correctAnswersSorted.join(", ")})</span></li>`;
    }
  });

  // Part 3: Radio buttons (21-26)
  for (let i = 21; i <= 26; i++) {
    const userAnswer =
      document.querySelector(`input[name="question${i}"]:checked`)?.value || "";
    const correctAnswer = correctAnswers[i];
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect && userAnswer !== "") {
      score++;
      resultHTML += `<li>Question ${i}: <span class="correct">Correct (Your answer: ${userAnswer})</span></li>`;
    } else {
      incorrectQuestions.push(
        `Question ${i}: Your answer: ${
          userAnswer || "None"
        }, Correct: ${correctAnswer}`
      );
      resultHTML += `<li>Question ${i}: <span class="incorrect">Incorrect (Your answer: ${
        userAnswer || "None"
      }, Correct: ${correctAnswer})</span></li>`;
    }
  }

  // Part 3: Text inputs (27-30)
  for (let i = 27; i <= 30; i++) {
    const userAnswer = document
      .getElementById(`answer-${i}`)
      .value.trim()
      .toUpperCase();
    const correctAnswer = correctAnswers[i];
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect) {
      score++;
      resultHTML += `<li>Question ${i}: <span class="correct">Correct (Your answer: ${userAnswer})</span></li>`;
    } else {
      incorrectQuestions.push(
        `Question ${i}: Your answer: ${
          userAnswer || "None"
        }, Correct: ${correctAnswer}`
      );
      resultHTML += `<li>Question ${i}: <span class="incorrect">Incorrect (Your answer: ${
        userAnswer || "None"
      }, Correct: ${correctAnswer})</span></li>`;
    }
  }

  // Part 4: Text inputs (31-40)
  for (let i = 31; i <= 40; i++) {
    const userAnswer = document
      .getElementById(`answer-${i}`)
      .value.trim()
      .toLowerCase();
    const correctAnswer = correctAnswers[i].toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect) {
      score++;
      resultHTML += `<li>Question ${i}: <span class="correct">Correct (Your answer: ${userAnswer})</span></li>`;
    } else {
      incorrectQuestions.push(
        `Question ${i}: Your answer: ${
          userAnswer || "None"
        }, Correct: ${correctAnswer}`
      );
      resultHTML += `<li>Question ${i}: <span class="incorrect">Incorrect (Your answer: ${
        userAnswer || "None"
      }, Correct: ${correctAnswer})</span></li>`;
    }
  }

  resultHTML += `</ul><p><strong>Total Score: ${score}/40</strong></p>`;
  if (incorrectQuestions.length > 0) {
    resultHTML += `<h5>Incorrect Questions:</h5><ul>`;
    incorrectQuestions.forEach((q) => {
      resultHTML += `<li>${q}</li>`;
    });
    resultHTML += `</ul>`;
  } else {
    resultHTML += `<p><strong>Congratulations! All answers are correct.</strong></p>`;
  }

  resultDiv.innerHTML = resultHTML;
}

function goHome() {
  window.location.href = "menu.html"; // Adjust as needed
}
>>>>>>> 54f3079 (listening dynamic)
