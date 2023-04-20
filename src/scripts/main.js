const userSection = document.querySelector("#users");
const issueTable = document.querySelector("#issueTable");
const issueModal = document.querySelector("#iissueModal");
const showModalButton = document.querySelector("#showModal");
// const myModal = new mdb.Modal(issueModal);

const form = {
    body: document.querySelector("#issueForm"),
    title: document.querySelector("#modal-title"),
    
    issueSummary: document.querySelector("#issue-summary"),
    issueDescription: document.querySelector("#issue-description"),
    memberSelect: document.querySelector("#member-select"),
    prioritySelect: document.querySelector("#priority-select"),
    statusSelect: document.querySelector("#status-select"),
    dateAssign: document.querySelector("#date-assign"),
    dateDue: document.querySelector("#date-due"),

    addIssue: document.querySelector("#addIssue"),
}

const priorityStyle = {"Low":"table-info","Medium":"table-warning","High":"table-danger","Critical":"table-dark"}

import team from "../../dist/assets/data/team.json";
let users;
if(localStorage.getItem("team") == null){
    console.log("local storage get item team is null");
    users = [...Object.values(team)];
    localStorage.setItem("team", users.map(user=>JSON.stringify(user)).toString())
} else {
    // let a = localStorage.getItem("team")
    // console.log("GET")
    // console.log(a)
    // // replacing the comma seperator with an uncommon symbol to make splitting easier
    // let b = a.replaceAll("},", "}|")
    // let c = b.split("|")
    // console.log("SPLIT")
    // console.log(c)
    // let d = c.map(user =>JSON.parse(user));
    // console.log("PARSE")
    // console.log(d)
    // users = d
    users = localStorage.getItem("team").replaceAll("},", "}|").split("|").map(user =>JSON.parse(user));
}

users.forEach(user => {let element = new CreateUserElement(user);addUserElement(element);})
users.forEach(user => populateUserOption(user))

// import issueJSON from "../../dist/assets/data/issues.json";
let issueArray = [];
// Load Issues
if(localStorage.getItem("issues") == null){
    console.log("local storage get issues is null");
    // issueArray = [...Object.values(issuesJSON)]; // This should be from import
    localStorage.setItem("issues", "{}")
} else {
    let a = localStorage.getItem("issues")
    console.log("GET")
    console.log(a)
    // replacing the comma seperator with an uncommon symbol to make splitting easier
    let b = a.replaceAll("},", "}|")
    let c = b.split("|")
    console.log("SPLIT")
    console.log(c)
    let d = c.map(issue =>JSON.parse(issue));
    console.log("PARSE")
    console.log(d)
    issueArray = d
}

if(issueArray.length > 0){
    issueArray.forEach(issue => {
        let newIssue = new CreateIssueElement(issue);
        addIssueElement(newIssue);
    })
    updateMemberIssueCount()
} 

function UserObject(firstName, lastName, imgSrc){
    // This function creates a user object
    /// This is to expand the number of users on a team
    let randomNumber;
    // I'm using a random number, but I should probably just use the length of the users array and just keep incrementing 
    let collision = true;
    while(collision){
        randomNumber = Math.floor(Math.random() * 1000);
        collision = false
        for(let user of users){
            if(user.id == "tm"+randomNumber){
                collision = true
            } 
        }
    }
    return {id: "tm"+randomNumber, firstName:firstName, lastName:lastName, imgSrc:imgSrc, issuesAssigned:0}
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

function updateUserElement(user){
    // Find user element on page
    let oldUser = document.querySelector(`#${user.id}`);
    let newUser = new CreateUserElement(user);
    oldUser.replaceWith(newUser);
}   


function populateUserOption(user, target = form.memberSelect){
    // add users to the issue options
    let option = document.createElement("option");
    option.value = user.id;
    option.innerText = `${user.firstName} ${user.lastName}`
    target.appendChild(option)
}

function IssueObject(summary, description, assigneeID, priority, status, dateStart, dateDue){
    let issue = {
        id:`is${issueArray.length}`, // This needs to be random, but CBA
        summary,
        description,
        assigneeID,
        priority,
        status,
        dateStart,
        dateDue,
        // changeLog: [],
        // The change log seems like a good idea, but I can't think how to do it atm
    }
    return issue
}

function CreateIssueElement(issue){
    let row = document.createElement("tr");
    row.dataset.id = issue.id;
    // // For Modal
    // row.dataset.mdbToggle = "modal"
    // row.dataset.mdbTarget = "#issueModal"
    // //
        let idCell = document.createElement("td");
        idCell.id = issue.id + "-idcell"
        idCell.innerText = issue.id
        let summaryCell = document.createElement("td");
        summaryCell.id = issue.id + "-summarycell"
        summaryCell.innerText = issue.summary
        let priorityCell = document.createElement("td");
        priorityCell.id = issue.id + "-prioritycell"
        priorityCell.innerText = issue.priority
        priorityCell.classList.add(priorityStyle[issue.priority])
        let statusCell = document.createElement("td");
        statusCell.id = issue.id + "-statuscell"
        statusCell.innerText = issue.status
        let dueCell = document.createElement("td");
        dueCell.id = issue.id + "-duecell"
        dueCell.innerText = new Date(issue.dateDue).toLocaleString("en-GB", {"dateStyle":"short"})
        let assignCell = document.createElement("td");
        assignCell.id = issue.id + "-assigncell"
        let user = users.find(user => user.id == issue.assigneeID)
        assignCell.innerText = `${user.firstName} ${user.lastName}`;
    row.appendChild(idCell);
    row.appendChild(summaryCell);
    row.appendChild(priorityCell);
    row.appendChild(statusCell);
    row.appendChild(dueCell);
    row.appendChild(assignCell);
    return row
}

function addIssueElement(issueElement, target = issueTable){
    target.appendChild(issueElement);
    //target.addEventListener("click", updateIssueEvent)
}

function updateIssueElement(issue){
    // This might also have to update the user.assignedIssues variables for both users
    let oldIssue = document.querySelector(`#${issue.id}`);
    let newIssue = new CreateIssueElement(issue);
    oldIssue.replaceWith(newIssue);
}

function random(a){
    // This is to create junk data
    return Math.floor(Math.random()*a.length)
}

form.body.addEventListener("submit", e=>{
    e.preventDefault();
    console.log("ADD ISSUE")
    // get data from elements
    let summary = form.issueSummary.value;
    let description = form.issueDescription.value;
    let member = form.memberSelect.value;
    let priority = form.prioritySelect.value;
    let status = form.statusSelect.value;
    let dateAssign = form.dateAssign.valueAsNumber;
    let dateDue = form.dateDue.valueAsNumber;
    // create new issue
    let issue = new IssueObject(summary, description, member, priority, status, dateAssign, dateDue)
    issueArray.push(issue)
    saveIssues();
    // add issue to page
    let newIssue = new CreateIssueElement(issue);
    addIssueElement(newIssue);
    // increment members issue count
    updateMemberIssueCount();
    // let targetMember = users.find(user => user.id == member);
    // // targetMember.issuesAssigned++;
    // // document.querySelector(`#${targetMember.id} .badge`).innerText = targetMember.issuesAssigned;
    
    // update page
    saveUsers();
    form.body.reset()
    form.addIssue.setAttribute("disabled", "")
})


// Validation Logic
const valid = element => element.setCustomValidity("");
const invalid = element => element.setCustomValidity("Invalid");

function validateForm(){
    let isValid = (
        form.issueSummary.value.length >= 1 &&
        form.issueDescription.value.length >= 1 &&
        form.memberSelect.value != "value" &&
        form.prioritySelect.value != "value" &&
        form.statusSelect.value != "value" &&
        form.dateDue.valueAsNumber >= form.dateAssign.valueAsNumber
    )
    return isValid
}

showModalButton.addEventListener("click", e=>{
    console.log("Show Modal Button was Clicked")
    form.title.innerText = `Add Issue`;
    form.body.reset()
    form.addIssue.setAttribute("disabled", "")
})
form.body.addEventListener("change", e=>{
    let isValid = validateForm()
    if(isValid){
        form.addIssue.removeAttribute("disabled")
    } else {   
        form.addIssue.setAttribute("disabled", "")
    }
})

form.issueSummary.addEventListener("input", e=>{
    console.log("Summary CHANGE")
    form.issueSummary.value.length >= 1 ?
        valid(form.issueSummary) : 
        invalid(form.issueSummary)
})
form.issueDescription.addEventListener("input", e=>{
    console.log("Description CHANGE")
    form.issueDescription.value.length >= 1 ?
        valid(form.issueDescription) : 
        invalid(form.issueDescription)
})
form.memberSelect.addEventListener("input", e=>{
    console.log("Member CHANGE")
    form.memberSelect.value != "value" ?
        valid(form.memberSelect) : 
        invalid(form.memberSelect)
})
form.prioritySelect.addEventListener("change", e=>{
    console.log("Priority CHANGE")
    form.prioritySelect.value != "value" ?
        valid(form.prioritySelect) : 
        invalid(form.prioritySelect)
})
form.statusSelect.addEventListener("change", e=>{
    console.log("Status CHANGE")
    form.statusSelect.value != "value" ?
        valid(form.statusSelect) : 
        invalid(form.statusSelect)
})
form.dateAssign.addEventListener("change", e=>{
    console.log("Date Assign CHANGE")
    form.dateDue.valueAsNumber >= form.dateAssign.valueAsNumber ?
        valid(form.dateDue) :
        invalid(form.dateDue)
})
form.dateDue.addEventListener("change", e=>{
    console.log("Date Due CHANGE")
    form.dateDue.valueAsNumber >= form.dateAssign.valueAsNumber ?
        valid(form.dateDue) :
        invalid(form.dateDue)
})

function saveIssues(){
    localStorage.setItem("issues", issueArray.map(issue=>JSON.stringify(issue)).toString())
}

function saveUsers(){
    localStorage.setItem("team", users.map(user=>JSON.stringify(user)).toString())
}

function updateMemberIssueCount(){
    let member;
    let targetMember;
    users.forEach(user => user.issuesAssigned = 0);
    issueArray.forEach(issue => {
        if(issue.status != "Closed"){
            member = issue.assigneeID;
            targetMember = users.find(user => user.id == member);
            targetMember.issuesAssigned++;
        }
    })
    updateUserElement(targetMember);
}

/* Editing an Issue:
    I should be able to pass the issue as the value for each input

*/

function updateIssueEvent(event){
    // Get the issue from the issue array
    console.log("You Clicked an ISSUE!")
    let element = event.target.parentElement;
    console.log(element)
    let issueId = element.dataset.id;
    console.log(issueId)
    let issueObject = issueArray.find(issue => issue.id == issueId)
    console.log(issueObject)

    // populate form
    console.log(form)
    form.title.innerText = `Updating issue ${issueId}`;
    form.issueSummary.value = issueObject.summary;
    form.issueDescription.value = issueObject.description;
    form.memberSelect.value = issueObject.assigneeID;
    form.prioritySelect.value = issueObject.priority;
    form.statusSelect.value = issueObject.status;

    form.dateAssign.value = new Date(issueObject.dateStart).toISOString().substr(0, 10);
    
    form.dateAssign.focus();
    // form.dateAssign.style.opacity = 1;
    // form.dateAssign.classList.add("active")

    form.dateDue.value = new Date(issueObject.dateDue).toISOString().substr(0, 10);
    form.dateDue.style.opacity = 1;
    form.dateDue.classList.add("active")

    
}