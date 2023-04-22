const userSection = document.querySelector("#users");
const issueTable = document.querySelector("#issueTable");
const issueModal = document.querySelector("#iissueModal");
const showModalButton = document.querySelector("#showModal");

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

import { // importing functions
    UserObject, CreateUserElement, 
    addUserElement, updateUserElement, 
    IssueObject, CreateIssueElement, 
    addIssueElement, updateIssueElement, 
    updateMemberIssueCount, random
} from "../scripts/tools"
import {users, issues as issueArray} from "../scripts/data"
users.forEach(user => {let element = new CreateUserElement(user);addUserElement(element, userSection);})
users.forEach(user => populateUserOption(user))

if(issueArray.length > 0){
    issueArray.forEach(issue => {
        if(issue.status != "Closed"){
            let newIssue = new CreateIssueElement(issue, priorityStyle, users);
            addIssueElement(newIssue);
            /**Trying to sort issues */ addIssueElement(newIssue, document.querySelector(`#issueTable${issue.priority}${issue.status == "In Progress"?"In_Progress":issue.status}`))
        }
    })
    updateMemberIssueCount(users, issueArray)
} 

function populateUserOption(user, target = form.memberSelect){
    // add users to the issue options
    let option = document.createElement("option");
    option.value = user.id;
    option.innerText = `${user.firstName} ${user.lastName}`
    target.appendChild(option)
}

form.body.addEventListener("submit", e=>{
    e.preventDefault();
    if(e.submitter == document.querySelector("button#cancel")){
        return;
    }
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
    let issue = new IssueObject(summary, description, member, priority, status, dateAssign, dateDue, issueArray)
    issueArray.push(issue)
    saveIssues();
    // add issue to page
    let newIssue = new CreateIssueElement(issue, priorityStyle, users);
    addIssueElement(newIssue);
    // increment members issue count
    updateMemberIssueCount(users, issueArray);
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
/* Editing an Issue:
    I should be able to pass the issue as the value for each input

*/

// I'm not deleting the below function because I still want to try adding updating issues. This function has the logic for filling out a form, but the date was a little iffy.

// function updateIssueEvent(event){
//     // Get the issue from the issue array
//     console.log("You Clicked an ISSUE!")
//     let element = event.target.parentElement;
//     console.log(element)
//     let issueId = element.dataset.id;
//     console.log(issueId)
//     let issueObject = issueArray.find(issue => issue.id == issueId)
//     console.log(issueObject)

//     // populate form
//     console.log(form)
//     form.title.innerText = `Updating issue ${issueId}`;
//     form.issueSummary.value = issueObject.summary;
//     form.issueDescription.value = issueObject.description;
//     form.memberSelect.value = issueObject.assigneeID;
//     form.prioritySelect.value = issueObject.priority;
//     form.statusSelect.value = issueObject.status;

//     form.dateAssign.value = new Date(issueObject.dateStart).toISOString().substr(0, 10);
    
//     form.dateAssign.focus();
//     // form.dateAssign.style.opacity = 1;
//     // form.dateAssign.classList.add("active")

//     form.dateDue.value = new Date(issueObject.dateDue).toISOString().substr(0, 10);
//     form.dateDue.style.opacity = 1;
//     form.dateDue.classList.add("active")

    
// }

/**I want to sort the issues on the main page now that I've got an issues page:
 * First off this is for active issues so don't display closed issues
 * Second sort by priority:
 *      Critical
 *      High
 *      Medium
 *      Low
 * Third, sort by Status:
 *      New
 *      In Progress
 *      Resolved
 */