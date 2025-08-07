const container = document.querySelector("#container");

const content = document.createElement("div"); // creates the div element
content.classList.add("content"); // adds the class to the div element
content.textContent = "this is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.classList.add("red-text");
redText.textContent = "Hey, I'm red!";
container.appendChild(redText);
redText.style.color = "red";

const blueHeading = document.createElement("h3");
blueHeading.classList.add("blue-heading");
blueHeading.textContent = "Hey, I'm a blue h3!";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);

const newDiv = document.createElement("div");
newDiv.classList.add("new-div");
newDiv.style.backgroundColor = "pink";
newDiv.style.border = "2px solid black";
const newHeading = document.createElement("h1");
newHeading.classList.add("new-heading");
newHeading.textContent = "I'm a div";
const newParagraph = document.createElement("p");
newParagraph.classList.add("new-paragraph");
newParagraph.textContent = "ME TOO!"

newDiv.appendChild(newHeading);
newDiv.appendChild(newParagraph);

container.appendChild(newDiv);


