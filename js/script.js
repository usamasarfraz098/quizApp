const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const loginPage = document.getElementById("login-page");
const close=document.querySelector('.close')
const btn=document.querySelectorAll('.btn')
const container1=document.querySelector('.container1')

const closeFunction = function () {
        loginPage.classList.add('display');
        container1.classList.add('opacity')
  };
signUpButton.addEventListener("click", () => {
  loginPage.classList.add("right-panel-active");
  console.log("usama");
});

signInButton.addEventListener("click", () => {
  loginPage.classList.remove("right-panel-active");
  console.log("usama");
});

close.addEventListener("click", closeFunction);
  
  // Loop through each button element
  btn.forEach(button => {
    button.addEventListener("click", () => {
        loginPage.classList.remove('display');
      container1.classList.remove('opacity');
    });
  });

document.addEventListener('keydown', function (e) {
    //   console.log(e);
    if (e.key == 'Escape') {
      closeFunction()
    }
   
  });
  
