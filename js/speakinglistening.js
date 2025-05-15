function startListening() {
    document.getElementById('speaking-menu').style.display = 'none';
    document.getElementById('listening').style.display = 'block';
  }
  
  function startSpeaking() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('speaking').style.display = 'block';
  }
  
  function goHome() {
    document.getElementById('listening').style.display = 'none';
    document.getElementById('speaking').style.display = 'none';
    document.getElementById('speaking-menu').style.display = 'block';
  }
  
  // Listening javobini tekshirish
  function checkListening() {
    const userAnswer = document.getElementById('listening-answer').value.trim().toLowerCase();
    const correctAnswer = "hello"; // audio faylda aytilgan so'z
  
    if (userAnswer === correctAnswer) {
      alert("✅ Correct!");
    } else {
      alert("❌ Incorrect. Try again!");
    }
  }
  
  // Speaking ovozni yozib olish
  function recordSpeech() {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Speech Recognition not supported!");
      return;
    }
  
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
  
    recognition.start();
  
    recognition.onresult = function(event) {
      const speechResult = event.results[0][0].transcript;
      document.getElementById('speech-text').innerText = `You said: ${speechResult}`;
  
      if (speechResult.toLowerCase().includes("hello")) {
        alert("✅ Good job!");
      } else {
        alert("❌ Try again.");
      }
    };
  
    recognition.onerror = function(event) {
      alert('Error: ' + event.error);
    };
  }
  