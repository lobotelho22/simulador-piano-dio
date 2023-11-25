const  pianoKeys = document.querySelectorAll(".piano-keys li")

pianoKeys.forEach((key) => {
    console.log(key.dataset.key)
})