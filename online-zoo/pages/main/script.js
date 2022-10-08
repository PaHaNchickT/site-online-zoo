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

/////////////////////////////////////////////////core////////////////////////////////////////////////
// console.log(btnL)
btnL.addEventListener('click', function (event) {
    pagBox.childNodes.forEach((e, i) => {
    })
    console.log(pagBox.childNodes[1].getBoundingClientRect().left)
    console.log(pagBox.childNodes[3].getBoundingClientRect().left)
    if (pagBox.childNodes[1].getBoundingClientRect().left < pagBox.childNodes[3].getBoundingClientRect().left) {
        pagBox.childNodes[1].style.left = '-1193.6px'
        pagBox.childNodes[1].style.opacity = '0'
        pagBox.childNodes[3].style.left = '0'
        pagBox.childNodes[3].style.opacity = '1'
        pagBox.childNodes[1].addEventListener('transitionend', function() {
            pagBox.childNodes[1].style.left = '1193.6px'
            pagBox.childNodes[3].style.left = '0'
            console.log(pagBox.childNodes[1].getBoundingClientRect().left)
            console.log(pagBox.childNodes[3].getBoundingClientRect().left)
        })
    } else {
        pagBox.childNodes[3].style.left = '-1193.6px'
        pagBox.childNodes[3].style.opacity = '0'
        pagBox.childNodes[1].style.left = '0'
        pagBox.childNodes[1].style.opacity = '1'
        pagBox.childNodes[3].addEventListener('transitionend', function() {
            pagBox.childNodes[1].style.left = '0'
            pagBox.childNodes[3].style.left = '1193.6px'
            console.log(pagBox.childNodes[1].getBoundingClientRect().left)
            console.log(pagBox.childNodes[3].getBoundingClientRect().left)
        })
    }
})

btnR.addEventListener('click', function (event) {
    pagMain.style.left = '0'
    pagAdd.style.left = '1193.6px'
    pagBox.childNodes.forEach((e, i) => {
        if (e.className) {
            console.log(e.getBoundingClientRect().left)
        }
    })
})