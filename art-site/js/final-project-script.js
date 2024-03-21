function generateGreeting() {
    let input = document.querySelector('#user-name');
    let userInput = input.value;
    alert('Hello ' + userInput + '!');
}

let submit = document.querySelector('#submit').addEventListener('click', generateGreeting);