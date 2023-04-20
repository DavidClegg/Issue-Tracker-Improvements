const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#contactForm #name");
const emailInput = document.querySelector("#contactForm #email");
const messageInput = document.querySelector("#contactForm #message");
const submitButton = document.querySelector("#contactForm button");
const valid = (element)=>element.setCustomValidity("");
const invalid = (element)=>element.setCustomValidity("Invalid");
const emailPattern = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;
function validateForm() {
    let isValid = nameInput.value.length >= 1 && emailPattern.test(emailInput.value) && messageInput.value.length >= 1;
    return isValid;
}
nameInput.addEventListener("input", ()=>nameInput.value.length >= 1 ? valid(nameInput) : invalid(nameInput));
nameInput.addEventListener("click", ()=>nameInput.value.length >= 1 ? valid(nameInput) : invalid(nameInput));
emailInput.addEventListener("input", ()=>emailPattern.test(emailInput.value) ? valid(emailInput) : invalid(emailInput));
emailInput.addEventListener("click", ()=>emailInput.value.length >= 1 ? valid(emailInput) : invalid(emailInput));
messageInput.addEventListener("input", ()=>messageInput.value.length >= 1 ? valid(messageInput) : invalid(messageInput));
messageInput.addEventListener("click", ()=>messageInput.value.length >= 1 ? valid(messageInput) : invalid(messageInput));
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // Add code that sends to form data somewhere
    console.log("Yay, you submitted a message! \uD83E\uDD73");
    console.log({
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    });
    form.reset();
    submitButton.setAttribute("disabled", "");
});
form.addEventListener("input", (e)=>{
    let isValid = validateForm();
    isValid ? submitButton.removeAttribute("disabled") : submitButton.setAttribute("disabled", "");
});

//# sourceMappingURL=contact.e1aa5efc.js.map
