const buttons = document.querySelectorAll(".btn");
const equals = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

//event handling for displaying content on the screen when a button is pressed
for (let button of buttons) {
    button.addEventListener("click", function () {
        document.getElementById("calc").value += this.value;
    });
}

// event handling for calculating the output when equal to key is pressed
equals.addEventListener("click", () => {
    let x = document.getElementById("calc").value;
    let y = eval(x);
    document.getElementById("calc").value = y;
});


//event handling for clearing the display

clearButton.addEventListener('click', () => {
    document.getElementById("calc").value = "";
});
