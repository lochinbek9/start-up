const speakingQuestions = [
  { question: "How do you spend your free time?", answerType: "text" },
  { question: "What are your hobbies?", answerType: "text" },
  // Add more questions for speaking
];

const writingQuestions = [
  { question: "Write an essay about your favorite book.", answerType: "text" },
  { question: "Describe your last holiday in detail.", answerType: "text" },
  // Add more questions for writing
];

//START-WRITING-TEST-1--------------------------------------------------------


const maxWords = 150;
const taskTextarea = document.getElementById('task1Textarea');
const wordCount = document.getElementById('task1WordCount');
const resultDiv = document.getElementById('result');
const submitBtn = document.getElementById('submitBtn');
const timerDisplay = document.getElementById('timer');

// So'z sanash
taskTextarea.addEventListener('input', () => {
  const words = taskTextarea.value.trim().split(/\s+/).filter(Boolean);
  const remaining = maxWords - words.length;

  if (words.length > maxWords) {
    taskTextarea.value = words.slice(0, maxWords).join(' ');
    wordCount.textContent = `❗ Faqat ${maxWords} ta so‘zgacha ruxsat beriladi.`;
    wordCount.style.color = 'red';
  } else {
    wordCount.textContent = `📌 So‘zlar soni: ${words.length} / ${maxWords} | Qolgan: ${remaining} ta so‘z`;
    wordCount.style.color = 'gray';
  }
});

// Soxta xatoliklar (demo uchun)
const commonMistakes = ["is", "are", "a", "the", "of", "in", "that"];

function showMistakes(text) {
  const words = text.split(/\s+/);
  const highlighted = words.map(word => {
    return commonMistakes.includes(word.toLowerCase())
      ? `<span class="mistake">${word}</span>`
      : word;
  });
  return highlighted.join(" ");
}

function submitTask() {
  const text = taskTextarea.value.trim();
  const words = text.split(/\s+/).filter(Boolean);
  const highlightedText = showMistakes(text);

  let resultHtml = `<h4>✅ Javobingiz qabul qilindi!</h4>`;
  resultHtml += `<p><strong>So‘zlar soni:</strong> ${words.length}</p>`;

  if (words.length < 150) {
    resultHtml += `<p style="color: orange;">ℹ️ Siz 150 tadan kam so‘z yozdingiz. Bu ruxsat etiladi, lekin to‘liqroq javob tavsiya etiladi.</p>`;
  }

  resultHtml += `<p><strong>Xatoliklar bilan javob:</strong></p><div style="padding:10px; background:#f9f9f9; border:1px solid #ccc;">${highlightedText}</div>`;

  resultDiv.innerHTML = resultHtml;
  taskTextarea.disabled = true;
  submitBtn.disabled = true;
}

submitBtn.addEventListener('click', submitTask);

// Taymer: 20 daqiqa
function startTimeFunc() {
  let time = 20 * 60;
  const timer = setInterval(() => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    timerDisplay.textContent = `⏳ ${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      timerDisplay.textContent = "⏰ Vaqt tugadi!";
      submitTask(); // avtomatik yuborish
    }
  }, 1000);
}

const startTaskBtn1 = document.querySelector(".start-task-1-btn");
const taskBox1 = document.querySelector(".task-box-1");

startTaskBtn1.addEventListener("click", (e) => {
  taskBox1.style.display = "block"
  startTimeFunc()
})


// END-WRITING-TEST-1-----------------------------------------------------------





// START-WRITING-TASK-2-----------------------------------------------------

const maxWords2 = 250;
const taskTextarea2 = document.getElementById('task1Textarea-2');
const wordCount2 = document.getElementById('task1WordCount-2');
const resultDiv2 = document.getElementById('result-2');
const submitBtn2 = document.getElementById('submitBtn-2');
const timerDisplay2 = document.getElementById('timer-2');

// So'z sanash
taskTextarea2.addEventListener('input', () => {
  const words2 = taskTextarea2.value.trim().split(/\s+/).filter(Boolean);
  const remaining2 = maxWords2 - words2.length;

  if (words2.length > maxWords2) {
    taskTextarea2.value = words2.slice(0, maxWords2).join(' ');
    wordCount2.textContent = `❗ Faqat ${maxWords} ta so‘zgacha ruxsat beriladi.`;
    wordCount2.style.color = 'red';
  } else {
    wordCount2.textContent = `📌 So‘zlar soni: ${words2.length} / ${maxWords2} | Qolgan: ${remaining2} ta so‘z`;
    wordCount2.style.color = 'gray';
  }
});

// Soxta xatoliklar (demo uchun)
const commonMistakes2 = ["is", "are", "a", "the", "of", "in", "that"];

function showMistakes2(text) {
  const words2 = text.split(/\s+/);
  const highlighted2 = words2.map(word => {
    return commonMistakes2.includes(word.toLowerCase())
      ? `<span class="mistake">${word}</span>`
      : word;
  });
  return highlighted2.join(" ");
}

function submitTask2() {
  const text2 = taskTextarea2.value.trim();
  const words2 = text2.split(/\s+/).filter(Boolean);
  const highlightedText2 = showMistakes2(text2);

  let resultHtml2 = `<h4>✅ Javobingiz qabul qilindi!</h4>`;
  resultHtml2 += `<p><strong>So‘zlar soni:</strong> ${words2.length}</p>`;

  if (words2.length < 150) {
    resultHtml2 += `<p style="color: orange;">ℹ️ Siz 150 tadan kam so‘z yozdingiz. Bu ruxsat etiladi, lekin to‘liqroq javob tavsiya etiladi.</p>`;
  }

  resultHtml2 += `<p><strong>Xatoliklar bilan javob:</strong></p><div style="padding:10px; background:#f9f9f9; border:1px solid #ccc;">${highlightedText2}</div>`;

  resultDiv2.innerHTML = resultHtml2;
  taskTextarea2.disabled = true;
  submitBtn2.disabled = true;
}

submitBtn2.addEventListener('click', submitTask2);



// Taymer: 20 daqiqa
function startTestTast2() {
  let time2 = 40 * 60;
  const timer2 = setInterval(() => {
    const minutes2 = String(Math.floor(time2 / 60)).padStart(2, '0');
    const seconds2 = String(time2 % 60).padStart(2, '0');
    timerDisplay2.textContent = `⏳ ${minutes2}:${seconds2}`;
    time2--;

    if (time2 < 0) {
      clearInterval(timer2);
      timerDisplay2.textContent = "⏰ Vaqt tugadi!";
      submitTask2(); // avtomatik yuborish
    }
  }, 1000);
}

const startTaskBtn2 = document.querySelector(".task-2-start-btn");

const taskbox2 = document.querySelector(".task-2-box");

startTaskBtn2.addEventListener("click", () => {
  taskbox2.style.display = "block"
})
// END-WRITING-TASK-2-----------------------------------------------------------




const readingQuestions = [
  { question: "Read the passage and answer the questions.", options: ["True", "False"], correct: "True" },
  // Add more questions for reading
];

const listeningQuestions = [
  { question: "Listen to the audio and answer the question.", options: ["Option A", "Option B"], correct: "Option A" },
  // Add more questions for listening
];

let currentQuestionIndex = 0;
let currentTest = "";
let score = 0;

function startTest() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('test-screen').style.display = 'block';
}


function startQuestionnaire() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('test-screen').style.display = 'none';
  document.getElementById('question-screen').style.display = 'block';

}

function startWritingTest() {
  currentTest = "writing";
  startQuestionnaire(writingQuestions);
}

function startReadingTest() {
  currentTest = "reading";
  startQuestionnaire(readingQuestions);
}





function showResult() {
  document.getElementById('question-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';
  document.getElementById('result').innerText = `Your score is: ${score}`;
}

function restartTest() {
  location.reload();
}

function goBack() {
  document.getElementById('question-screen').style.display = 'none';
  document.getElementById('test-screen').style.display = 'block';
}
