// // Import users, issues, logs

export let users = [];
export let issues = [];
export let issueLogs = [];


import teamObject from "../../dist/assets/data/team.json";
import issueObject from "../../dist/assets/data/issues.json";
import issueLogObject from "../../dist/assets/data/issueLogs.json";

// if localstorage
localStorage.getItem("team")?
    users = fromLocal("team")
    : users = Object.values(teamObject);
localStorage.getItem("issues")?
    issues = fromLocal("issues")
    : issues = Object.values(issueObject);
localStorage.getItem("issueLogs")?
    issueLogs = fromLocal("issueLogs")
    : issueLogs = Object.values(issueLogObject);

function fromLocal(storageName){
    let itemString  = localStorage.getItem(storageName)
    let sanitisedString = itemString.replaceAll("},", "}|")
    let arrayOfStrings = sanitisedString.split("|")
    let arrayOfObjects = arrayOfStrings.map(item =>JSON.parse(item));
    return arrayOfObjects;
}

localStorage.setItem("team", users.map(user=>JSON.stringify(user)).toString());
localStorage.setItem("issues", issues.map(issue=>JSON.stringify(issue)).toString());
// localStorage.setItem("issueLogs", issueLogObject);

// export function save(target, data){}

// // The data-handling module for Users, Issues, and Logs(unimplemented)

// class Data{
//     constructor(storageName = ""){
//         this.array = [];
//         this.storageName = storageName;
//         // return this.array;
//     }
//     fromLocalStorage(storageName = this.storageName){
//         let itemString  = localStorage.getItem(storageName)
//         // replacing the comma seperator with an uncommon symbol to make splitting easier
//         let sanitisedString = itemString.replaceAll("},", "}|")
//         let arrayOfStrings = sanitisedString.split("|")
//         let arrayOfObjects = arrayOfStrings.map(item =>JSON.parse(item));
//         this.array = arrayOfObjects;
//     }
//     fromFile(fileObject){
//         // The file should always be a JSON object
//         this.array = [...Object.values(fileObject)];
//     }
//     save(storageName = this.storageName){
//         if(storageName == ""){
//             console.error("No Storage Name Given")
//             return;
//         }
//         let stringArray = this.array.map(item => JSON.stringify(item))
//         let string = stringArray.toString()
//         localStorage.setItem(storageName, string)
//     }
//     toArray(){
//         return this.array
//     }
// }

// // Users
// export const users = new Data("team");
// import teamJSON from "../../dist/assets/data/team.json";
// if(localStorage.getItem(users.storageName) == null){
//     if(Object.values(teamJSON).length > 0){
//         users.fromFile(teamJSON)
//     } 
// } else {
//     users.fromLocalStorage()
// }
// console.log("Users")
// console.log(users)
// users.save(); 
// // This is just a redundency to make sure there is a localStorage version of the array, in case it didn't already exist

// // Issues
// export const issues = new Date("issues");
// // import issuesJSON from "../../dist/assets/data/issues.json";
// if(localStorage.getItem(issues.storageName) == null){
//     // if(Object.values(issuesJSON).length > 0){
//     //     issues.fromFile(issuesJSON)
//     // } 
// } else {
//     issues.fromLocalStorage()
// }
// console.log("Issues")
// console.log(issues)
// // issues.save(); 


// // Log // Not Implemented Yet
// // export const log = new Date("issueLog");
// // import issueLogJSON from "../../dist/assets/data/issueLog.json";
// // if(localStorage.getItem(log.storageName) == null){
// //     if(Object.values(issueLogJSON).length > 0){
// //         log.fromFile(issueLogJSON)
// //     } 
// // } else {
// //     log.fromLocalStorage()
// // }
// // log.save(); 


