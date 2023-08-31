window.addEventListener("load", async function () {
    let loader = document.getElementById("preloader")
    loader.style.display = "none";
    let startbutton = this.document.querySelector(".startingDiv h3")
    let startimage = this.document.querySelector(".StartGame")
    function startTheGame() {
        startbutton.style.left = "50%"
        startbutton.style.transform = "rotate(0deg)"
        startimage.style.left = "50%"
        startimage.style.transform = "rotate(0deg)"
    }
    await startTheGame()
})