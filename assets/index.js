const title = document.querySelector('h1')
const number = document.querySelector('#counter')
const buttons = document.querySelectorAll('button')
let count = 0

title.innerHTML = 'Ti sfido ad arrivare fino in fondo'

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains('increase')) {
            count++
        } else if (styles.contains('decrease')) {
            count --
        } else {
            count = 0
        }
        // Change title's text and number's color
        if (count > 19) {
            number.style.color = 'green'
            title.innerHTML = 'Complimenti, non molli mai!'
        } else if (count < 0) {
            number.style.color = 'red'
            title.innerHTML = 'Dai puoi farcela!'
        } else {
            number.style.color = 'white'
        }
        number.textContent = count
    }) 
})
