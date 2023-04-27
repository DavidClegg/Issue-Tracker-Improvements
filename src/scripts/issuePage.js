import {users, issues} from "../scripts/data.js"
// OldVersion:{
//     const urlMatch = /\?is[0-9]+/
//     const validTarget = urlMatch.test(window.location.search);
//     const targetID = validTarget?urlMatch.exec(window.location.search)[0].replace("?",""):"NO VALID ISSUE";
//     console.log(targetID);
//     const targetIssue = issues.find(issue => issue.id == targetID);
//     console.log(targetIssue);
//     const issueMember = users.find(user=> user.id == targetIssue.assigneeID)
//     console.log(issueMember);
    
    
//     const priorityStyle = {"Low":"bg-info","Medium":"bg-warning","High":"bg-danger","Critical":"bg-dark"}
//     const priorityTextStyle = {"Low":"text-dark","Medium":"text-dark","High":"text-white","Critical":"text-white"}
    
//     const pageElements = {
//         title : document.querySelector("#pageTitle"),
//         id : document.querySelector("#issueIDElement"),
//         assignee : {
//             image: document.querySelector("#assigneeImage"),
//             name: document.querySelector("#assigneeName"),
//         },
//         startdate : document.querySelector("#startDateElement"),
//         duedate : document.querySelector("#dueDateElement"),
//         status : document.querySelector("#issueStatusElement"),
//         priority : document.querySelector("#issuePriorityElement"),
//         summary : document.querySelector("#issueSummaryElement"),
//         description : document.querySelector("#issueDescriptionElement"),
//         logTable : document.querySelector("#issueLogTable"),
//     }
    
//     pageElements.title.innerText = `Issue: ${targetIssue.id}`
//     pageElements.id.innerText = `${targetIssue.id}`
//     pageElements.assignee.image.src = issueMember.imgSrc;
//     pageElements.assignee.name.innerText = `${issueMember.firstName} ${issueMember.lastName}`;
//     pageElements.startdate.innerText = new Date(targetIssue.dateStart).toLocaleString("en-GB", {"dateStyle":"short"});
//     pageElements.duedate.innerText = new Date(targetIssue.dateDue).toLocaleString("en-GB", {"dateStyle":"short"});
//     pageElements.status.innerText = targetIssue.status;
//     pageElements.priority.innerText = targetIssue.priority;
//     pageElements.priority.classList.add(priorityStyle[targetIssue.priority]);
//     pageElements.priority.classList.add(priorityTextStyle[targetIssue.priority]); // changing this is going to be a bit of a pain
//     pageElements.summary.innerText = targetIssue.summary;
//     pageElements.description.innerText = targetIssue.description;
// }

UpdateIssue:{
    const urlMatch = /\?is[0-9]+/
    const validTarget = urlMatch.test(window.location.search);
    const targetID = validTarget?urlMatch.exec(window.location.search)[0].replace("?",""):"NO VALID ISSUE";
    console.log(targetID);
    const issue = issues.find(issue => issue.id == targetID);
    console.log(issue);
    const member = users.find(user=> user.id == issue.assigneeID)
    console.log(member);

    const priorityStyle = {
        "Low":"text-bg-info",
        "Medium":"text-bg-warning",
        "High":"text-bg-danger",
        "Critical":"text-bg-dark"
    }

    const el = {
        title : document.querySelector("#pageTitle"),
        id : document.querySelector("#Issue #ID"),
        members: document.querySelector("#Issue #MemberDropDown"),
        assignee : {
            image: document.querySelector("#Issue #Image"),
            name: document.querySelector("#Issue #Name"),
        },
        startdate : document.querySelector("#Issue #Start"),
        duedate : document.querySelector("#Issue #Due"),
        status : document.querySelector("#Issue #Status"),
        priority : document.querySelector("#Issue #Priority"),
        summary : document.querySelector("#Issue #Summary"),
        description : document.querySelector("#Issue #Description"),
        logTable : document.querySelector("#issueLogTable"),
    }

    el.title.innerText = `Issue: ${issue.id}`;
    el.id.innerText = `${issue.id}`;
    el.assignee.image.src = member.imgSrc;
    el.assignee.name.innerText = `${member.firstName} ${member.lastName}`;
    el.startdate.innerText = new Date(issue.dateStart).toLocaleString("en-GB", {"dateStyle":"short"});
    el.duedate.innerText = new Date(issue.dateDue).toLocaleString("en-GB", {"dateStyle":"short"});
    el.status.innerText = issue.status;
    el.priority.innerText = issue.priority;
    el.priority.parentElement.classList.add(priorityStyle[issue.priority]);
    el.summary.innerText = issue.summary;
    el.description.innerText = issue.description;

    const edit = {
        // Inputs
        due: document.querySelector("#Issue #DueButton"),
        start:document.querySelector("#Issue #StartButton"),
        summary:document.querySelector("#Issue #SummaryButton"),
        description:document.querySelector("#Issue #DescriptionButton"),
        // Dropdowns
        status:{
            new: document.querySelector("#Issue #StatusNew"),
            progress: document.querySelector("#Issue #StatusProgress"),
            resolved: document.querySelector("#Issue #StatusResolved"),
            closed: document.querySelector("#Issue #StatusClosed"),
        },
        priority:{
            low: document.querySelector("#Issue #PriorityLow"),
            medium: document.querySelector("#Issue #PriorityMedium"),
            high: document.querySelector("#Issue #PriorityHigh"),
            critical: document.querySelector("#Issue #PriorityCritical"),
        },
        members:{},// members might be handled another way, by adding the event to the element that's created when populating the list
    }

    const invalid = {
        due:document.querySelector("#Issue #DueInvalid"),
        start:document.querySelector("#Issue #StartInvalid"),
        summary:document.querySelector("#Issue #SummaryInvalid"),
        description:document.querySelector("#Issue #DescriptionInvalid")
    }

    // Dates
    edit.due.addEventListener("click", e => {
        let newInput = document.createElement("input")
        newInput.setAttribute("type","date")
        // Convert the due date from a unix timestamp number to a valid min date format yyyy-mm-dd 
        // This was a pain, but it removes the need to add validation because my validation was only checking that the due date was on or after the start date anyway
        newInput.setAttribute("min", new Date(issue.dateStart).toISOString().slice(0, 10))
        let dueDateParent = el.duedate.parentElement;
        dueDateParent.replaceWith(newInput)
        newInput.valueAsNumber = issue.dateDue; // This doesn't keep the updated value until saving is implemented
        newInput.focus()
        newInput.addEventListener("input", e =>{
            // SAVE
            console.log(newInput.value); 
            newInput.replaceWith(dueDateParent);
            el.duedate.innerText =  new Date(newInput.value).toLocaleString("en-GB", {"dateStyle":"short"});
        });
    })

    edit.start.addEventListener("click", e => {
        let newInput = document.createElement("input")
        newInput.setAttribute("type","date")
        newInput.setAttribute("max", new Date(issue.dateStart).toISOString().slice(0, 10))
        let startDateParent = el.startdate.parentElement;
        startDateParent.replaceWith(newInput)
        newInput.valueAsNumber = issue.dateStart;
        newInput.focus()
        newInput.addEventListener("input", e =>{
            // SAVE
            console.log(newInput.value); 
            newInput.replaceWith(startDateParent);
            el.startdate.innerText =  new Date(newInput.value).toLocaleString("en-GB", {"dateStyle":"short"});
        });
    })

    // Summary
    edit.summary.addEventListener("click", e => {
        let inputWrapper = document.createElement("div")
        inputWrapper.classList.add("row")
        inputWrapper.classList.add("col-md-12")
        inputWrapper.classList.add("flex-row")
        inputWrapper.classList.add("gx-0")
        let newInput = document.createElement("input")
        newInput.value = issue.summary;
        newInput.classList.add("col-md-10")
        newInput.classList.add("p-3")
        let newButton = document.createElement("button")
        newButton.innerText = "Enter";
        newButton.classList.add("col-md-2")

        inputWrapper.appendChild(newInput);
        inputWrapper.appendChild(newButton);

        let summaryParent = el.summary.parentElement;
        summaryParent.replaceWith(inputWrapper)
        newInput.focus()
        newInput.addEventListener("input", e=>{
            // Validate
            if(newInput.value.length >= 1){
                newButton.removeAttribute("disabled")
                invalid.summary.style.display = "none"
            } else{
                newButton.setAttribute("disabled", "")
                invalid.summary.style.display = "block"
            }
        })
        newButton.addEventListener("click", e =>{ 
            // SAVE
            console.log(newInput.value); 
            inputWrapper.replaceWith(summaryParent);
            el.summary.innerText =  newInput.value;
        });
    })

    // Description
    edit.description.addEventListener("click", e => {
        let inputWrapper = document.createElement("div")
        inputWrapper.classList.add("col-md-12")
        let newInput = document.createElement("textarea")
        newInput.value = issue.description;
        newInput.classList.add("col-md-12")
        newInput.classList.add("p-3");
        newInput.setAttribute("style", "height: 12rem")
        let newButton = document.createElement("button")
        newButton.innerText = "Enter";
        newButton.classList.add("col-md-2");
        newButton.classList.add("float-end");

        inputWrapper.appendChild(newInput);
        inputWrapper.appendChild(newButton);

        let descriptionParent = el.description.parentElement;
        descriptionParent.replaceWith(inputWrapper)
        newInput.focus()
        newInput.addEventListener("input", e=>{
            // Validate
            if(newInput.value.length >= 1){
                newButton.removeAttribute("disabled")
                invalid.description.style.display = "none"
            } else{
                newButton.setAttribute("disabled", "")
                invalid.description.style.display = "block"
            }
        })
        newButton.addEventListener("click", e =>{ 
            // VALIDATE AND SAVE
            console.log(newInput.value); 
            inputWrapper.replaceWith(descriptionParent);
            el.description.innerText =  newInput.value;
        });
    })

    // Status dropdown
    edit.status.new.addEventListener("click", e=>{
        el.status.innerText = "New"
        // SAVE
    })
    edit.status.progress.addEventListener("click", e=>{
        el.status.innerText = "In Progress"
        // SAVE
    })
    edit.status.resolved.addEventListener("click", e=>{
        el.status.innerText = "Resolved"
        // SAVE
    })
    edit.status.closed.addEventListener("click", e=>{
        el.status.innerText = "Closed"
        // SAVE
    })

    // Priority dropdown
    edit.priority.low.addEventListener("click", e=>{
        priorityChange("Low")
    })
    edit.priority.medium.addEventListener("click", e=>{
        priorityChange("Medium")
    })
    edit.priority.high.addEventListener("click", e=>{
        priorityChange("High")
    })
    edit.priority.critical.addEventListener("click", e=>{
        priorityChange("Critical")
    })

    function priorityChange(priority){
        let parent = el.priority.parentElement;
        parent.classList.remove(priorityStyle.Low);
        parent.classList.remove(priorityStyle.Medium);
        parent.classList.remove(priorityStyle.High);
        parent.classList.remove(priorityStyle.Critical);
        el.priority.innerText = priority;
        parent.classList.add(priorityStyle[priority]);
        // SAVE
    }

    // Members dropdown
    
    /**                         li.dropdown-item.border-bottom
                                    .col-md-12.pb-2
                                        img.rounded-circle.me-2(src="https://mdbootstrap.com/img/new/avatars/8.jpg",style="width: 45px; height: 45px")
                                        span John Doe */

    users.forEach(user => {
        let userOption = document.createElement("li");
            userOption.classList.add("dropdown-item");
            userOption.classList.add("border-bottom");
        let innerDiv = document.createElement("div");
            innerDiv.classList.add("col-md-12");
            innerDiv.classList.add("pb-2");
        let image = document.createElement("img");
            image.classList.add("rounded-circle");
            image.classList.add("me-2");
            image.setAttribute("style", "width: 45px; height: 45px;");
            image.setAttribute("src", user.imgSrc);
        let name = document.createElement("span");
            name.innerText = `${user.firstName} ${user.lastName}`;
        
        innerDiv.appendChild(image);
        innerDiv.appendChild(name);

        userOption.appendChild(innerDiv);
        userOption.addEventListener("click", e => userOptionFunction(e, user));

        el.members.appendChild(userOption);
    })

    function userOptionFunction(e, user){
        e.preventDefault()
        el.assignee.image.src = user.imgSrc;
        el.assignee.name.innerText = `${user.firstName} ${user.lastName}`;
        // SAVE
    }


    function save(field, value){
        // log[issue.id].push([Date.now(), field, value]);
        issue[field] = value;
    }

    // Handle input validation
    


    // Handle Saving
}