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
const pagEl = document.getElementsByClassName('card1')[0]
const btnL = document.querySelector('.btnL')
const btnR = document.querySelector('.btnR')
const pagMain = document.querySelector('.pagMain')
const pagAdd = document.querySelector('.pagAdd')
const splitter = document.querySelector('.splitter')

/////////////////////////////////////////////////core////////////////////////////////////////////////

let divCenter = pagBox.childNodes[1]
let divAdd = pagBox.childNodes[3]
let isClicked = false
let n
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
            divAdd.style.left = '-1193.6px'
        }, 1)
        divAdd.style.opacity = '0'
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
    }
    divCenter.addEventListener('transitionend', function () { splitter.style.display = 'none' })
})

function boxResize() {
    console.log(pagBox.clientWidth / (pagEl.clientWidth + 34))
    console.log(pagEl.clientWidth)

    switch (window.screen.width) {
        case 1600: (function () {
            if (window.localStorage) {
                if (!localStorage.getItem('firstLoad')) {
                    localStorage['firstLoad'] = true;
                    window.location.reload();
                }
                else
                    localStorage.removeItem('firstLoad');
            }
        })()
            break;
        case 1000: (function () {
            if (window.localStorage) {
                if (!localStorage.getItem('firstLoad')) {
                    localStorage['firstLoad'] = true;
                    window.location.reload();
                }
                else
                    localStorage.removeItem('firstLoad');
            }
        })()
            break;
        case 640: (function () {
            if (window.localStorage) {
                if (!localStorage.getItem('firstLoad')) {
                    localStorage['firstLoad'] = true;
                    window.location.reload();
                }
                else
                    localStorage.removeItem('firstLoad');
            }
        })()
            break;
        case 320: (function () {
            if (window.localStorage) {
                if (!localStorage.getItem('firstLoad')) {
                    localStorage['firstLoad'] = true;
                    window.location.reload();
                }
                else
                    localStorage.removeItem('firstLoad');
            }
        })()
            break;
    }

    if (window.screen.width >= 1600) {
        n = Math.floor((pagBox.clientWidth / (pagEl.clientWidth + 34)))
        divAdd.style.width = `${(pagEl.clientWidth + 34) * n}px`
        divCenter.style.width = `${(pagEl.clientWidth + 34) * n}px`
    } else if (window.screen.width >= 1000 && window.screen.width < 1600) {
        n = Math.floor((pagBox.clientWidth / (pagEl.clientWidth + 4)))
        divAdd.style.width = `${(pagEl.clientWidth + 4) * n + 46}px`
        divCenter.style.width = `${(pagEl.clientWidth + 4) * n + 46}px`
    } else if (window.screen.width >= 640 && window.screen.width < 1000) {
        n = Math.floor((pagBox.clientWidth / (pagEl.clientWidth + 4)))
        divAdd.style.width = `${(pagEl.clientWidth + 4) * n + 24}px`
        divCenter.style.width = `${(pagEl.clientWidth + 4) * n + 24}px`
    } else if (window.screen.width >= 320 && window.screen.width < 640) {
        n = Math.floor((pagBox.clientWidth / (pagEl.clientWidth + 4)))
        console.log(n)
        divAdd.style.width = `${(pagEl.clientWidth + 4) * n + 4}px`
        divCenter.style.width = `${(pagEl.clientWidth + 4) * n + 4}px`
    }
}

boxResize()

window.addEventListener('resize', function () {
    boxResize()
})