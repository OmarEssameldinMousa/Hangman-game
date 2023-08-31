new Promise((resolve, reject) => {
    window.addEventListener("load", async function () {
        let loader = document.getElementById("preloader")
        loader.style.display = "none";
    })
}).then(() => {
    let startbutton = this.document.querySelector(".startingDiv h3")
    let startimage = this.document.querySelector(".StartGame")
    startbutton.style.left = "50%"
    startbutton.style.transform = "rotate(0deg)"
    startimage.style.left = "50%"
    startimage.style.transform = "rotate(0deg)"

})