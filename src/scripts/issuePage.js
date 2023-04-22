// get issue
const urlMatch = /\?is[0-9]+/
const validTarget = urlMatch.test(window.location.search);
const targetID = validTarget?urlMatch.exec(window.location.search)[0].replace("?",""):"NO VALID ISSUE";
console.log(targetID);
import {users, issues} from "../scripts/data.js"
const targetIssue = issues.find(issue => issue.id == targetID);
console.log(targetIssue);
const issueMember = users.find(user=> user.id == targetIssue.assigneeID)
console.log(issueMember);


const priorityStyle = {"Low":"bg-info","Medium":"bg-warning","High":"bg-danger","Critical":"bg-dark"}
const priorityTextStyle = {"Low":"text-dark","Medium":"text-dark","High":"text-white","Critical":"text-white"}

const pageElements = {
    title : document.querySelector("#pageTitle"),
    id : document.querySelector("#issueIDElement"),
    assignee : {
        image: document.querySelector("#assigneeImage"),
        name: document.querySelector("#assigneeName"),
    },
    startdate : document.querySelector("#startDateElement"),
    duedate : document.querySelector("#dueDateElement"),
    status : document.querySelector("#issueStatusElement"),
    priority : document.querySelector("#issuePriorityElement"),
    summary : document.querySelector("#issueSummaryElement"),
    description : document.querySelector("#issueDescriptionElement"),
    logTable : document.querySelector("#issueLogTable"),
}

pageElements.title.innerText = `Issue: ${targetIssue.id}`
pageElements.id.innerText = `Issue: ${targetIssue.id}`
pageElements.assignee.image.src = issueMember.imgSrc;
pageElements.assignee.name.innerText = `${issueMember.firstName} ${issueMember.lastName}`;
pageElements.startdate.innerText = new Date(targetIssue.dateStart).toLocaleString("en-GB", {"dateStyle":"short"});
pageElements.duedate.innerText = new Date(targetIssue.dateDue).toLocaleString("en-GB", {"dateStyle":"short"});
pageElements.status.innerText = targetIssue.status;
pageElements.priority.innerText = targetIssue.priority;
pageElements.priority.classList.add(priorityStyle[targetIssue.priority]);
pageElements.priority.classList.add(priorityTextStyle[targetIssue.priority]); // changing this is going to be a bit of a pain
pageElements.summary.innerText = targetIssue.summary;
pageElements.description.innerText = targetIssue.description;


