function startTheGame() {
    var startbutton = this.document.querySelector(".startingDiv h3")
    var startimage = this.document.querySelector(".startingDiv .startGame")
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

})