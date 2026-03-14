

AOS.init({
    duration: 1000
})

function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    })
}

function openSakura() {
    document.getElementById("sakuraCard").classList.toggle("open")
}

/* hoa anh đào rơi */

function createSakura() {

    const sakura = document.createElement("div")

    sakura.className = "sakura"
    sakura.innerHTML = "🌸"

    sakura.style.left = Math.random() * 100 + "vw"

    const size = Math.random() * 20 + 16
    sakura.style.fontSize = size + "px"

    const duration = Math.random() * 6 + 6
    sakura.style.animationDuration = duration + "s"

    document.body.appendChild(sakura)

    setTimeout(() => {
        sakura.remove()
    }, duration * 1000)

}

setInterval(createSakura, 350)
document.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");
    music.play();
}, { once: true });
