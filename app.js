// Array of all Questions
const questions = [
    {
        question: 'The brain of any computer system is _____.',
        options: [
            { prompt: 'ALU', correct: false },
            { prompt: 'Memory', correct: false },
            { prompt: 'CPU', correct: true },
            { prompt: 'Control Unit', correct: false }
        ]
    },

    {
        question: 'What is a Pixel?',
        options: [
            { prompt: 'Element of Analog Image', correct: false },
            { prompt: 'Element of Digital Image', correct: true },
            { prompt: 'Cluster of Analog Image', correct: false },
            { prompt: 'Cluster of Digital Image', correct: false }
        ]
    },

    {
        question: 'What is a computer program that converts assembly language to machine language called?',
        options: [
            { prompt: 'Compiler', correct: false },
            { prompt: 'Interpreter', correct: false },
            { prompt: 'Assembler', correct: true },
            { prompt: 'Comparator', correct: false }
        ]
    },

    {
        question: 'Which type of system puts the user into direct conversation with the computer through a keyboard?',
        options: [
            { prompt: 'Real Time Processing', correct: false },
            { prompt: 'Interactive Computer', correct: true },
            { prompt: 'Batch Processing', correct: false },
            { prompt: 'Time Sharing', correct: false }
        ]
    },

    {
        question: 'What does ASCII stand for?',
        options: [
            { prompt: 'American Standard Code for Information Interchange', correct: true },
            { prompt: 'All Purpose Scientific Code for Information Interchange', correct: false },
            { prompt: 'American Security Code for Information Interchange', correct: false },
            { prompt: 'American Scientific Code for Information Interchange', correct: false }
        ]
    },

    {
        question: 'Who developed JAVA programming language?',
        options: [
            { prompt: 'Edmund M. Clarke', correct: false },
            { prompt: 'James D. Foley', correct: false },
            { prompt: 'Douglas Engelbart', correct: false },
            { prompt: 'James Gosling', correct: true }
        ]
    },

    {
        question: 'Moving processes from the Main Memory to the Disk is called _____.',
        options: [
            { prompt: 'Scheduling', correct: false },
            { prompt: 'Swapping', correct: true },
            { prompt: 'Spooling', correct: false },
            { prompt: 'Catching', correct: false }
        ]
    },

    {
        question: 'How many layers are there in the TCP/IP Protocol?',
        options: [
            { prompt: '5', correct: false },
            { prompt: '7', correct: false },
            { prompt: '2', correct: false },
            { prompt: '4', correct: true }
        ]
    },

    {
        question: 'Which of the follwing is NOT a Web Browser?',
        options: [
            { prompt: 'MOSAIC', correct: false },
            { prompt: 'WWW', correct: false },
            { prompt: 'Facebook', correct: true },
            { prompt: 'Netscape Navigator', correct: false }
        ]
    },

    {
        question: 'A packet of information that travels between a browser and the web server is known as _____.',
        options: [
            { prompt: 'Adware', correct: false },
            { prompt: 'Spyware', correct: false },
            { prompt: 'Cookie', correct: true },
            { prompt: 'Malware', correct: false }
        ]
    }
];

// Element objects
const question = document.querySelector('#question');
const answerButtons = document.querySelector('#answer-buttons');
const nextButton = document.querySelector('#next-button button');

// Variables
let currentQuestionIndex = 0;
let score = 0;

// Functions that make up the Flow Logic

function startQuiz() {
    // Reset both to Zero
    currentQuestionIndex = 0;
    score = 0;

    nextButton.innerText = 'Next';  // as we change it to 'Replay' when the quiz ends

    showQuestion();
}

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
        const optionButton = document.querySelector(`#answer-buttons button:nth-child(${optionNumber})`);
        optionButton.innerText = currentQuestion.options[optionIndex].prompt;
    }
}


// CALLING
startQuiz();