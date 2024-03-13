const selectedAnswers = [];
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const loginPage = document.getElementById("login-page");
const close = document.querySelector('.close');
const btn = document.querySelectorAll('.btn');
const container1 = document.querySelector('.container1');
const container= document.querySelector('.container');
const mainPage=document.querySelector('.front-page')
const signinBtn = document.querySelector('#signin2');
const signupBtn=document.querySelector('#signup2')
const frontPageMain = document.querySelector('.front-page-main-content');
const questionType = document.querySelectorAll('.front-page-right-img');
const userName=document.querySelector('.user-name')

// Close function
const closeFunction = function () {
    loginPage.classList.add('display');
    container1.classList.add('opacity');
};

// sign in sign up
const userAccounts = [
  {name: 'usama', email: 'usama32@gmail.com', password: '12345678'},
];
signUpButton.addEventListener("click", () => {
    loginPage.classList.add("right-panel-active");
    console.log("usama");
});
signInButton.addEventListener("click", () => {
  loginPage.classList.remove("right-panel-active");
  console.log("usama");
});
signupBtn.addEventListener('click',function(event){
  // console.log('sin')
  event.preventDefault(); 

    
    const nameInput = document.querySelector('#SignupName');
    const emailInput = document.querySelector('#SignupEmail');
    const passwordInput = document.querySelector('#SignupPassword');

    // user object create 
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value
  };

  userAccounts.push(newUser);
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  console.log('User created successfully:',userAccounts);
})

signinBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const signinEmail = document.querySelector('#signin_email').value;
  const signinPassword = document.querySelector('#signin_password').value;

  console.log("Email:", signinEmail);
  console.log("Password:", signinPassword);

  const user = userAccounts.find(user => user.email === signinEmail && user.password === signinPassword);

  if (user) {
      closeFunction();
      container.classList.add("display");
      mainPage.classList.remove('display');
      userName.innerHTML=user.name
  } else {
      console.log(userAccounts);
      alert("Invalid email or password. Please try again.");
  }
});

close.addEventListener("click", closeFunction);

btn.forEach(button => {
    button.addEventListener("click", () => {
        loginPage.classList.remove('display');
        container1.classList.remove('opacity');
    });
});

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        closeFunction();
    }
});

// Arrays for questions
const htmlQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: ["<h1>", "<h6>", "<heading>", "<head>"],
        answer: "<h1>"
    },
    
];

const cssQuestions = [
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: ["p {font-weight: bold;}", "p {text-style: bold;}", "p {font: bold;}", "p {bold: true;}"],
        answer: "p {font-weight: bold;}"
    },
    // Add more CSS questions here...
];

const javascriptQuestions = [
    {
        question: "What is JavaScript?",
        options: ["A scripting language", "A markup language", "A programming language", "A styling language"],
        answer: "A programming language"
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    },
    // Add more JavaScript questions here...
];

const accessibilityQuestions = [
    {
        question: "What is web accessibility?",
        options: ["The practice of making websites accessible to people with disabilities", "The process of designing websites", "The speed at which a website loads", "The visual appeal of a website"],
        answer: "The practice of making websites accessible to people with disabilities"
    },
    {
        question: "Why is web accessibility important?",
        options: ["To ensure compliance with legal requirements", "To reach a wider audience", "To improve user experience for all users", "All of the above"],
        answer: "All of the above"
    },
    // Add more accessibility questions here...
];

//get questions 
function getQuestions(questionType) {
  if(questionType=='HTML'){
    return htmlQuestions
  }
  else if(questionType=='CSS'){
    return cssQuestions;
  }
  else if(questionType=='JavaScript'){
    return javascriptQuestions;
  }
  else{
    return accessibilityQuestions;
  }
}

// display questions 
function displayQuestion(questionType, questionNumber) {
  frontPageMain.innerHTML = ''; 

  let questions = getQuestions(questionType);

  if (questionNumber >= 0 && questionNumber < questions.length) {
     
      const html = `
      <div class="front-page-main-content-left">
          <div class="font-page-main-content-left-questions">
              <div class="quiz-subject-content"><span class="quiz-subject">${questionType} </span><p>Quiz</p></div>
              <div class="question-numbers">
                  <span class="question-numbers-text">Questions</span>
                  <span class="active-question-number">${questionNumber + 1}/</span>
                  <span class="total-question-number">20</span>
              </div>
              <div class="front-page-main-content-left-question">
                  <div class="question">
                      ${questions[questionNumber].question}
                  </div>
              </div>
          </div>
      </div>
      <div class="front-page-main-content-right grid">
          <div class="timer-div"><span class="time-left-text">Left:</span><span class="timer">60</span></div>
          ${questions[questionNumber].options.map((option, index) => `
              <div class="front-page-right-option-${index + 1} front-page-right-option">
                  <input type="radio" name="options" id="${index + 1}">
                  <label for="${index + 1}" class="icon-text">${option}</label>
              </div>
          `).join('')}
          <div class="btn-class">
            <div class="questions-btn">Next</div>
          </div>
      </div>
      `;
      frontPageMain.insertAdjacentHTML("beforeend", html);

    //  next btn 
      const nextQuestionBtn = document.querySelector('.questions-btn');
      nextQuestionBtn.addEventListener('click', function() {
          
          const selectedOption = document.querySelector('input[name="options"]:checked');
          if (selectedOption) {
              selectedAnswers.push(selectedOption.nextElementSibling.textContent.trim());
          } else {
              selectedAnswers.push(null); 
          }

         
          displayQuestion(questionType, questionNumber + 1);
          if (questionNumber + 1 === questions.length) {
              checkAnswers(questionType);
          }
      });
  } else {
      console.log('No more questions');
      checkAnswers(questionType); 
  }
}

//  answer checking, display result
function checkAnswers(questionType) {
  const questions = getQuestions(questionType);
  let correctCount = 0;
  for (let i = 0; i < selectedAnswers.length; i++) {
      if (selectedAnswers[i] === questions[i].answer) {
          correctCount++;
      }
  }

  // Display result
  frontPageMain.innerHTML = '';
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('result-container');
  resultDiv.innerHTML = `
      <div class="result-container-content">
    
      <div class="result-container-content-heading">Quiz Result</div>
      <div class="result-container-content-img"><img id="img" src="img/award3.png" alt=""></div>
      <div class="congratulation-text">
        Congratulations!
      </div>
     <div class=" result-container-content-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, unde.</div>
     <div class="result-container-content-score-text">Your Score</div>
     <div class="result-container-content-score">
      <span class="your-score">${correctCount}</span>
      <span class="slash">/</span>
      <span class="total-score">20</span>
     </div>
     <div class="btn-results"><div class="btn1">Take New Quiz</div></div>

      </div>
  `;
  frontPageMain.appendChild(resultDiv);
  const reultPageBtn=document.querySelector('.btn-results')
  reultPageBtn.addEventListener('click',function(){
    frontPageMain.innerHTML='';
    container.classList.remove('display')
  })
}
questionType.forEach(function(btn){
  btn.addEventListener('click',function(e){
      const questiontypebtn = e.currentTarget;
      displayQuestion(questiontypebtn.id, 0);
  });
});
