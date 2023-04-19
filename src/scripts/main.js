/* 
check if there is any localstorage
    if there is then take the issues and team form local storage
    else create the team and initialise an issues array
        the issue and team can both be empty

schema for users
    "id": "tm1",
    "firstName": "Lea",
    "lastName": "Ross",
    "imgSrc": "./assets/users/lea_ross.jpg",
    "issuesAssigned": 0

schema for issues
    "id"
    "summary"
    "description"
    "assignee-id"
    "priority"
    "status"
    "date-start"
    "date-due"
    "change-log":[]
*/

const userSection = document.querySelector("#users");
const issueTable = document.querySelector("#issueTable");

const form = {
    body: document.querySelector("#issueForm"),
    title: document.querySelector("#issueForm .modal-title"),
    
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
    // let b = a.replaceAll("},", "}|").split("|")
    // console.log("SPLIT")
    // console.log(b)
    // let c = b.map(user =>JSON.parse(user));
    // console.log("PARSE")
    // console.log(c)
    // users = c
    users = localStorage.getItem("team").replaceAll("},", "}|").split("|").map(user =>JSON.parse(user));
}

console.log(users)
users.forEach(user => UserElement(user))
users.forEach(user => UserOption(user))

let issues = [];
// console.log("ISSUES")
// garbage
// let p = ["Low", "Medium", "High", "Critical"]
// for(let i = 0; i < 10; i++){
//     issues.push(new IssueObject("Summary", "Desc", "tm1", p[random(p)], "New", Date.now(), Date.now()))
// }
// console.log(issues)
// issues.forEach(issue => IssueElement(issue))

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

function UserElement(user, target = userSection){
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
    target.appendChild(container)
    return
}

function UserOption(user, target = form.memberSelect){
    // add users to the issue options
    let option = document.createElement("option");
    option.value = user.id;
    option.innerText = `${user.firstName} ${user.lastName}`
    target.appendChild(option)
}

function IssueObject(summary, description, assigneeID, priority, status, dateStart, dateDue){
    let issue = {
        id:0, // This needs to be random, but CBA
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

function IssueElement(issue, target = issueTable){
    let row = document.createElement("tr");
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
    target.appendChild(row);
    return
}

function random(a){
    // This is to create junk data
    return Math.floor(Math.random()*a.length)
}

form.addIssue.addEventListener("click", e=>{
    console.log("ADD ISSUE")
    // get data from elements
    let summary = form.issueSummary.value;
    let description = form.issueDescription.value;
    let member = form.memberSelect.value;
    let priority = form.prioritySelect.value;
    let status = form.statusSelect.value;
    let dateAssign = form.dateAssign.value;
    let dateDue = form.dateDue.value;
    console.log({
        summary, description, member, priority, status, dateAssign,dateDue
    })
    // create new issue
    let issue = new IssueObject(summary, description, member, priority, status, dateAssign, dateDue)
    // add issue to page
    issues.push(issue)
    IssueElement(issue)
    // increment members issue count
    let targetMember = users.find(user => user.id == member);
    targetMember.issuesAssigned++;
    document.querySelector(`#${targetMember.id} .badge`).innerText = targetMember.issuesAssigned;

    // update page
})

function updateAllUserElementIssueNumbers(){
    users.forEach(user =>  document.querySelector(`#${user.id} .badge`).innerText = user.issuesAssigned);
}












/**TODO
 *  Handle appending issues sensibly
 *      By default the no issue sign should be up
 *      If it is and I'm adding an issue then take the sign down, show the table, and add the issue
 *  Handle updating the users sensibly
 *      If I add the user ID to the team-member div then I can select the div and update the child issue number element easily
 *  Handle saving and loading issues
 * 
 *  Handle updating issues
 * 
 *  Handle form validation
 *      This one is kind of important as it's the entire premise of Project 11
 * 
 *  Create the other pages
 *      Contact
 *      Issue List
 *      Team List
 */