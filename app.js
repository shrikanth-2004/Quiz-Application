const quizData = [
    {
        question: "What is the capital city of India?",
        a: "Mumbai",
        b: "New Delhi",
        c: "Kolkata",
        d: "Chennai",
        correct: "b",
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        a: "Subhas Chandra Bose",
        b: "Jawaharlal Nehru",
        c: "Mahatma Gandhi",
        d: "Bhagat Singh",
        correct: "c",
    },
    {
        question: "Which is the national animal of India?",
        a: "Peacock",
        b: "Tiger",
        c: "Elephant",
        d: "Lion",
        correct: "b",
    },
    {
        question: "What is the national sport of India?",
        a: "Hockey",
        b: "Cricket",
        c: "Kabaddi",
        d: "Football",
        correct: "a",
    },
    {
        question: "Which is the national flower of India?",
        a: "Lotus",
        b: "Rose",
        c: "Marigold",
        d: "Sunflower",
        correct: "a",
    },
    {
        question: "What is the name of India's national river?",
        a: "Ganga",
        b: "Yamuna",
        c: "Brahmaputra",
        d: "Godavari",
        correct: "a",
    },
    {
        question: "Who was the first Prime Minister of India?",
        a: "Lal Bahadur Shastri",
        b: "Mahatma Gandhi",
        c: "Jawaharlal Nehru",
        d: "Sardar Patel",
        correct: "c",
    },
    {
        question: "Which is the largest state in India by area?",
        a: "Madhya Pradesh",
        b: "Maharashtra",
        c: "Rajasthan",
        d: "Uttar Pradesh",
        correct: "c",
    },
    {
        question: "Which festival is known as the 'Festival of Lights'?",
        a: "Holi",
        b: "Diwali",
        c: "Dussehra",
        d: "Raksha Bandhan",
        correct: "b",
    },
    {
        question: "Which monument is known as the symbol of love?",
        a: "Qutub Minar",
        b: "India Gate",
        c: "Taj Mahal",
        d: "Charminar",
        correct: "c",
    },
];


let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }
    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", function () {
    const data = quizData[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion();
});

const getAnswer = () => {
    let ans;
    allInputs.forEach((inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    });
    return ans;
};

const reset = () => {
    allInputs.forEach((inputEl) => {
        inputEl.checked = false;
    });
};

const quizEnd = () => {
    document.getElementsByClassName(
        "container"
    )[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`;
};

loadQuestion(index);
