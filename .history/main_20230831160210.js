
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
    }, 5000)
})
