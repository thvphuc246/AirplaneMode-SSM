function addButton() {
    document.getElementById("hidden-add-form").style.visibility = "visible";
}; //The plus sign button that shows the form

function cancelButton() {
    document.getElementById("hidden-add-form").style.visibility = "hidden";
    document.getElementById("my-form").reset();

    /* document.getElementById('urgent-btn').checked = false; */
}; // The X sign button that cancel add task in the form
