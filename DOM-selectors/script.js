var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");
 
 
function crossOut() {
    this.classList.toggle("done");
}
 
function removeBtn() {
    this.parentElement.remove();
}
 
function inputLength() {
    return input.value.length;
}
 
function createListElement() {
    var li = document.createElement("li");
    var createButton = document.createElement("button");
    var createButtonText = document.createTextNode("Delete");
    createButton.appendChild(createButtonText);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(createButton)
    ul.appendChild(li);
    createButton.addEventListener("click", removeBtn);
    li.addEventListener("click", crossOut)
    input.value = "";
}
 
liList.forEach(function(item, i) {
    var createButton = document.createElement("button");
    var createButtonText = document.createTextNode("Delete");
    createButton.appendChild(createButtonText);
    liList[i].appendChild(createButton);
    createButton.addEventListener("click", removeBtn);
    liList[i].addEventListener("click", crossOut);
    });
 
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
 
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
 
button.addEventListener("click", addListAfterClick);
 
input.addEventListener("keypress", addListAfterKeypress);