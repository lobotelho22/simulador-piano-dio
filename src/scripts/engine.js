const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.getElementById("volume_slider")
const toggleButton = document.getElementById("toggle_keys")
const keysSubs = document.querySelectorAll(".piano-keys span")

let audio = new Audio()
const mapedKeys = [];

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
})

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key.toLowerCase())
    }
})

volumeSlider.addEventListener("mouseup", () => {
    audio.volume = volumeSlider.valueAsNumber / 100
})

toggleButton.addEventListener("click", () => {
    if (!toggleButton.checked) {
        keysSubs.forEach((sub) => {
            sub.style.display = 'none';
        })
    } else {
        keysSubs.forEach((sub) => {
            sub.style.display = '';
        })
    }
})
