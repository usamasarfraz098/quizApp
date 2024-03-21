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
  {name: 'Usama', email: 'usama32@gmail.com', password: '12345678'},
  {name: 'Attique', email: 'attique@gmail.com', password: '12345678'},
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
      question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
      options: ["alt", "title", "src", "href"],
      answer: "alt"
  },
  {
      question: "How can you create an email link in HTML?",
      options: ["<link>info@example.com</link>", "<mail>info@example.com</mail>", "<email>info@example.com</email>", "<link>info@example.com</link>"],
      answer: "<a href='mailto:info@example.com'>Send Email</a>"
  },
  
  {
      question: "What does the HTML <br> element represent?",
      options: ["A line break", "A paragraph break", "A space break", "A text break"],
      answer: "A line break"
  },
 
  {
      question: "What is the correct HTML for inserting an image?",
      options: ["<img alt='Image'>", "<image alt='Image'>", "<img alt='Image'>#</img>", "<image>#</image>"],
      answer: "<img alt='Image'>"
  },
  {
      question: "What is the purpose of the HTML <meta> tag?",
      options: ["To provide metadata about the HTML document", "To define a link to an external resource", "To specify the character encoding", "To define a navigation link"],
      answer: "To provide metadata about the HTML document"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
    answer: "Hyper Text Markup Language"
},

{
    question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
    options: ["alt", "title", "src", "href"],
    answer: "alt"
},
{
    question: "How can you create an email link in HTML?",
    options: ["<link>info@example.com</link>", "<mail>info@example.com</mail>", "<email>info@example.com</email>", "<link>info@example.com</link>"],
    answer: "<a href='mailto:info@example.com'>Send Email</a>"
},

{
    question: "What does the HTML <br> element represent?",
    options: ["A line break", "A paragraph break", "A space break", "A text break"],
    answer: "A line break"
},
{
    question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
    options: ["alt", "title", "src", "href"],
    answer: "alt"
}

,
{
    question: "What is the purpose of the HTML <meta> tag?",
    options: ["To provide metadata about the HTML document", "To define a link to an external resource", "To specify the character encoding", "To define a navigation link"],
    answer: "To provide metadata about the HTML document"
},
{
    question: "How can you create an email link in HTML?",
    options: ["<link>info@example.com</link>", "<mail>info@example.com</mail>", "<email>info@example.com</email>", "<link>info@example.com</link>"],
    answer: "<a href='mailto:info@example.com'>Send Email</a>"
},
{
    question: "What is the purpose of the HTML <meta> tag?",
    options: ["To provide metadata about the HTML document", "To define a link to an external resource", "To specify the character encoding", "To define a navigation link"],
    answer: "To provide metadata about the HTML document"
},
{
  question: "What does HTML stand for?",
  options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
  answer: "Hyper Text Markup Language"
}
 
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
  
  {
      question: "What property is used to set the text size of an element?",
      options: ["font-size", "text-size", "size", "font-style"],
      answer: "font-size"
  },
  {
      question: "How do you select an element with id 'demo' in CSS?",
      options: ["#demo", ".demo", "*demo", "$demo"],
      answer: "#demo"
  },
  {
      question: "Which CSS property controls the text color?",
      options: ["color", "font-color", "text-color", "color-text"],
      answer: "color"
  },
  {
      question: "How do you group selectors in CSS?",
      options: ["Separate them with commas", "Group them with curly braces", "Group them with square brackets", "Group them with parentheses"],
      answer: "Separate them with commas"
  },
  {
      question: "Which CSS property is used to control the space between elements?",
      options: ["margin", "padding", "spacing", "border"],
      answer: "margin"
  },
  {
      question: "What does the CSS property 'float' do?",
      options: ["Specifies the position of an element", "Specifies how an element should float", "Specifies the visibility of an element", "Specifies the size of an element"],
      answer: "Specifies how an element should float"
  },
  {
      question: "Which CSS property is used to create space around elements?",
      options: ["margin", "padding", "spacing", "border"],
      answer: "padding"
  },
  {
      question: "How do you make a list of items display horizontally instead of vertically?",
      options: ["list-style: horizontal;", "display: inline;", "list-style-type: none;", "display: inline-block;"],
      answer: "display: inline;"
  },
  {
      question: "What does the 'display: block;' property do in CSS?",
      options: ["Makes an element a block-level element", "Hides an element", "Makes an element a table", "Makes an element inline"],
      answer: "Makes an element a block-level element"
  },
  {
      question: "How do you apply a border to all sides of an element except the bottom side?",
      options: ["border-top, border-right, border-left", "border-bottom: none;", "border: none;", "border-bottom: 1px solid black;"],
      answer: "border-bottom: none;"
  },
  {
      question: "What is the default value of the position property in CSS?",
      options: ["static", "relative", "absolute", "fixed"],
      answer: "static"
  },
  {
      question: "Which CSS property is used to control the transparency of an element?",
      options: ["opacity", "transparent", "visibility", "transparency"],
      answer: "opacity"
  },
  {
    question: "How do you group selectors in CSS?",
    options: ["Separate them with commas", "Group them with curly braces", "Group them with square brackets", "Group them with parentheses"],
    answer: "Separate them with commas"
},
  {
      question: "Which CSS property is used to control the text alignment within an element?",
      options: ["align", "text-align", "text-style", "align-text"],
      answer: "text-align"
  },
  {
      question: "What does the 'clear' property do in CSS?",
      options: ["Specifies which sides of an element where other floating elements are not allowed", "Specifies the visibility of an element", "Specifies the size of an element", "Specifies the position of an element"],
      answer: "Specifies which sides of an element where other floating elements are not allowed"
  },
  {
      question: "What is the purpose of the CSS 'z-index' property?",
      options: ["Controls the stacking order of elements", "Controls the width of an element", "Controls the height of an element", "Controls the alignment of an element"],
      answer: "Controls the stacking order of elements"
  },
  {
      question: "How do you apply a background image to an element in CSS?",
      options: ["background-image: url('image.jpg');", "background: url('image.jpg');", "background: image('image.jpg');", "image: url('image.jpg');"],
      answer: "background-image: url('image.jpg');"
  },
  {
      question: "Which CSS property is used to control the font weight?",
      options: ["font-weight", "font-style", "text-weight", "weight"],
      answer: "font-weight"
  }
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
  {
      question: "What is the output of typeof null in JavaScript?",
      options: ["null", "object", "undefined", "number"],
      answer: "object"
  },
  {
      question: "What keyword is used to declare a function in JavaScript?",
      options: ["func", "function", "method", "declare"],
      answer: "function"
  },
  {
      question: "Which operator is used to assign a value to a variable in JavaScript?",
      options: ["=", "==", "===", ":="],
      answer: "="
  },
  {
      question: "What does the '===' operator do in JavaScript?",
      options: ["Compares value and type", "Assigns value", "Compares only value", "Compares only type"],
      answer: "Compares value and type"
  },
  {
      question: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
      options: ["To change the document's background color", "To retrieve an element from the document by its ID", "To create a new element in the document", "To delete an element from the document"],
      answer: "To retrieve an element from the document by its ID"
  },
  {
      question: "Which event is triggered when a user clicks on an HTML element?",
      options: ["onmouseover", "onchange", "onclick", "onsubmit"],
      answer: "onclick"
  },
  {
      question: "What does the 'typeof' operator do in JavaScript?",
      options: ["Returns the type of a variable or expression", "Assigns a type to a variable", "Checks if a variable is defined", "Checks if a variable is null"],
      answer: "Returns the type of a variable or expression"
  },
  {
      question: "What is the purpose of 'parseInt()' function in JavaScript?",
      options: ["To convert a string to an integer", "To check if a variable is an integer", "To round a number to the nearest integer", "To remove decimals from a number"],
      answer: "To convert a string to an integer"
  },
  
  {
      question: "What is the purpose of 'JSON.stringify()' function in JavaScript?",
      options: ["To parse JSON data", "To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To encode special characters in a string"],
      answer: "To convert a JavaScript object to a JSON string"
  },
  {
      question: "What does the 'NaN' value represent in JavaScript?",
      options: ["Not a Null", "Not a Number", "No Action Needed", "Null and Negative"],
      answer: "Not a Number"
  },
  {
      question: "Which loop is used to iterate over the properties of an object in JavaScript?",
      options: ["for loop", "while loop", "do-while loop", "for...in loop"],
      answer: "for...in loop"
  },
  {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: ["The current function", "The window object", "The object that owns the function", "The parent object"],
      answer: "The object that owns the function"
  },
  {
      question: "What is the purpose of the 'push()' method in JavaScript?",
      options: ["To remove the last element from an array", "To add new elements to the end of an array", "To sort the elements of an array", "To reverse the order of elements in an array"],
      answer: "To add new elements to the end of an array"
  }
];


const accessibilityQuestions = [
  {
      question: "What is the purpose of alt text in images for web accessibility?",
      options: ["To describe the visual content of the image", "To hide images from screen readers", "To improve image quality", "To increase website loading speed"],
      answer: "To describe the visual content of the image"
  },
  
  {
      question: "What is the importance of providing keyboard accessibility in web design?",
      options: ["To enhance visual design", "To improve website loading speed", "To allow users to navigate and interact with the website", "To reduce server response time"],
      answer: "To allow users to navigate and interact with the website"
  },
  {
      question: "What is ARIA (Accessible Rich Internet Applications) in web accessibility?",
      options: ["A programming language", "A set of HTML attributes to enhance accessibility", "A type of screen reader", "An image format"],
      answer: "A set of HTML attributes to enhance accessibility"
  },
  
  {
      question: "What is the recommended color contrast ratio for text and background elements for optimal accessibility?",
      options: ["1:1", "2:1", "3:1", "4.5:1"],
      answer: "4.5:1"
  },
 
  {
      question: "What is the purpose of skip navigation links in web accessibility?",
      options: ["To skip to the next section of a webpage", "To skip over non-essential content and navigation links", "To navigate to the homepage of a website", "To skip advertisements"],
      answer: "To skip over non-essential content and navigation links"
  },
  {
      question: "What are some examples of assistive technologies used by people with disabilities to access the web?",
      options: ["Screen readers, braille displays, and voice recognition software", "Virtual reality headsets", "Smartphones and tablets", "Social media platforms"],
      answer: "Screen readers, braille displays, and voice recognition software"
  },
  
  {
      question: "What is the purpose of ARIA landmarks in web accessibility?",
      options: ["To mark important landmarks on a map", "To enhance the appearance of web pages", "To provide navigation landmarks for screen readers", "To create animated effects"],
      answer: "To provide navigation landmarks for screen readers"
  },
  {
      question: "What is the significance of text alternatives for non-text content in web accessibility?",
      options: ["To reduce page load time", "To improve search engine rankings", "To provide accessible content for users who cannot see images", "To add visual appeal to web pages"],
      answer: "To provide accessible content for users who cannot see images"
  },
  {
      question: "Why should developers ensure that all interactive elements are keyboard accessible?",
      options: ["To improve website performance", "To comply with international standards", "To provide equal access for users who cannot use a mouse", "To reduce server response time"],
      answer: "To provide equal access for users who cannot use a mouse"
  },
  {
      question: "What are some common barriers faced by users with disabilities when accessing websites?",
      options: ["Long loading times", "Complex navigation structures", "Lack of alternative text for images", "All of the above"],
      answer: "All of the above"
  },
 
  
  {
      question: "How can developers make multimedia content accessible to users with disabilities?",
      options: ["By providing captions and transcripts for audio and video", "By embedding multimedia files directly into web pages", "By using complex animations", "By increasing font size"],
      answer: "By providing captions and transcripts for audio and video"
  },
  {
    question: "What is the purpose of alt text in images for web accessibility?",
    options: ["To describe the visual content of the image", "To hide images from screen readers", "To improve image quality", "To increase website loading speed"],
    answer: "To describe the visual content of the image"
},

{
    question: "What is the importance of providing keyboard accessibility in web design?",
    options: ["To enhance visual design", "To improve website loading speed", "To allow users to navigate and interact with the website", "To reduce server response time"],
    answer: "To allow users to navigate and interact with the website"
},
{
    question: "What is ARIA (Accessible Rich Internet Applications) in web accessibility?",
    options: ["A programming language", "A set of HTML attributes to enhance accessibility", "A type of screen reader", "An image format"],
    answer: "A set of HTML attributes to enhance accessibility"
},

{
    question: "What is the recommended color contrast ratio for text and background elements for optimal accessibility?",
    options: ["1:1", "2:1", "3:1", "4.5:1"],
    answer: "4.5:1"
},
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

  if (questionNumber < 15) {
     
      const html = `
      <div class="front-page-main-content-left">
          <div class="font-page-main-content-left-questions">
              <div class="quiz-subject-content"><span class="quiz-subject">${questionType} </span><p>Quiz</p></div>
              <div class="question-numbers">
                  <span class="question-numbers-text">Questions</span>
                  <span class="active-question-number">${questionNumber + 1}/</span>
                  <span class="total-question-number">15</span>
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
      <span class="total-score">15</span>
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
