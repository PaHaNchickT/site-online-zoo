const body = document.querySelector('body')
const input = document.querySelector('input')
const inputfocus = document.querySelector('input:focus')
const inputvalid = document.querySelector('input:valid')
const inputinvalid = document.querySelector('input:invalid')
const formbutton = document.querySelector('form > button')
const pagdiv = document.querySelectorAll('.pag > div')

////////////////////////////////////////////////base/////////////////////////////////////////////////////

body.addEventListener("keyup", function (event) {
    if (inputfocus !== null && inputvalid !== null) {
        input.style.borderColor = 'green'
        input.style.color = 'green'
        formbutton.style.color = 'green'
        formbutton.style.borderColor = 'green'
    }
    if (inputfocus !== null && inputinvalid !== null) {
        input.style.borderColor = 'red'
        input.style.color = 'red'
        formbutton.style.color = 'red'
        formbutton.style.borderColor = 'red'
    }
})

pagdiv.forEach(e => {
    e.addEventListener('mouseover', function () {
        e.querySelector('.title').style.top = '0'
        e.style.backgroundSize = '110%'
        e.style.backgroundPosition = '-10px 0'
    })
})

pagdiv.forEach(e => {
    e.addEventListener('mouseout', function () {
        e.querySelector('.title').style.top = '50px'
        e.style.backgroundSize = '100.5%'
        e.style.backgroundPosition = '0 0'
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////carousel//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const pagBox = document.querySelector('.pagBox')
const btnL = document.querySelector('.btnL')
const btnR = document.querySelector('.btnR')
const pagMain = document.querySelector('.pagMain')
const pagAdd = document.querySelector('.pagAdd')
const splitter = document.querySelector('.splitter')

/////////////////////////////////////////////////core////////////////////////////////////////////////

let divCenter = pagBox.childNodes[1]
let divAdd = pagBox.childNodes[3]
let isClicked = false
btnL.addEventListener('click', function () {
    splitter.style.display = 'block'
    if (isClicked === false) {
        divAdd.style.transition = '0s'
        divAdd.style.left = '1193.6px'
        setTimeout(() => {
            divAdd.style.transition = '1s'
            divAdd.style.left = '0'
            divAdd.style.opacity = '1'
            divCenter.style.left = '-1193.6px'
        }, 1)
        divCenter.style.opacity = '0'

        isClicked = true
    } else {
        divCenter.style.transition = '0s'
        divCenter.style.left = '1193.6px'
        setTimeout(() => {
            divCenter.style.transition = '1s'
            divCenter.style.left = '0'
            divCenter.style.opacity = '1'
            divAdd.style.opacity = '0'
        }, 1)
        divAdd.style.left = '-1193.6px'

        isClicked = false
    }
    divCenter.addEventListener('transitionend', function () { splitter.style.display = 'none' })
})

btnR.addEventListener('click', function () {
    splitter.style.display = 'block'
    if (isClicked === false) {
        divAdd.style.transition = '0s'
        divAdd.style.left = '-1193.6px'
        setTimeout(() => {
            divAdd.style.transition = '1s'
            divAdd.style.left = '0'
            divCenter.style.opacity = '0'
            divAdd.style.opacity = '1'
        }, 1)
        divCenter.style.left = '1193.6px'
        isClicked = true
        console.log(divCenter.getBoundingClientRect().left, divAdd.getBoundingClientRect().left)
    } else {
        divCenter.style.transition = '0s'
        divCenter.style.left = '-1193.6px'
        setTimeout(() => {
            divCenter.style.transition = '1s'
            divCenter.style.left = '0'
            divAdd.style.opacity = '0'
            divCenter.style.opacity = '1'
        }, 1)
        divAdd.style.left = '1193.6px'
        isClicked = false
        console.log(divCenter.getBoundingClientRect().left, divAdd.getBoundingClientRect().left)
    }
    divCenter.addEventListener('transitionend', function () { splitter.style.display = 'none' })
})