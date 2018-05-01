let taskArray = [];
let count = 0;

function addButton() {
    document.getElementById("hidden-add-form").style.visibility = "visible";
    document.getElementById('urgent-btn').checked = false;
}; //The plus sign button that shows the form

function cancelButton() {
    document.getElementById("hidden-add-form").style.visibility = "hidden";
    document.getElementById("my-form").reset();

    document.getElementById('urgent-btn').checked = false;
}; // The X sign button that cancel add task in the form

function addTask() {

    let ul = document.getElementById("list");
    let ulNew = document.getElementById("new-list");
    let urgent = document.getElementById("urgent-btn");
    let nameValue = document.querySelector("#task-name").value;
    let placeValue = document.querySelector("#task-place").value;
    let locationValue = document.querySelector("#select").value;
    let desciptionValue = document.querySelector("#description").value;
    let image = document.querySelector('#output');
    image.style.visibility = "hidden";

    let imageValue = image.getAttribute('src');


    let li = document.createElement("li");

    if (urgent.checked) {
        li.setAttribute("class", "urgent-task");
    } else {
        li.setAttribute("class", "task-on-list");
    }
    li.classList.add("task-on-" + count);


    if (nameValue != "") {
        let taskHeader = document.createElement("h3");
        taskHeader.setAttribute("id", "task-header");
        taskHeader.append((document.createTextNode(nameValue)));
        li.appendChild(taskHeader);
    } else {
        let taskHeader = document.createElement("h3");
        taskHeader.setAttribute("id", "task-header");
        taskHeader.append((document.createTextNode("Untitled")));
        li.appendChild(taskHeader);
    }


    if (placeValue != "") {
        let placeHeader = document.createElement("p");
        placeHeader.setAttribute("id", "place-header");
        let placeContent = document.createElement("strong");
        placeContent.append(document.createTextNode("Place: "));
        placeContent.setAttribute("class", "listItemHeader");
        placeHeader.append(placeContent);
        placeHeader.append(document.createTextNode(placeValue));
        li.appendChild(placeHeader);
    }

    if (locationValue != "") {
        let locationHeader = document.createElement("p");
        locationHeader.setAttribute("id", "location-header");
        let locationContent = document.createElement("strong");
        locationContent.append(document.createTextNode("location: "));
        locationContent.setAttribute("class", "listItemHeader");
        locationHeader.append(locationContent);
        locationHeader.append(document.createTextNode(locationValue));
        li.appendChild(locationHeader);
    }

    if (desciptionValue !== "") {
        let descriptionHeader = document.createElement("p");
        descriptionHeader.setAttribute("id", "location-header");
        let descriptionContent = document.createElement("strong");
        descriptionContent.append(document.createTextNode("Description: "));
        descriptionContent.setAttribute("class", "listItemHeader");
        descriptionHeader.append(descriptionContent);
        descriptionHeader.append(document.createTextNode(desciptionValue));
        li.appendChild(descriptionHeader);
    }

    let crossButton = document.createElement("button");
    crossButton.setAttribute("class", "task-list-btn-cross");
    crossButton.innerHTML = "&#10008";
    li.append(crossButton);
    crossButton.onclick = cancelTask;

    let checkedButton = document.createElement("button");
    checkedButton.setAttribute("class", "task-list-btn-check");
    checkedButton.innerHTML = "&#10004";
    li.append(checkedButton);
    checkedButton.onclick = takeTask;

    let taskTime = document.createElement("p");
    taskTime.setAttribute("class", "task-time");
    let taskHour = document.createElement("strong");
    taskHour.setAttribute("class", "current-hour");
    let currentHour = getHour();
    taskHour.append(document.createTextNode(currentHour));
    let taskDate = getDate();
    taskTime.append(taskHour);
    taskTime.append(" ");
    taskTime.append(document.createTextNode(taskDate));
    li.append(taskTime);

    let newLi = li.cloneNode(true);
    let newCrossButton = newLi.querySelector(".task-list-btn-cross");
    let newCheckButton = newLi.querySelector(".task-list-btn-check");
    newCrossButton.onclick = cancelTask;
    newCheckButton.onclick = takeTask;


    let waitingTask = ul.querySelector("#waiting-task");
    waitingTask.insertBefore(li, waitingTask.childNodes[0]);

    ulNew.insertBefore(newLi, ulNew.childNodes[0]);

    taskArray.push(li);

    count = count + 1;

    cancelButton();

};  // Submit form function that add other info to task list as a list item