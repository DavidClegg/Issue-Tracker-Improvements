/* 
check if there is any localstorage
    if there is then take the issues and team form local storage
    else create the team and initialise an issues array

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

import team from "../../dist/assets/data/team.json"
console.log(team)

let users = [];
let issues;

function User(firstName, lastName, imgSrc){
    let randomNumber;
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

let names = ["jim", "jo", "john", "james"]
for(let i = 0; i < 10; i++){
    users.push(new User(names[Math.floor(Math.random()*names.length)],names[Math.floor(Math.random()*names.length)],""))
}
console.log(users)