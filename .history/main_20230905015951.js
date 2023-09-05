import { fetchData } from "./glosary.js";

try {
    const result = await fetchData();
    mywords = result;
    // Proceed with other game setup logic here
} catch (error) {
    console.error("Error fetching data:", error);
}

window.addEventListener("load", async function () {
    loader.style.display = "none";

    startTheGame()
})

let mywords = []
let loader = document.getElementById("preloader")
let startbutton = document.querySelector(".startingDiv h3")
let startimage = document.querySelector(".startingDiv .startGame")
let optionmenuimg = document.querySelector(".optionmenuimg")
var table = document.createElement("table");
let Alphbetsimg = document.querySelector(".Alphbets")
let button_choicesimg = document.querySelector(".buttonchoices")

function startTheGame() {
    startbutton.style.left = "50%"
    startbutton.style.transform = "translate(-50%, -50%) rotate(0deg)"
    startimage.style.left = "50%"
    startimage.style.transform = "translate(-50%, -50%) rotate(0deg)"
}

startbutton.addEventListener("click", async function () {
    startbutton.style.left = "110%"
    startbutton.style.transform = "translate(-50%, -50%) rotate(-90deg)"
    startimage.style.left = "-20%"
    startimage.style.transform = "translate(-50%, -50%) rotate(90deg)"
    optionmenuimg.style.cssText = "top:50%"
    setTimeout(() => {
        buildTable(tableData);
    }, 500)
})

function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.02;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

async function buildTable(data) {
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < data[i].length; j++) {
            var cell = document.createElement("td");
            cell.textContent = data[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);


    fadeIn(table);
}




function choosen_word(category, index) {
    console.log(mywords[category][index])
}


var tableData = [
    ["animals", "clothes", "food", "jobs"],
    ["bathroom", "body", "computer", "sports"],
    ["kitchen", "transport", "Hospital", "Places"],
    ["subjects", "Numbers", "countries", "garden"],
    ["colors"]
];


function countDownStart() {
    let div = document.querySelector(".counter-div")
    loader.style.display = "flex";
    div.innerHTML = 3;
    function countdown() {
        div.innerHTML -= 1;
        if (div.innerHTML === "0") {
            loader.style.display = "none";
            clearInterval(counter)
        }
    }
    let counter = setInterval(countdown, 1000)
}


function createTimerStructure() {
    const timerContainer = document.createElement('div');
    timerContainer.id = 'timer';
    const timerCircles = document.createElement('div');
    timerCircles.className = 'timer-circles';
    const outerCircle = document.createElement('div');
    outerCircle.className = 'timer-outer-circle';
    const middleCircle = document.createElement('div');
    middleCircle.className = 'timer-middle-circle';
    const innerCircle = document.createElement('div');
    innerCircle.className = 'timer-inner-circle';
    middleCircle.appendChild(innerCircle);
    outerCircle.appendChild(middleCircle);
    timerCircles.appendChild(outerCircle);
    const counterDiv = document.createElement('div');
    counterDiv.className = 'counter-div';
    timerContainer.appendChild(timerCircles);
    timerContainer.appendChild(counterDiv);
    document.body.appendChild(timerContainer);
    function countDownStartTimer() {
        timerContainer.style.display = "flex";
        counterDiv.innerHTML = 120;
        function countdown() {
            counterDiv.innerHTML -= 1;
            if (counterDiv.innerHTML === "0") {
                timerContainer.style.display = "none";
                clearInterval(counter)
            }
        }
        let counter = setInterval(countdown, 1000)
    }
    countDownStartTimer()
}

async function showChoices(category, selectedword) {
    function generateAlphabetArray() {
        const alphabet = [];
        for (let i = 97; i <= 122; i++) { // ASCII values for lowercase letters
            alphabet.push(String.fromCharCode(i));
        }
        return alphabet;
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
        }
        return array;
    }
    let selectedwordArray = selectedword.split("");
    let otherLetters = shuffleArray(generateAlphabetArray())
    otherLetters.length = 15 - selectedword.length
    let finalarray = shuffleArray([...selectedwordArray, ...otherLetters])
    console.log(finalarray)
    var suggestesDiv = document.createElement("div");
    suggestesDiv.className = "suggestes";
    var h3Element = document.createElement("h3");
    h3Element.innerHTML = category
    suggestesDiv.appendChild(h3Element);
    var letterChoicesDiv = document.createElement("div");
    letterChoicesDiv.className = "Letter-Choices-container";
    for (let i = 0; i < 15; i++) {
        var Letterdiv = document.createElement("span")
        letterChoicesDiv.appendChild(Letterdiv)
    }
    suggestesDiv.appendChild(letterChoicesDiv);
    document.body.appendChild(suggestesDiv);

    async function f() {
        let spanset = Array.from(letterChoicesDiv.children)
        for (let i = 0; i < spanset.length; i++) {
            fadeIn(spanset[i])
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    f()
}

function FinalWord(category) {
    var finalWordDiv = document.createElement("div");
    finalWordDiv.className = "finalword";
    for (let i = 0; i < category.length; i++) {
        var finalLetterDiv = document.createElement("div");
        finalLetterDiv.className = "finalletter";
        finalWordDiv.appendChild(finalLetterDiv);
    }
    document.body.appendChild(finalWordDiv);
    fadeIn(finalWordDiv)
}

async function DrawHangMan() {
    let mainDrawingDiv = document.createElement("div")
    mainDrawingDiv.className = "mainDrawingDiv"
    document.body.appendChild(mainDrawingDiv)

    let createPart = (className) => {
        let part = document.createElement("div");
        part.className = className;
        return part;
    };

    let components = [
        "base",
        "bar",
        "hangbar",
        "manhead",
        "manbody",
        "manla",
        "manra",
        "manll",
        "manrl",
        "hangrope"
    ];

    let error_counter = 0;
    document.addEventListener("click", function () {
        if (error_counter < components.length) {
            mainDrawingDiv.appendChild(createPart(components[error_counter]));
            error_counter++;
        }
    })
}




async function playground(category) {
    table.style.cssText = "opacity: 0;"
    await new Promise(resolve => setTimeout(resolve, 500));
    table.style.cssText = "display: none;"
    await new Promise(resolve => setTimeout(resolve, 300));
    optionmenuimg.style.width = "650px"
    optionmenuimg.style.transform = "translate(-100%, -60%)"
    await new Promise(resolve => setTimeout(resolve, 300));
    button_choicesimg.style.transform = "rotate(0deg)"
    button_choicesimg.style.top = "-10%"
    button_choicesimg.style.left = "40%"
    await new Promise(resolve => setTimeout(resolve, 300));
    Alphbetsimg.style.transform = "translate(-50%, 17px) rotate(360deg)"
    Alphbetsimg.style.top = "51%"
    Alphbetsimg.style.left = "50%"
    await new Promise(resolve => setTimeout(resolve, 300));
    let index = Math.floor(Math.random() * 10)
    // choosen_word(category, index);
    await new Promise(resolve => setTimeout(resolve, 300));
    countDownStart()
    await new Promise(resolve => setTimeout(resolve, 3000));
    showChoices(category, mywords[category][index])
    FinalWord(mywords[category][index])
    await new Promise(resolve => setTimeout(resolve, 5000));
    createTimerStructure()
    DrawHangMan()
}

document.addEventListener("click", function (e) {
    if (e.target.tagName === "TD") {
        playground(e.target.innerText)
    }
})

