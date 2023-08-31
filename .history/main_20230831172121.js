
let startbutton = document.querySelector(".startingDiv h3")
let startimage = document.querySelector(".startingDiv .startGame")
let optionmenuimg = document.querySelector(".optionmenuimg")
var table = document.createElement("table");

function startTheGame() {
    startbutton.style.left = "50%"
    startbutton.style.transform = "translate(-50%, -50%) rotate(0deg)"
    startimage.style.left = "50%"
    startimage.style.transform = "translate(-50%, -50%) rotate(0deg)"
}

function buildTable(data) {
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

    var elementToFadeIn = document.getElementById("element");
    fadeIn(table);
}

var tableData = [
    ["animals", "clothes", "food", "jobs"],
    ["bathroom", "body", "computer", "sports"],
    ["kitchen", "transport", "Hospital", "Places"],
    ["subjects", "Numbers", "countries", "garden"],
    ["colors"]
];

window.addEventListener("load", async function () {
    let loader = document.getElementById("preloader")
    loader.style.display = "none";
    startTheGame()
})

startbutton.addEventListener("click", function () {
    startbutton.style.left = "110%"
    startbutton.style.transform = "translate(-50%, -50%) rotate(-90deg)"
    startimage.style.left = "-20%"
    startimage.style.transform = "translate(-50%, -50%) rotate(90deg)"
    optionmenuimg.style.cssText = "top:50%"
    setTimeout(() => {
        buildTable(tableData);
    }, 500)
})

function playground(category) {
    table.style.display = "none"
}

document.addEventListener("click", function (e) {
    if (e.target.tagName === "TD") {
        playground(e.target.innerText)
    }
})

