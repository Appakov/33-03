var zero = document.querySelector('.zero')
var plus = document.querySelector('.plus')
var minus = document.querySelector('.minus')
var reset = document.querySelector('.reset')
zero.style.color = 'grey'

plus.addEventListener('click', function () {
    zero.value++
    if (zero.value === 0) {
        zero.style.color = 'grey'
    } else if (zero.value > 0) {
        zero.style.color = 'green'
    } else if (zero.value < 0) {
        zero.style.color = 'red'
    } else {
        zero.style.color = 'grey'
    }


})
minus.addEventListener('click', function () {
    zero.value--
    if (zero.value === 0) {
        zero.style.color = 'grey'
    } else if (zero.value > 0) {
        zero.style.color = 'green'
    } else if (zero.value < 0) {
        zero.style.color = 'red'
    } else {
        zero.style.color = 'grey'
    }

})
reset.addEventListener('click', function () {
    zero.value = 0
    if (zero.value === 0) {
        zero.style.color = 'grey'
    } else if (zero.value > 0) {
        zero.style.color = 'green'
    } else if (zero.value < 0) {
        zero.style.color = 'red'
    } else {
        zero.style.color = 'grey'
    }
})