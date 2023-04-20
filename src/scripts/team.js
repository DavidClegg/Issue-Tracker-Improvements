// add existing team to page

const userSection = document.querySelector("#users");

import team from "../../dist/assets/data/team.json";
let users;
if(localStorage.getItem("team") == null){
    console.log("local storage get item team is null");
    users = [...Object.values(team)];
    localStorage.setItem("team", users.map(user=>JSON.stringify(user)).toString())
} else {
    users = localStorage.getItem("team").replaceAll("},", "}|").split("|").map(user =>JSON.parse(user));
}

users.forEach(user => {let element = new CreateUserElement(user);addUserElement(element);})

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

function UserObject(firstName, lastName, imgSrc){
    return {id: "tm"+users.length, firstName:firstName, lastName:lastName, imgSrc:imgSrc, issuesAssigned:0}
}

function CreateUserElement(user){
    let container = document.createElement("div");
    container.classList.add("team-member");
    container.id = user.id;
        let image = document.createElement("img");
        image.classList.add("avatar");
        image.classList.add("rounded-circle");
        image.classList.add("mb-3");
        image.classList.add("shadow-4-strong");
        image.alt = "avatar";
        image.src = user.imgSrc;

        let name = document.createElement("h5");
        name.classList.add("mb-2");
        name.innerText = `${user.firstName} ${user.lastName}`;

        let issueDetail = document.createElement("p");
        issueDetail.classList.add("text-muted")
        issueDetail.classList.add("issue-detail")
            let issuedNum = document.createElement("span");
            issuedNum.classList.add("badge");
            issuedNum.classList.add("issue-number");
            issuedNum.innerText = user.issuesAssigned;
            let assigned = document.createElement("span");
            assigned.innerText = "Assigned";
        issueDetail.appendChild(issuedNum);
        issueDetail.appendChild(assigned);
    container.appendChild(image)
    container.appendChild(name)
    container.appendChild(issueDetail)
    return container
}

function addUserElement(userElement, target = userSection){
    target.appendChild(userElement);
}

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
    let user = new UserObject(firstNameInput.value, lastNameInput.value, images[Math.floor(Math.random()*images.length)])
        let element = new CreateUserElement(user);
        addUserElement(element);
        console.log("Yay, you added a new member! 🥳")
        console.log({firstName:firstNameInput.value,lastName:lastNameInput.value})
    form.reset();
    submitButton.setAttribute("disabled","");
})
form.addEventListener("input", e => {
    let isValid = validateForm();
    isValid?
        submitButton.removeAttribute("disabled"):
        submitButton.setAttribute("disabled","")
})