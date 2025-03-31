let display = document.getElementById("display");

function appendCharacter(char) {
    display.innerHTML += char;
}

function clearDisplay() {
    display.innerHTML = "";
}

function deleteOne() {
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.innerHTML;
        let answer = eval(expression);

        // 30% chance of giving a wrong answer
        if (Math.random() < 0.3) {
            let error = Math.floor(Math.random() * 10) - 5; // Random error between -5 and +5
            answer += error;
        }

        // Show operation above and result below
        display.innerHTML = `${expression} <br> = ${answer}`;
    } catch {
        display.innerHTML = "Error";
    }
}
