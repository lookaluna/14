const messages = [
    "Napewno?",
    "1000%??",
    "definitywnie?",
    "no wez",
    "bedzie mi przykro D:",
    "dostaniesz ta czekolade co chcialas 👀",
    "na 10000000%?",
    "masz jeszcze jedna probe",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}