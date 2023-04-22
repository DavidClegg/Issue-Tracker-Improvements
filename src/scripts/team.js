// add existing team to page

const userSection = document.querySelector("#users");

import {
    UserObject, CreateUserElement, addUserElement
} from '../scripts/tools'


import {users} from "../scripts/data";

users.forEach(user => {let element = new CreateUserElement(user);addUserElement(element, userSection);})

const images = [
    "../../dist/assets/users/craig_steward.jpg",
    "../../dist/assets/users/ethan_addy.jpg",
    "../../dist/assets/users/hannah_rogers.jpg",
    "../../dist/assets/users/heather_walters.jpg",
    "../../dist/assets/users/ida_johansen.jpg",
    "../../dist/assets/users/lea_ross.jpg",
    "../../dist/assets/users/raj_saldanha.jpg",
    "../../dist/assets/users/wesley_cooper.jpg",
]

// validifying the add user input

const form = document.querySelector("#addMemberForm")
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const imageInput = document.querySelector("#image"); // Don't bother doing anything with this
const submitButton = document.querySelector("#addMember");

const valid = element => element.setCustomValidity("");
const invalid = element => element.setCustomValidity("Invalid");

const nameRegex = /[a-zA-Z]+/

function validateForm(){
    let isValid = (
        firstNameInput.value.length >= 1 && nameRegex.test(firstNameInput.value) &&
        lastNameInput.value.length >= 1 && nameRegex.test(lastNameInput.value) 
    )
    return isValid;
}

firstNameInput.addEventListener("input", () => firstNameInput.value.length >= 1 && nameRegex.test(firstNameInput.value)? valid(firstNameInput) : invalid(firstNameInput));
firstNameInput.addEventListener("click", () => firstNameInput.value.length >= 1 && nameRegex.test(firstNameInput.value) ? valid(firstNameInput) : invalid(firstNameInput));

lastNameInput.addEventListener("input", () => lastNameInput.value.length >= 1 && nameRegex.test(lastNameInput.value) ? valid(lastNameInput) : invalid(lastNameInput));
lastNameInput.addEventListener("click", () => lastNameInput.value.length >= 1 && nameRegex.test(lastNameInput.value) ? valid(nameInput) : invalid(lastNameInput));


form.addEventListener("submit", e => {
    e.preventDefault();
    // Add code to add user
    let user = new UserObject(firstNameInput.value, lastNameInput.value, images[Math.floor(Math.random()*images.length)], users)
        let element = new CreateUserElement(user);
        addUserElement(element, userSection);
        console.log("Yay, you added a new member! 🥳")
        console.log({firstName:firstNameInput.value,lastName:lastNameInput.value})
        // Add user to users
        // Save users
    form.reset();
    submitButton.setAttribute("disabled","");
})
form.addEventListener("input", e => {
    let isValid = validateForm();
    isValid?
        submitButton.removeAttribute("disabled"):
        submitButton.setAttribute("disabled","")
})