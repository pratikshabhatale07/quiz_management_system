const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: 1
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperloop Machine Language",
      "Hyperlink Markup Language",
      "Helicopters Terminals Motorboats Lamborginis"
    ],
    answer: 0
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: 1
  },
  {
    question: "Which company developed Java?",
    options: [
      "Microsoft",
      "Apple",
      "Sun Microsystems",
      "Google"
    ],
    answer: 2
  },
  {
    question: "What is the extension of Java bytecode files?",
    options: [
      ".java",
      ".class",
      ".exe",
      ".js"
    ],
    answer: 1
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: [
      "this",
      "super",
      "extends",
      "implements"
    ],
    answer: 2
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: [
      "start()",
      "main()",
      "run()",
      "init()"
    ],
    answer: 1
  },
  {
    question: "Which of these is not a Java primitive type?",
    options: [
      "int",
      "float",
      "String",
      "char"
    ],
    answer: 2
  },
  {
    question: "Which symbol is used to end a statement in Java?",
    options: [
      ".",
      ";",
      ":",
      ","
    ],
    answer: 1
  },
  {
    question: "Which of the following is used to create an object in Java?",
    options: [
      "create",
      "new",
      "make",
      "object"
    ],
    answer: 1
  },
  {
    question: "Which package contains the Scanner class?",
    options: [
      "java.util",
      "java.io",
      "java.lang",
      "java.awt"
    ],
    answer: 0
  },
  {
    question: "What is the default value of an int variable in Java?",
    options: [
      "0",
      "null",
      "undefined",
      "1"
    ],
    answer: 0
  },
  {
    question: "Which of these is a loop structure in Java?",
    options: [
      "repeat",
      "for",
      "foreach",
      "loop"
    ],
    answer: 1
  },
  {
    question: "Which keyword is used to prevent inheritance?",
    options: [
      "final",
      "static",
      "private",
      "protected"
    ],
    answer: 0
  },
  {
    question: "Which of these is not an access modifier in Java?",
    options: [
      "public",
      "private",
      "protected",
      "package"
    ],
    answer: 3
  },
  {
    question: "Which of these is used to handle exceptions in Java?",
    options: [
      "catch",
      "try-catch",
      "error",
      "exception"
    ],
    answer: 1
  },
  {
    question: "Which keyword is used to define a constant in Java?",
    options: [
      "const",
      "final",
      "static",
      "constant"
    ],
    answer: 1
  },
  {
    question: "Which method is used to print output in Java?",
    options: [
      "System.print()",
      "System.out.print()",
      "print()",
      "console.log()"
    ],
    answer: 1
  },
  {
    question: "Which of these is a valid array declaration in Java?",
    options: [
      "int arr[] = new int[5];",
      "array arr = new array[5];",
      "int arr = int[5];",
      "int arr[] = int[5];"
    ],
    answer: 0
  },
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const quizContent = document.getElementById('quiz-content');

function showQuestion() {
  const q = quizData[currentQuestion];
  quizContent.innerHTML = `
    <div class="question-number">Question ${currentQuestion + 1} of ${quizData.length}</div>
    <div class="question">${q.question}</div>
    <div class="options">
      ${q.options.map((opt, idx) => `
        <button class="option-btn" onclick="selectOption(${idx})">${opt}</button>
      `).join('')}
    </div>
    <button class="next-btn" id="nextBtn" onclick="nextQuestion()" disabled>Next</button>
  `;
  selectedOption = null;
}

window.selectOption = function(idx) {
  const optionBtns = document.querySelectorAll('.option-btn');
  optionBtns.forEach(btn => btn.classList.remove('selected'));
  optionBtns[idx].classList.add('selected');
  selectedOption = idx;
  document.getElementById('nextBtn').disabled = false;
}

window.nextQuestion = function() {
  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quizContent.innerHTML = `
    <div class="score-section">
      🎉 You scored ${score} out of ${quizData.length}!
    </div>
    <button class="restart-btn" onclick="restartQuiz()">Restart Quiz</button>
  `;
}

window.restartQuiz = function() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

// Initialize quiz
showQuestion();