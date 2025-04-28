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
  
  function startSpeakingTest() {
    currentTest = "speaking";
    startQuestionnaire(speakingQuestions);
  }
  
  function startWritingTest() {
    currentTest = "writing";
    startQuestionnaire(writingQuestions);
  }
  
  function startReadingTest() {
    currentTest = "reading";
    startQuestionnaire(readingQuestions);
  }
  
  function startListeningTest() {
    currentTest = "listening";
    startQuestionnaire(listeningQuestions);
  }
  
  function startQuestionnaire(questions) {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('test-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    showQuestion(questions);
  }
  
  function showQuestion(questions) {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
  
    if (question.answerType === "text") {
      document.getElementById('options').innerHTML = `<input type="text" id="answer" placeholder="Your answer">`;
    } else if (question.options) {
      document.getElementById('options').innerHTML = question.options.map(option =>
        `<button onclick="selectAnswer('${option}')">${option}</button>`
      ).join('');
    }
  }
  
  function selectAnswer(answer) {
    const question = (currentTest === "speaking" || currentTest === "writing") ? document.getElementById('answer').value : answer;
    if (question && question === (currentTest === "reading" ? readingQuestions[currentQuestionIndex].correct : listeningQuestions[currentQuestionIndex].correct)) {
      score++;
    }
  
    nextQuestion();
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentTest === "speaking" || currentTest === "writing") {
      if (currentQuestionIndex >= 2) { // Example: 2 questions for speaking/writing
        showResult();
      } else {
        showQuestion(currentTest === "speaking" ? speakingQuestions : writingQuestions);
      }
    } else {
      if (currentQuestionIndex >= 1) { // Example: 1 question for reading/listening
        showResult();
      } else {
        showQuestion(currentTest === "reading" ? readingQuestions : listeningQuestions);
      }
    }
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
  