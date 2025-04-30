
const questions = [
      { question: "What's your name?", options: ["Yes", "Blue", "John", "Car"], correct: "John", difficulty: "A1" },
      { question: "Select the correct article: ___ apple", options: ["a", "an", "the", "no"], correct: "an", difficulty: "A1" },
      { question: "Choose the plural of 'cat'", options: ["cat", "cats", "cat's", "cates"], correct: "cats", difficulty: "A1" },
      { question: "Where ___ you yesterday?", options: ["is", "was", "were", "are"], correct: "were", difficulty: "A2" },
      { question: "I have ___ friends in London.", options: ["much", "a lot of", "many", "few"], correct: "many", difficulty: "A2" },
      { question: "Pick the past tense of 'buy'", options: ["buyed", "bought", "buys", "buy"], correct: "bought", difficulty: "A2" },
      { question: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "will be"], correct: "were", difficulty: "B1" },
      { question: "Choose the correct phrase: 'She has been working ___ two hours.'", options: ["since", "for", "during", "by"], correct: "for", difficulty: "B1" },
      { question: "What does 'generous' mean?", options: ["angry", "kind", "sad", "fast"], correct: "kind", difficulty: "B1" },
      { question: "Select the correct word: 'She completed the project ___ time.'", options: ["at", "in", "on", "by"], correct: "on", difficulty: "B2" },
      { question: "Pick the synonym of 'enormous'", options: ["tiny", "small", "huge", "short"], correct: "huge", difficulty: "B2" },
      { question: "Which is the correct passive form: 'They built the house.'", options: ["The house built by them.", "The house was built by them.", "They was built the house.", "House was building."], correct: "The house was built by them.", difficulty: "B2" },
      { question: "What is the best meaning of 'meticulous'?", options: ["careless", "precise", "fast", "lazy"], correct: "precise", difficulty: "C1" },
      { question: "Choose the correct structure: 'No sooner ___ he arrived than it started raining.'", options: ["had", "has", "did", "was"], correct: "had", difficulty: "C1" },
      { question: "Identify the meaning of 'candid'", options: ["dishonest", "truthful", "secretive", "rude"], correct: "truthful", difficulty: "C1" },
      { question: "Pick the correct usage: 'He is accused ___ stealing money.'", options: ["for", "with", "of", "at"], correct: "of", difficulty: "C2" },
      { question: "What is the antonym of 'ubiquitous'", options: ["rare", "common", "popular", "famous"], correct: "rare", difficulty: "C2" },
      { question: "Find the most suitable meaning of 'ephemeral'", options: ["long-lasting", "temporary", "permanent", "frequent"], correct: "temporary", difficulty: "C2" }
    ];
    
    let currentDifficulty = "A2";
    let score = 0;
    let askedQuestions = [];
    
    function startTest() {
      document.getElementById('test-start-screen').style.display = 'none';
      document.getElementById('loading').style.display = 'block';
      setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('test-test-screen').style.display = 'block';
        showQuestion();
      }, 1500);
    }
    
    function getNextQuestion() {
      const available = questions.filter(q => q.difficulty === currentDifficulty && !askedQuestions.includes(q));
      if (available.length === 0) {
        return null;
      }
      const randomIndex = Math.floor(Math.random() * available.length);
      const question = available[randomIndex];
      askedQuestions.push(question);
      return question;
    }
    
    function selectAnswer(selected) {
      const currentQuestion = askedQuestions[askedQuestions.length - 1];
      if (selected === currentQuestion.correct) {
    
        if (currentDifficulty === "A1") currentDifficulty = "A2";
        else if (currentDifficulty === "A2") currentDifficulty = "B1";
        else if (currentDifficulty === "B1") currentDifficulty = "B2";
        else if (currentDifficulty === "B2") currentDifficulty = "C1";
        else if (currentDifficulty === "C1") currentDifficulty = "C2";
      } else {
    
        if (currentDifficulty === "C2") currentDifficulty = "C1";
        else if (currentDifficulty === "C1") currentDifficulty = "B2";
        else if (currentDifficulty === "B2") currentDifficulty = "B1";
        else if (currentDifficulty === "B1") currentDifficulty = "A2";
        else if (currentDifficulty === "A2") currentDifficulty = "A1";
      }
    
    
      if (askedQuestions.length >= 10) {
        showResult();
      } else {
        showQuestion();
      }
    }
    
    function showResult() {
      document.getElementById('test-test-screen').style.display = 'none';
      document.getElementById('test-result-screen').style.display = 'block';
      document.getElementById('test-result').innerText = currentDifficulty;
    }
    
    
    function showQuestion() {
      const q = getNextQuestion();
      if (!q) {
        showResult();
        return;
      }
      document.getElementById('question-text').innerText = q.question;
      document.getElementById('options').innerHTML = q.options.map(opt =>
        `<button onclick="selectAnswer('${opt}')">${opt}</button>`
      ).join('');
      document.getElementById('progress').innerText = `Question ${askedQuestions.length} of 20`;
    }
    
    
    function restartTest() {
      location.reload();
    }
    