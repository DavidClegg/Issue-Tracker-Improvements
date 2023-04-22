import { addIssueElement, CreateIssueElement } from "../scripts/tools.js"
import {users, issues as issueArray, issueLogs} from "../scripts/data.js"


const priorityStyle = {"Low":"table-info","Medium":"table-warning","High":"table-danger","Critical":"table-dark"}

const tableBody = document.querySelector("#issueTable");
const clearIssuesButton = document.querySelector("#clearIssuesButton");

issueArray.forEach(issue => {
    let issueElement = CreateIssueElement(issue, priorityStyle, users);
    addIssueElement(issueElement, tableBody);
})

clearIssuesButton.addEventListener("click", e=>{
    let choice = confirm("Are you sure you want to do this?")
    console.log(choice)
    choice?
        console.log("NOOOO! WHAT HAVE YOU DONE!")
        : console.log("Oh, Thank god!")
})