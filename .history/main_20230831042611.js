let startbutton = this.document.querySelector(".startingDiv h3")
let startimage = this.document.querySelector(".startingDiv .startGame")
function startTheGame() {
    startbutton.style.left = "50%"
    startbutton.style.transform = "translate(-50%, -50%) rotate(0deg)"
    startimage.style.left = "50%"
    startimage.style.transform = "translate(-50%, -50%) rotate(0deg)"
}

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

})