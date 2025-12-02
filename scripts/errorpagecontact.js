const submitButton = document.querySelector("#submitButton")
const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const errorText = document.querySelector(".errorText")
errorText.textContent=""

console.log(errorText)

submitButton.addEventListener("click",function(e)
    {
        e.preventDefault();
        const emailValue = email.value

        console.log(emailValue.match((/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)))
         if(emailValue.match((/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) == null){
            errorText.textContent="Write a proper email"
         }
         else{
            errorText.textContent=""
         }
       
    }
)

