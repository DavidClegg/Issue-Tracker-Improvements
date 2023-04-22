// User Object and Element functions
export function UserObject(firstName, lastName, imgSrc, usersArray = users){
    // This function creates a user object
    /// This is to expand the number of users on a team
    let randomNumber;
    // I'm using a random number, but I should probably just use the length of the users array and just keep incrementing 
    let collision = true;
    while(collision){
        randomNumber = Math.floor(Math.random() * 1000);
        collision = false
        for(let user of usersArray){
            if(user.id == "tm"+randomNumber){
                collision = true
            } 
        }
    }
    return {id: "tm"+randomNumber, firstName:firstName, lastName:lastName, imgSrc:imgSrc, issuesAssigned:0}
}
export function CreateUserElement(user){
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
export function addUserElement(userElement, target = userSection){
    target.appendChild(userElement);
}
export function updateUserElement(user){
    // Find user element on page
    let oldUser = document.querySelector(`#${user.id}`);
    let newUser = new CreateUserElement(user);
    oldUser.replaceWith(newUser);
}   

// Issue Object and Element functions
export function IssueObject(summary, description, assigneeID, priority, status, dateStart, dateDue, issueArray){
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
export function CreateIssueElement(issue, priorityStyle, users){
    let row = document.createElement("tr");
    row.dataset.id = issue.id;
    // // // For Modal
    // row.dataset.mdbToggle = "modal"
    // row.dataset.mdbTarget = "#issueModal"
    // row.setAttribute('href',`/issue.html?${issue.id}`)
    row.setAttribute("onclick", `window.location.href = "./issue.html?${issue.id}"`)
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
export function addIssueElement(issueElement, target = issueTable){
    target.appendChild(issueElement);
    // issueElement.addEventListener("click", updateIssueEvent)
    issueElement.addEventListener("click", e=>console.log("Click"))
}
export function updateIssueElement(issue){
    // This might also have to update the user.assignedIssues variables for both users
    let oldIssue = document.querySelector(`#${issue.id}`);
    let newIssue = new CreateIssueElement(issue);
    oldIssue.replaceWith(newIssue);
}

// Extra tools
export function updateMemberIssueCount(users, issueArray){
    let member;
    let targetMember;
    users.forEach(user => user.issuesAssigned = 0);
    issueArray.forEach(issue => {
        if(issue.status != "Closed"){
            member = issue.assigneeID;
            targetMember = users.find(user => user.id == member);
            targetMember.issuesAssigned++;
        }
        updateUserElement(targetMember);
    })
    
    localStorage.setItem("team", users.map(user=>JSON.stringify(user)).toString());
}
export function random(min = 0, max){
    // This is to create junk data
    return Math.floor(min + (Math.random() * (max - min)))
}
function save(){/**I want this to be a save for my 3 localStorages */}

/**
 * Used https://json-generator.com/ to generate the issue data with:
[
  '{{repeat(30)}}',
  {
    id: 'is' + '{{index()}}',
    summary: '{{lorem(integer(1,5), "words")}}',
    descript: '{{lorem(1, "paragraphs")}}',
    assigneeID: 'tm' + '{{integer(1,8)}}',
    priority:'{{random("Low", "Medium", "High", "Critical")}}', //
    status:'{{random("New", "In Progress", "Resolved", "Closed")}}', //
    dateStart:'{{integer(1681430400000, 1688083200000)}}',
    dateDue:function () { return this.dateStart + Math.floor(Math.random() * 6652800000); }
  }
]
then needed to add the id to each object manually
 */