let todo = [];
let req = prompt("Enter Your request here");

while (true) {
    if (req=="quit") {
        console.log("quitting the App");
        break;
    }

    if (req=="list") {
        console.log("-----------------");
        for (task of todo) {
            console.log(task);
            
        }
        console.log("-----------------");
    }else if (req=="add"){
        let task=prompt("Enter the task which you want to add");
        todo.push(task);
        console.log("Task Added");
    }else if (req=="del"){
        let delk=prompt("Enter the task which you want to delete");
        todo.splice(delk,1);
        console.log("Task Deleted");
    }else{
        console.log("Wrong request detected");
    }
    req= prompt("Enter Your request here");
}
