const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            let string = display.innerText.toString();
            display.innerText = "";
        } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "=") {
            if (display.innerText.substr(0, 1) == '√') {
                display.innerText = display.innerText.substr(1, display.innerText.length);
                // console.log("berhasil");
                display.innerText = Math.sqrt(eval(display.innerText));
            } else if (display.innerText.substr(display.innerText.length - 1, display.innerText.length) == '%') {
                display.innerText = display.innerText.substr(0, display.innerText.length - 1) + "/100";
                // console.log("berhasil");
                display.innerText = eval(display.innerText);
            } else {
                display.innerText = eval(display.innerText);
            }
        } else if (display.innerText == "" && item.id == "=") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }

    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};