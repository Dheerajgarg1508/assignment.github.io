// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
var arrayOne = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var arrayTwo = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var arrayThree = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var arrayFour = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var arrayFive = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

var finalWord = '';
var randomWord = '';

// Preload the audio file for hover sound
var hoverSound = new Audio('sounds/button-hover.mp3'); // Update path if necessary
hoverSound.preload = 'auto';
hoverSound.load();  // Force the audio to load immediately

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* Event Listeners
-------------------------------------------------- */
function buttonOne() {
    finalWord += ' ' + arrayOne[getRandomInt(arrayOne.length)];
    document.getElementById("finalWordPrint").innerHTML = finalWord;
}

function buttonTwo() {
    finalWord += ' ' + arrayTwo[getRandomInt(arrayTwo.length)];
    document.getElementById("finalWordPrint").innerHTML = finalWord;
}

function buttonThree() {
    finalWord += ' ' + arrayThree[getRandomInt(arrayThree.length)];
    document.getElementById("finalWordPrint").innerHTML = finalWord;
}

function buttonFour() {
    finalWord += ' ' + arrayFour[getRandomInt(arrayFour.length)];
    document.getElementById("finalWordPrint").innerHTML = finalWord;
}

function buttonFive() {
    finalWord += ' ' + arrayFive[getRandomInt(arrayFive.length)];
    document.getElementById("finalWordPrint").innerHTML = finalWord;
}

function buttonRandom() {
    finalWord = '';
    document.getElementById("finalWordPrint").innerHTML = finalWord;

    randomWord = arrayOne[getRandomInt(arrayOne.length)] +
        ' ' + arrayTwo[getRandomInt(arrayTwo.length)] +
        ' ' + arrayThree[getRandomInt(arrayThree.length)] +
        ' ' + arrayFour[getRandomInt(arrayFour.length)] +
        ' ' + arrayFive[getRandomInt(arrayFive.length)];

    speakNow(randomWord);
    document.getElementById("randomWordPrint").innerHTML = randomWord;
    window.alert(randomWord);
}

function buttonClear() {
    finalWord = '';
    randomWord = '';
    document.getElementById("finalWordPrint").innerHTML = finalWord;
    document.getElementById("randomWordPrint").innerHTML = randomWord;
    synth.cancel(); // Cancels ongoing speech synthesis
}

function buttonSpeach() {
    if (finalWord) speakNow(finalWord);
    if (randomWord) speakNow(randomWord);
}

// Function to play sound on hover
function playHoverSound() {
    hoverSound.currentTime = 0; // Reset the sound to start from the beginning
    hoverSound.play().catch((error) => {
        console.log("Error playing sound:", error);
    });
}

// Select all buttons and attach event listener for mouseover
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseover', playHoverSound);
});
