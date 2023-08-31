
let startbutton = document.querySelector(".startingDiv h3")
let startimage = document.querySelector(".startingDiv .startGame")
let optionmenuimg = document.querySelector(".optionmenuimg")

function startTheGame() {
    startbutton.style.left = "50%"
    startbutton.style.transform = "translate(-50%, -50%) rotate(0deg)"
    startimage.style.left = "50%"
    startimage.style.transform = "translate(-50%, -50%) rotate(0deg)"
}

function buildTable(data) {
    var table = document.createElement("table");
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
                opacity += 0.02; // Adjust this value to control the speed of the fade-in
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 20); // The interval in milliseconds (adjust as needed)
    }

    var elementToFadeIn = document.getElementById("element");
    fadeIn(elementToFadeIn);
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
    }, 1000)
})
