const countdown = document.querySelector("#countdown")
const startButton = document.querySelector("#startButton")

startButton.addEventListener("click", () => {
    showNumbers(100)
    
})

function showNumbers(countfrom) {
    let counter = countfrom
    
    const countdownInterval = setInterval(function count() {
        countdown.textContent = counter
        counter--
        
        if (counter == -1) {
                setTimeout(function() {
                    countdown.textContent = "Time's up"
                    clearInterval(countdownInterval)
                })
            }
    }, 100)
}
