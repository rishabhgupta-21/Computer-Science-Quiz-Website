// Array of all Questions
const questions = [
    {
        question: 'The brain of any computer system is _____.',
        options: [
            { prompt: 'ALU', correct: false },
            { prompt: 'Memory', correct: false },
            { prompt: 'CPU', correct: true },
            { prompt: 'Control Unit', correct: false }
        ],
        selected: [false, -1]
    },

    {
        question: 'What is a Pixel?',
        options: [
            { prompt: 'Element of Analog Image', correct: false },
            { prompt: 'Element of Digital Image', correct: true },
            { prompt: 'Cluster of Analog Image', correct: false },
            { prompt: 'Cluster of Digital Image', correct: false }
        ],
        selected: [false, -1]
    },

    {
        question: 'What is a computer program that converts assembly language to machine language called?',
        options: [
            { prompt: 'Compiler', correct: false },
            { prompt: 'Interpreter', correct: false },
            { prompt: 'Assembler', correct: true },
            { prompt: 'Comparator', correct: false }
        ],
        selected: [false, -1]
    },

    {
        question: 'Which type of system puts the user into direct conversation with the computer through a keyboard?',
        options: [
            { prompt: 'Real Time Processing', correct: false },
            { prompt: 'Interactive Computer', correct: true },
            { prompt: 'Batch Processing', correct: false },
            { prompt: 'Time Sharing', correct: false }
        ],
        selected: [false, -1]
    },

    {
        question: 'What does ASCII stand for?',
        options: [
            { prompt: 'American Standard Code for Information Interchange', correct: true },
            { prompt: 'All Purpose Scientific Code for Information Interchange', correct: false },
            { prompt: 'American Security Code for Information Interchange', correct: false },
            { prompt: 'American Scientific Code for Information Interchange', correct: false }
        ],
        selected: [false, -1]
    },

    {
        question: 'Who developed JAVA programming language?',
        options: [
            { prompt: 'Edmund M. Clarke', correct: false },
            { prompt: 'James D. Foley', correct: false },
            { prompt: 'Douglas Engelbart', correct: false },
            { prompt: 'James Gosling', correct: true }
        ],
        selected: [false, -1]
    },

    {
        question: 'Moving processes from the Main Memory to the Disk is called _____.',
        options: [
            { prompt: 'Scheduling', correct: false },
            { prompt: 'Swapping', correct: true },
            { prompt: 'Spooling', correct: false },
            { prompt: 'Catching', correct: false }
        ],
        selected: [false, -1]
    },

    {
        question: 'How many layers are there in the TCP/IP Protocol?',
        options: [
            { prompt: '5', correct: false },
            { prompt: '7', correct: false },
            { prompt: '2', correct: false },
            { prompt: '4', correct: true }
        ],
        selected: [false, -1]
    },

    {
        question: 'Which of the follwing is NOT a Web Browser?',
        options: [
            { prompt: 'MOSAIC', correct: false },
            { prompt: 'WWW', correct: false },
            { prompt: 'Facebook', correct: true },
            { prompt: 'Netscape Navigator', correct: false }
        ],
        selected: [false, -1]
    },

    {
        question: 'A packet of information that travels between a browser and the web server is known as _____.',
        options: [
            { prompt: 'Adware', correct: false },
            { prompt: 'Spyware', correct: false },
            { prompt: 'Cookie', correct: true },
            { prompt: 'Malware', correct: false }
        ],
        selected: [false, -1]
    }
];

// Element objects
const question = document.querySelector('#question');
const optionsContainer = document.querySelector('#answer-buttons');
const nextButton = document.querySelector('#next-button button');
const replayButton = document.querySelector('#replay-button button');

// Variables
let currentQuestionIndex = 0;
let score = 0;


// Function to Start the Quiz

function startQuiz() {
    // Reset both to Zero
    currentQuestionIndex = 0;
    score = 0;

    replayButton.classList.add('hide');

    // Undoing the things we did in endQuiz Function.
    question.innerText = 'Question goes here!';
    optionsContainer.classList.remove('hide');
    question.classList.remove('scoring');

    showQuestion();
}


// Function that displays the question, options, implements click functionality for options, and provides logic for appearance and disappearance of the Next Button

function showQuestion() {
    // Hiding the Next Button every time a new question appears
    nextButton.classList.add('hide');

    // Variables that define the Current Question
    let currentQuestion = questions[currentQuestionIndex];
    let currentQuestionNumber = currentQuestionIndex + 1;

    // Display Question
    question.innerText = `${currentQuestionNumber}. ${currentQuestion.question}`;

    // Option Buttons
    for (let optionIndex = 0; optionIndex < currentQuestion.options.length; optionIndex++) {

        // Used for the below query to select the correct Option Button
        let optionNumber = optionIndex + 1;

        // Displaying each Option
        const optionButton = document.querySelector(`#answer-buttons .btn:nth-child(${optionNumber})`);
        optionButton.innerText = currentQuestion.options[optionIndex].prompt;

        // Click Functionality on Option Buttons
        optionButton.addEventListener('click', function (e) {
            // Option Buttons

            // If no option is selected when we click
            if (currentQuestion.selected[0] === false && currentQuestion.selected[1] === -1) {
                optionButton.classList.add('clicked');
                currentQuestion.selected = [true, optionIndex];
            }

            // If this same option is selected when we click
            else if (currentQuestion.selected[0] === true && currentQuestion.selected[1] === optionIndex) {
                optionButton.classList.remove('clicked');
                currentQuestion.selected = [false, -1];
            }

            // If another option is selected when we click
            else if (currentQuestion.selected[0] === true && currentQuestion.selected[1] !== optionIndex) {
                // Create an element for the currently selected option
                let selectedOptionNumber = currentQuestion.selected[1] + 1;
                const selectedOption = document.querySelector(`#answer-buttons .btn:nth-child(${selectedOptionNumber})`);

                // .clicked Effect
                selectedOption.classList.remove('clicked');
                optionButton.classList.add('clicked');

                // update the 'selected' array
                currentQuestion.selected = [true, optionIndex];
            }

            // Next Button Logic
            if (currentQuestion.selected[0] === true)
                nextButton.classList.remove('hide');
            else
                nextButton.classList.add('hide');
        });
    }
}


// Function that implements Click Functionality for the Next Button

nextButton.addEventListener('click', function () {
    let currentQuestion = questions[currentQuestionIndex];

    // Check if answer was correct
    let chosenOptionIndex = currentQuestion.selected[1];
    if (currentQuestion.options[chosenOptionIndex].correct)
        score++;

    // Remove '.clicked' from selected Option
    let chosenOptionNumber = chosenOptionIndex + 1;
    const chosenOption = document.querySelector(`#answer-buttons .btn:nth-child(${chosenOptionNumber})`);

    chosenOption.classList.remove('clicked');

    // increment currentQuestionIndex
    currentQuestionIndex++;

    // Show Next Question or End Quiz
    if (currentQuestionIndex === questions.length)
        endQuiz();
    else
        showQuestion();
});


// Function to display stuff after all questions have been answered

function endQuiz() {
    question.innerText = `You scored ${score}/10.`

    question.classList.add('scoring');

    optionsContainer.classList.add('hide');
    nextButton.classList.add('hide');
    replayButton.classList.remove('hide');
}


// Function that implements Click Functionality for the Replay Button
replayButton.addEventListener('click', function (e) {
    location.reload();
})


// Function Call
startQuiz();