const submitButton = document.querySelector("#submitButton");
const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const errorText = document.querySelector(".errorText");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
errorText.textContent = "";

console.log(errorText);

function displayErrorAsList(errorArray) {
  errorText.textContent = "";
  errorArray.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    errorText.appendChild(li);
  });
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const phoneValue = phone.value.trim();
  const emailValue = email.value;
  const fnameValue = fname.value;
  const subjectValue = subject.value;
  const messageValue = message.value;

  let errors = [];
  if (messageValue === "") {
    errors.push("Please enter your message.");
  }
  if (subjectValue === "") {
    errors.push("Please enter your subject.");
  }

  if (fnameValue === "") {
    errors.push("Please enter your name.");
  }
  if (phoneValue === "") {
    errors.push("Please enter your phone number.");
  }
  console.log(emailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g));
  if (emailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) == null) {
    errors.push("Please enter your e-mail.");
  }
  if (errors.length > 0) {
    //  errorText.textContent = errors.join("&nbsp");
    displayErrorAsList(errors);
  } else {
    errorText.style.color = "green";
    errorText.textContent = "Your message has been sent!";
    document.querySelector(".contactForm").reset();
  }
});
