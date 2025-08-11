const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btnTwo = document.querySelector("#btn-two");
btnTwo.addEventListener("click", () => {
    alert("Hello, World, again!");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

function alertFunctionTwo() {
    alert("YAY!!!!!!");
}

const btnThree = document.querySelector("#btn-three");
btnThree.onclick = alertFunctionTwo;

// btnThree.addEventListener("click", alertFunctionTwo)

const btnFour = document.querySelector("#btn-four");
btnFour.addEventListener("click", function (e) {
    // console.log(e.target);
    e.target.style.background = "lightblue";
});

